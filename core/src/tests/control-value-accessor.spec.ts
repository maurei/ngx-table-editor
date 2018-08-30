

import { Component, Type } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, } from '@angular/core/testing';
import {
	FormControl,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
import { By, ɵgetDOM as getDOM } from '@angular/platform-browser';
import { TableEditorModule } from '../table-editor.module';

function dispatchEvent(element: any, eventType: any): void {
	getDOM().dispatchEvent(element, getDOM().createEvent(eventType));
}

{
	describe('value accessors', () => {
		function initTest<T>(component: Type<T>, ...directives: Type<any>[]): ComponentFixture<T> {
			TestBed.configureTestingModule({
				declarations: [component, ...directives],
				imports: [FormsModule, ReactiveFormsModule, TableEditorModule]
			}).compileComponents();
			return TestBed.createComponent(component);
		}
		describe('should support <td teCell> without a type, for', () => {
			// the following can currently not be tested, see https://github.com/angular/angular/issues/25463
			// model -> inputView
			// inputView -> model
			// inputView -> cellView
			it('basic usage, using NgModel', fakeAsync(() => {
				const model = { value: 'string value' };
				const fixture = initTest(NoTypeNgModelComp);
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual(model.value);
			}));
			it('basic usage, using formControl', () => {
				const value = 'string value';
				const fixture = initTest(NoTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();

				// model -> cellView
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual(value);
			});

			it('clearing a value programmatically, using ngModel', fakeAsync(() => {
				const model = { value: 'string value' };
				const fixture = initTest(NoTypeNgModelComp);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				model.value = null;
				fixture.detectChanges();
				tick();
				expect(cell.innerText).toEqual('');
			}));
			it('clearing a value programmatically, using fromControl', () => {
				const value = 'string value';
				const fixture = initTest(NoTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();
				control.setValue(null);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('');
			});
		});
		describe('should support <td teCell> with type=text, for', () => {
			// the following can currently not be tested, see https://github.com/angular/angular/issues/25463
			// model -> inputView
			// inputView -> model
			// inputView -> cellView
			it('basic usage, using NgModel', fakeAsync(() => {
				const model = { value: 'string value' };
				const fixture = initTest(TextTypeNgModelComp);
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual(model.value);
			}));
			it('basic usage, using formControl', () => {
				const value = 'string value';
				const fixture = initTest(TextTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();

				// model -> cellView
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual(value);
			});

			it('clearing a value programmatically, using ngModel', fakeAsync(() => {
				const model = { value: 'string value' };
				const fixture = initTest(TextTypeNgModelComp);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				model.value = null;
				fixture.detectChanges();
				tick();
				expect(cell.innerText).toEqual('');
			}));
			it('clearing a value programmatically, using fromControl', () => {
				const value = 'string value';
				const fixture = initTest(TextTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();
				control.setValue(null);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('');
			});
		});
		describe('should support <td teCell> with type=number, for', () => {
			// the following can currently not be tested, see https://github.com/angular/angular/issues/25463
			// model -> inputView
			// inputView -> model
			// inputView -> cellView
			it('basic usage, using NgModel', fakeAsync(() => {
				const model = { value: 1337 };
				const fixture = initTest(NumberTypeNgModelComp);
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('1337');
			}));
			it('basic usage, using formControl', () => {
				const value = 1337;
				const fixture = initTest(NumberTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();

				// model -> cellView
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('1337');
			});

			it('clearing a value programmatically, using ngModel', fakeAsync(() => {
				const model = { value: 1337 };
				const fixture = initTest(NumberTypeNgModelComp);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				model.value = null;
				fixture.detectChanges();
				tick();
				expect(cell.innerText).toEqual('');
			}));
			it('clearing a value programmatically, using fromControl', () => {
				const value = 1337;
				const fixture = initTest(NumberTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();
				control.setValue(null);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('');
			});
		});
		describe('should support <td teCell> with type=date, for', () => {
			// the following can currently not be tested, see https://github.com/angular/angular/issues/25463
			// model -> inputView
			// inputView -> model
			// inputView -> cellView
			it('basic usage, using NgModel', fakeAsync(() => {
				const model = { value: new Date('1992-12-11') };
				const fixture = initTest(DateTypeNgModelComp);
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('11-12-1992');
			}));
			it('basic usage, using formControl', () => {
				const value = new Date('1992-12-11');
				const fixture = initTest(DateTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();

				// model -> cellView
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('11-12-1992');
			});

			it('clearing a value programmatically, using ngModel', fakeAsync(() => {
				const model = { value: new Date('1992-12-11') };
				const fixture = initTest(DateTypeNgModelComp);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				fixture.componentInstance.model = model;
				fixture.detectChanges();
				tick();
				model.value = null;
				fixture.detectChanges();
				tick();
				expect(cell.innerText).toEqual('');
			}));
			it('clearing a value programmatically, using fromControl', () => {
				const value = new Date('1992-12-11');
				const fixture = initTest(DateTypeFormControlComp);
				const control = new FormControl(value);
				fixture.componentInstance.control = control;
				fixture.detectChanges();
				control.setValue(null);
				const cell = <HTMLTableCellElement>fixture.debugElement.query(By.css('td[teCell]')).nativeElement;
				expect(cell.innerText).toEqual('');
			});
		});
	});
}

@Component({
	selector: 'no-type-ngmodel-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell [ngModel]="model.value">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class NoTypeNgModelComp {
	model!: any;
}

@Component({
	selector: 'no-type-form-control-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell [formControl]="control">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class NoTypeFormControlComp {
	control!: FormControl;
}

@Component({
	selector: 'text-type-ngmodel-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=text [ngModel]="model.value">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class TextTypeNgModelComp {
	model!: any;
}

@Component({
	selector: 'text-type-form-control-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=text [formControl]="control">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class TextTypeFormControlComp {
	control!: FormControl;
}

@Component({
	selector: 'form-control-ngmodel-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type="text" [ngModel]="model.value">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
@Component({
	selector: 'number-type-ngmodel-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=number [ngModel]="model.value">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class NumberTypeNgModelComp {
	model!: any;
}

@Component({
	selector: 'number-type-form-control-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=number [formControl]="control">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class NumberTypeFormControlComp {
	control!: FormControl;
}
@Component({
	selector: 'date-type-ngmodel-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=date date-format='dd-MM-yyyy' [ngModel]="model.value">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class DateTypeNgModelComp {
	model!: any;
}

@Component({
	selector: 'date-type-form-control-comp',
	template: `
	<table tableEditor>
		<tr teRow>
			<td teCell type=date date-format='dd-MM-yyyy' [formControl]="control">
				<ng-container teAnchor></ng-container>
			</td>
		</tr>
	</table>
	`
})
export class DateTypeFormControlComp {
	control!: FormControl;
}
