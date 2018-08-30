import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableEditorModule, TableEditorRowDirective, TextCellControlValueAccessor } from '../table-editor.module';
import { TableEditorDirective, TeExecutor } from '../table/table.directive';

import { By } from '@angular/platform-browser';
import { NavigationAction } from '../navigators/navigator';
import { RowChangeEvent} from '../utils/row-change-event';

@Component({
	template: `
	<table tableEditor>
		<tr teRow *ngFor="let row of rows; let i = index" [teContext]="rowContext">
			<td [teDisabled]='i === 3' teCell type='text' [(ngModel)]="row.col1">
				<ng-container teAnchor></ng-container>
			</td>
			<td [teDisabled]='i === 3' teCell type='text' [(ngModel)]="row.col2">
				<ng-container teAnchor></ng-container>
			</td>
			<td [teDisabled]='i === 3 || i === 2' teCell type='text' [(ngModel)]="row.col3">
				<ng-container teAnchor></ng-container>
			</td>
			<td [teDisabled]='i === 3' teCell type='text' [(ngModel)]="row.col4">
				<ng-container teAnchor></ng-container>
			</td>
			<td [teDisabled]='i === 3' teCell type='text' [(ngModel)]="row.col5">
				<ng-container teAnchor></ng-container>
			</td>
			<td [teDisabled]='i === 3' teCell type='text' [(ngModel)]="row.col6">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
  `
})
class DummyComponent {
	public rows = [
		{
			col1: '(1,1)',
			col2: '(1,2)',
			col3: '(1,3)',
			col4: '(1,4)',
			col5: '(1,5)',
			col6: '(1,6)'
		},
		{
			col1: '(2,1)',
			col2: '(2,2)',
			col3: '(2,3)',
			col4: '(2,4)',
			col5: '(2,5)',
			col6: '(2,6)'
		},
		{
			col1: '(3,1)',
			col2: '(3,2)',
			col3: '(3,3)',
			col4: '(3,4)',
			col5: '(3,5)',
			col6: '(3,6)'
		},
		{
			col1: '(4,1)',
			col2: '(4,2)',
			col3: '(4,3)',
			col4: '(4,4)',
			col5: '(4,5)',
			col6: '(4,6)'
		},
		{
			col1: '(5,1)',
			col2: '(5,2)',
			col3: '(5,3)',
			col4: '(5,4)',
			col5: '(5,5)',
			col6: '(5,6)'
		},
		{
			col1: '(6,1)',
			col2: '(6,2)',
			col3: '(6,3)',
			col4: '(6,4)',
			col5: '(6,5)',
			col6: '(6,6)'
		}
	];
	public rowContext = { test: 123 };
}
describe('TableEditorDirective', () => {
	let component: DummyComponent;
	let fixture: ComponentFixture<DummyComponent>;
	let directive: TableEditorDirective;
	let debugElement: DebugElement;
	let firstExecutor: TeExecutor;
	let secondExecutor: TeExecutor;
	const exitExecutor: TeExecutor = { row: null, cell: null };
	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [DummyComponent],
			imports: [FormsModule, TableEditorModule]
		}).compileComponents();
		fixture = TestBed.createComponent(DummyComponent);
		debugElement = fixture.debugElement;
		component = fixture.componentInstance;
	});
	describe('initialize:', () => {
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorDirective)).injector.get(TableEditorDirective);
		}));
		it('loads the table directive', () => {
			expect(directive).not.toBe(null);
		});
		it('has a collection of rows', () => {
			expect(directive['rows'].length).toBeGreaterThan(0);
			expect(directive['rows'].first.inputify).toBeDefined();
			expect(directive['rows'].first.cellify).toBeDefined();
		});
	});
	describe('executeFor flow', () => {
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorDirective)).injector.get(TableEditorDirective);
			const targetRowFirst = directive['rows'].first;
			const targetCellFirst = directive['rows'].first.cells[directive['rows'].first.cells.length - 1];
			const targetRowSecond = directive['rows'].last;
			const targetCellSecond = directive['rows'].last.cells[0];
			firstExecutor = {
				cell: targetCellFirst,
				row: targetRowFirst
			};
			secondExecutor = {
				cell: targetCellSecond,
				row: targetRowSecond
			};
			spyOn(directive['rows'].first, 'inputify').and.callThrough();
			spyOn(directive['rows'].first, 'cellify').and.callThrough();
			spyOn(directive['rows'].last, 'inputify').and.callThrough();
			spyOn(directive['rows'].last, 'cellify').and.callThrough();
			directive['executeFor'](firstExecutor);
			fixture.detectChanges();
			tick();
		}));
		it('can inputify a row', () => {
			expect(directive['rows'].first.inputify).toHaveBeenCalled();
			expect(document.activeElement).toEqual(
				directive['rows'].first.cells[directive['rows'].first.cells.length - 1]['inputElement'].nativeElement
			);
		});
		it('can cellify the same row when inputifying the next one', fakeAsync(() => {
			directive['executeFor'](secondExecutor);
			fixture.detectChanges();
			tick();
			expect(directive['rows'].first.cellify).toHaveBeenCalled();
			expect(directive['rows'].last.inputify).toHaveBeenCalled();
			expect(document.activeElement).toEqual(directive['rows'].last.cells[0]['inputElement'].nativeElement);
		}));
		it('wont do anything when feeding the same set of arguments', fakeAsync(() => {
			directive['executeFor'](firstExecutor);
			fixture.detectChanges();
			tick();
			expect(directive['rows'].first.inputify).toHaveBeenCalledTimes(1);
			expect(document.activeElement).toEqual(
				directive['rows'].first.cells[directive['rows'].first.cells.length - 1]['inputElement'].nativeElement
			);
		}));
		it('can exit table editor mode', fakeAsync(() => {
			directive['executeFor'](exitExecutor);
			fixture.detectChanges();
			tick();
			expect(directive['rows'].first.cellify).toHaveBeenCalled();
			expect(document.activeElement).toEqual(document.body);
		}));
		it('can trigger via trigger api', fakeAsync(() => {
			directive.trigger({ row: secondExecutor.row });
			fixture.detectChanges();
			tick();
			expect(directive['rows'].first.cellify).toHaveBeenCalled();
			expect(directive['rows'].last.inputify).toHaveBeenCalled();
			expect(document.activeElement).toEqual(directive['rows'].last.cells[0]['inputElement'].nativeElement);
		}));
	});
	describe('row change event', () => {
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorDirective)).injector.get(TableEditorDirective);
			const targetRowFirst = directive['rows'].first;
			const targetCellFirst = directive['rows'].first.cells[directive['rows'].first.cells.length - 1];
			const targetRowSecond = directive['rows'].last;
			const targetCellSecond = directive['rows'].last.cells[0];
			firstExecutor = {
				cell: targetCellFirst,
				row: targetRowFirst
			};
			secondExecutor = {
				cell: targetCellSecond,
				row: targetRowSecond
			};
		}));
		it('fires the appropiate row change event when opening a row for first time', doneFn => {
			directive.rowChange.subscribe((event: RowChangeEvent<any>) => {
				expect(event).toBeDefined();
				expect(event['previous'].row).toBeNull();
				expect(event['previous'].context).toBeNull();
				expect(event['next'].row).toEqual(firstExecutor.row);
				expect(event['next'].context).toEqual(component.rowContext);
				doneFn();
			});
			directive['executeFor'](firstExecutor);
		});
		it('fires the appropiate row change event when changing to another row for first time', doneFn => {
			directive['executeFor'](firstExecutor);
			directive.rowChange.subscribe((event: RowChangeEvent<any>) => {
				expect(event).toBeDefined();
				expect(event['previous'].row).toEqual(firstExecutor.row);
				expect(event['previous'].context).toEqual(component.rowContext);
				expect(event['next'].row).toEqual(secondExecutor.row);
				expect(event['next'].context).toEqual(component.rowContext);
				doneFn();
			});
			directive['executeFor'](secondExecutor);
		});
		it('fires the appropiate row change event when exiting editor mode', doneFn => {
			directive['executeFor'](secondExecutor);
			directive.rowChange.subscribe((event: RowChangeEvent<any>) => {
				expect(event).toBeDefined();
				expect(event['previous'].row).toEqual(secondExecutor.row);
				expect(event['previous'].context).toEqual(component.rowContext);
				expect(event['next'].row).toBeNull();
				expect(event['next'].context).toBeNull();
				doneFn();
			});
			directive['executeFor'](exitExecutor);
		});
	});
	describe('Action parser:', () => {
		let executeFor: any;
		let actionParser: any;
		let rows: TableEditorRowDirective[];
		let cells: TextCellControlValueAccessor[];
		let spy: jasmine.Spy;
		function resetSpy() {
			spy.calls.reset();
		}
		function getExecutorCellByCoordinates(i, j): TeExecutor {
			return {
				row: rows[i - 1],
				cell: rows[i - 1].cells[j - 1]
			};
		}
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorDirective)).injector.get(TableEditorDirective);
			actionParser = directive['actionParser'].bind(directive);
			spy = spyOn<any>(directive, 'executeFor');
			executeFor = directive['executeFor'];
			rows = directive['rows'].toArray();
			cells = rows.reduce((prevVal, currVal) => {
				prevVal.push(currVal.cells);
				return prevVal;
			}, []);
		}));
		describe('Going left', () => {
			it('goes left from (1, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Left);
			});
			it('goes left from (1, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(1, 5), NavigationAction.Left);
			});
			it('goes left from (6, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(5, 6), NavigationAction.Left);
			});
			it('goes left from (6, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(6, 5), NavigationAction.Left);
			});
		});
		describe('Going right', () => {
			it('goes right from (1, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(1, 2), NavigationAction.Right);
			});
			it('goes right from (1, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(2, 1), NavigationAction.Right);
			});
			it('goes right from (6, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(6, 2), NavigationAction.Right);
			});
			it('goes right from (6, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Right);
			});
		});
		describe('Going up', () => {
			it('goes up from (1, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Up);
			});
			it('goes up from (1, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Up);
			});
			it('goes up from (6, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(5, 1), NavigationAction.Up);
			});
			it('goes up from (6, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(5, 6), NavigationAction.Up);
			});
		});
		describe('Going down', () => {
			it('goes down from (1, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(2, 1), NavigationAction.Down);
			});
			it('goes down from (1, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(1, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(2, 6), NavigationAction.Down);
			});
			it('goes down from (6, 1)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Down);
			});
			it('goes down from (6, 6)', () => {
				const startingPoint = getExecutorCellByCoordinates(6, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(exitExecutor, NavigationAction.Down);
			});
		});
		describe('Disabled rows and cells', () => {
			let startingPoint: TeExecutor;
			it('skips row 4', () => {
				startingPoint = getExecutorCellByCoordinates(3, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(5, 1), NavigationAction.Down);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(3, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(5, 1), NavigationAction.Right);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(5, 1);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 6), NavigationAction.Left);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(5, 6);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 6), NavigationAction.Up);
			});
			it('skips cell (3,3)', () => {
				startingPoint = getExecutorCellByCoordinates(3, 2);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Right);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 4), NavigationAction.Right);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(3, 4);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Left);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 2), NavigationAction.Left);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(2, 3);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Down);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 4), NavigationAction.Down);
				resetSpy();

				startingPoint = getExecutorCellByCoordinates(5, 3);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(3, 4), NavigationAction.Up);
				resetSpy();
			});
			it('moves from (3,4) to (2,4) (moving away from row with disabled cells)', () => {
				startingPoint = getExecutorCellByCoordinates(3, 4);
				directive['currentRow'] = startingPoint.row;
				directive['currentCell'] = startingPoint.cell;
				actionParser(NavigationAction.Up);
				expect(executeFor).toHaveBeenCalledWith(getExecutorCellByCoordinates(2, 4), NavigationAction.Up);
				resetSpy();

			});
		});
	});
});
