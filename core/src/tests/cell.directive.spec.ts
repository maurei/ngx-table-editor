/* tslint:disable:directive-selector max-line-length no-debugger indent */

import { TestBed, ComponentFixture, tick, fakeAsync, flush } from '@angular/core/testing';
import { Component, TemplateRef, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableEditorModule } from '../table-editor.module';
import { TextCellControlValueAccessor } from '../control-value-accessors/text-cell-control-value-accessor.directive';

import { By } from '@angular/platform-browser';
import { CellDisabledState, CellState } from '../control-value-accessors/abstract-table-cell';

@Component({
	template: `
	<table>
		<tr>
			<td teCell [teDisabled]=disabled type='text' [(ngModel)]="row.stuff">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
  `
})
class DummyComponent {
	public row = { stuff: 'contains info 1' };
	public disabled = false;
}

describe('AbstractTableCell Directive', () => {
	let component: DummyComponent;
	let fixture: ComponentFixture<DummyComponent>;
	let tableCell: HTMLTableCellElement;
	let directive: TextCellControlValueAccessor;
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
			directive = debugElement.query(By.directive(TextCellControlValueAccessor)).injector.get(TextCellControlValueAccessor);
			tableCell = <HTMLTableCellElement>debugElement.query(By.css('td[teCell]')).nativeElement;
			fixture.detectChanges();
			tick();
		}));
		it('loads the cell directive', () => {
			expect(directive).not.toBe(null);
		});
		it('has resolved the input template', () => {
			expect(directive['inputTemplateRef']).toBeDefined();
		});
	});
	describe('inputifying flow and back', () => {
		let innerInput: HTMLInputElement;
		beforeEach(fakeAsync(async () => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TextCellControlValueAccessor)).injector.get(TextCellControlValueAccessor);
			directive.inputify();
			fixture.detectChanges();
			tick();
			tableCell = <HTMLTableCellElement>debugElement.query(By.css('td[teCell]')).nativeElement;
			innerInput = <HTMLInputElement>tableCell.children[0];
		}));

		it('empties the cell and inserts an input field', () => {
			expect(tableCell.innerText.toString()).toEqual('');
			expect(innerInput.nodeName.toLowerCase()).toEqual('input');
		});
		it('marks a cell as focused', async () => {
			await directive.focus();
			expect(document.activeElement).toEqual(innerInput);
		});
		// to do: write tests for changing values for the different control value accessors.
		// these test fail because of an issue with angular, see https://github.com/angular/angular/issues/25463
		it('binds ngModel to the nested inputfield', () => {
			expect(innerInput.value).toEqual('contains info 1');
		});
		it('cellifies the cell back to previous state', fakeAsync(() => {
			directive.cellify();
			flush();
			expect(tableCell.innerText.toString()).toEqual('contains info 1');
			expect(tableCell.children.length).toBe(0);
		}));
	});
	describe('disabled cells', () => {
		let innerInput: HTMLInputElement;
		beforeEach(fakeAsync(() => {
			fixture.detectChanges();
			tick();
			directive = debugElement.query(By.directive(TextCellControlValueAccessor)).injector.get(TextCellControlValueAccessor);
			flush();
			fixture.detectChanges();
			tick();
			tableCell = <HTMLTableCellElement>debugElement.query(By.css('td[teCell]')).nativeElement;
			innerInput = <HTMLInputElement>tableCell.children[0];
		}));

		it('toggles the disabled state', () => {
			component.disabled = false;
			fixture.detectChanges();
			expect(directive.disabled).toEqual(CellDisabledState.Enabled);
			component.disabled = true;
			fixture.detectChanges();
			expect(directive.disabled).toEqual(CellDisabledState.Disabled);
		});
		it('does not inputify when disabled', fakeAsync(() => {
			component.disabled = true;
			fixture.detectChanges();
			directive.inputify();
			flush();
			expect(directive['state']).toEqual(CellState.Cellified);
		}));
		it('will inputify when toggled twice', fakeAsync(() => {
			component.disabled = true;
			fixture.detectChanges();
			expect(directive.disabled).toEqual(CellDisabledState.Disabled);
			component.disabled = false;
			fixture.detectChanges();
			expect(directive.disabled).toEqual(CellDisabledState.Enabled);
			flush();
			directive.inputify();
			expect(directive['state']).toEqual(CellState.Inputified);
		}));
	});
});
