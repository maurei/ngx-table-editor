import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableEditorModule } from '../table-editor.module';
import { TableEditorRowDirective } from '../table/row.directive';

import { By } from '@angular/platform-browser';

@Component({
	template: `
	<table>
		<tr teRow *ngFor="let row of rows; let $index = index">
			<td teCell type='text' [(ngModel)]="row.stuff" [teDisabled]='$index == 2'>
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
  `
})
class DummyComponent {
	public rows = [{ stuff: 'row 1' }, { stuff: 'row 2' }, { stuff: 'row 3' }, { stuff: 'row 4' }, { stuff: 'row 5' }, { stuff: 'row 6' }];
}
describe('TableEditorRowDirective', () => {
	let component: DummyComponent;
	let fixture: ComponentFixture<DummyComponent>;
	let directive: TableEditorRowDirective;
	let debugElement: DebugElement;
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
			directive = debugElement.query(By.directive(TableEditorRowDirective)).injector.get(TableEditorRowDirective);
		}));
		it('loads the row directive', () => {
			expect(directive).not.toBe(null);
		});
		it('has a collection of cells', () => {
			expect(directive.cells.length).toEqual(1);
			expect(directive.cells[0].inputify).toBeDefined();
			expect(directive.cells[0].cellify).toBeDefined();
		});
	});
	describe('inputifying flow and back', () => {
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorRowDirective)).injector.get(TableEditorRowDirective);
			spyOn(directive.cells[0], 'inputify');
			spyOn(directive.cells[directive.cells.length - 1], 'cellify');
			directive.inputify();
			directive.cellify();
		}));
		it('it inputifies all cells', () => {
			expect(directive.cells[0].inputify).toHaveBeenCalled();
			expect(directive.cells[directive.cells.length - 1].inputify).toHaveBeenCalled();
		});
		it('it cellifies all cells', () => {
			expect(directive.cells[0].cellify).toHaveBeenCalled();
			expect(directive.cells[directive.cells.length - 1].cellify).toHaveBeenCalled();
		});
	});
});
