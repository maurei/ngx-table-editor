import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableEditorModule } from '../table-editor.module';
import { TableEditorDirective } from '../table/table.directive';
import { NavigationAction } from '../navigators/navigator';
import { KeyboardNavigator } from '../navigators/keyboard-navigator';

import { By } from '@angular/platform-browser';

class DummyEvent {
	public which: any;
	public shiftKey: any;
	public preventDefault = () => {};
	public stopPropagation = () => {};
	constructor(which, shiftKey) {
		this.which = which;
		this.shiftKey = shiftKey;
	}
}

@Component({
	template: `
	<table tableEditor>
		<tr teRow *ngFor="let row of rows">
			<td teCell type='text' [(ngModel)]="row.stuff">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
  `
})
class DummyComponent {
	public rows = [{ stuff: 'row 1' }, { stuff: 'row 2' }, { stuff: 'row 3' }, { stuff: 'row 4' }, { stuff: 'row 5' }, { stuff: 'row 6' }];
	public rowContext = { test: 123 };
}
describe('Navigator', () => {
	let component: DummyComponent;
	let fixture: ComponentFixture<DummyComponent>;
	let directive: TableEditorDirective;
	let debugElement: DebugElement;
	let navigator: KeyboardNavigator;
	let executionSpy: jasmine.Spy;
	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [DummyComponent],
			imports: [FormsModule, TableEditorModule]
		}).compileComponents();
		fixture = TestBed.createComponent(DummyComponent);
		debugElement = fixture.debugElement;
		component = fixture.componentInstance;
	});
	describe('general:', () => {
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TableEditorDirective)).injector.get(TableEditorDirective);
			navigator = new KeyboardNavigator(
				directive['renderer'],
				directive['element'],
				directive['actionParser']
			);
			directive['navigators'] = [navigator];
			spyOn(navigator, 'listener').and.callThrough();
			directive.ngOnInit();
			executionSpy = spyOn<any>(navigator, 'execute');
		}));
		it('has its listener function being called', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			expect(navigator.listener).toHaveBeenCalled();
		}));
		it('parses various events', () => {
			const up = new DummyEvent(38, false) as KeyboardEvent;
			const down = new DummyEvent(40, false) as KeyboardEvent;
			const right = new DummyEvent(9, false) as KeyboardEvent;
			const left = new DummyEvent(9, true) as KeyboardEvent;
			const esc = new DummyEvent(13, false) as KeyboardEvent;
			const enter = new DummyEvent(27, false) as KeyboardEvent;
			const bad = new DummyEvent(1337, false) as KeyboardEvent;
			navigator['actionGenerator'](up);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Up);
			executionSpy.calls.reset();
			navigator['actionGenerator'](down);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Down);
			executionSpy.calls.reset();
			navigator['actionGenerator'](right);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Right);
			executionSpy.calls.reset();
			navigator['actionGenerator'](left);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Left);
			executionSpy.calls.reset();
			navigator['actionGenerator'](esc);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Exit);
			executionSpy.calls.reset();
			navigator['actionGenerator'](enter);
			expect(navigator['execute']).toHaveBeenCalledWith(NavigationAction.Exit);
			executionSpy.calls.reset();
			navigator['actionGenerator'](bad);
			expect(navigator['execute']).not.toHaveBeenCalled();
		});
	});
});
