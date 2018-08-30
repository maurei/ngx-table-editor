### Guide: implementing `AbstractTableCell`
In guide will give you a few pointers on how to implement a custom `ControlValueAccessor` that works with `TableEditorDirective`. As an example the implementation of `DateCellControlValueAccessor` will be explained.

#### The full implementation

As a start, consider the full implementation given below. We will break it down step by step afterwards.
```js
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractTableCell } from 'ngx-table-editor/core';

const TE_DATE_CELL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateCellControlValueAccessor),
	multi: true
};

@Directive({
	selector: 'td[type=date][teCell][ngModel],td[type=date][teCell][formControl],td[type=date][teCell][formControlName]',
	providers: [TE_DATE_CELL_ACCESSOR]
})
export class DateCellControlValueAccessor extends AbstractTableCell {
	@Input('date-format') public dateFormat: string;

	public writeValue(modelVal: Date): void {
		super.setCellValue(modelVal);
	}
	public registerOnChange(fn: any): void {}
	public registerOnTouched(fn: any): void {}
	public parser(value: any) {
		return new Date(value);
	}
	public cellValueFormatter(value: any) {
		value = value === null ? '' : formatDate(value, this.dateFormat || 'dd-MM-yyyy', 'en-US');
		return value;
	}
	public inputValueFormatter(value: any) {
		return formatDate(value, this.dateFormat || 'yyyy-MM-dd', 'en-US');
	}
}
```

#### Breaking it down

First, ceate a new directive that extends `AbstractTableCell`. In the `providers` field, extend the built in `NG_VALUE_ACCESSOR` multiprovider. Don't forget to use `forwardRef` or it will complain about references being undefined.
```js
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractTableCell } from 'ngx-table-editor/core';
const TE_DATE_CELL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateCellControlValueAccessor),
	multi: true
};
@Directive({
	selector: 'td[type=date][teCell][ngModel],td[type=date][teCell][formControl],td[type=date][teCell][formControlName]',
	providers: [TE_DATE_CELL_ACCESSOR]
})
export class DateCellControlValueAccessor extends AbstractTableCell {
	...
}
```
Naturally, you will also need to add it to the `declare` statement in your module.

Next, in order to implement Angulars `ControlValueAccessor` interface, we need to implement the following methods:

```js
	public writeValue(modelVal: Date): void {
		super.setCellValue(modelVal);
	}
	public registerOnChange(fn: any): void {}
	public registerOnTouched(fn: any): void {}
	}
```
We will ignore `registerOnChange` and `registerOnTouched`, as the directive can wor while leaving these blank. See the angular docs for their usage. The most important one is `writeValue`: the method will be called internally by Angular when the model changes (model -> view). It is then up to the developer to implement the method so that the view will be updated. In the case of a table editor cell, there are actually two views that need to be taken into acocunt: the "cell view" and the "input view.

**Cell view**. Firstly, when a cell is in its default and initial `Cellified` state, the inner text of the `<td>` element needs to be set. For this we can use the `setCellValue` method which is inherited from `AbstractTableCell`. At this point, you might wonder why we're not calling `modelVal.toString()`, as the string representation of a `Date` object is `[object Object]`. This is because under the hood, `AbstractTableCell` calls `cellValueFormatter` on `modelVal`. We will discuss this momentarily.


**Input view**. Secondly, there is the input view for when the cellstate is `Inputified`. Most of the time, we do not need to worry about it: when the cell transforms to `Inputified`, the logic in `AbstractTableCell` takes care of this. We can influence this proces, however, by telling it how to format the `modelVal` to the input field. This is done by implementing `inputValueFormatter`.

```js
	@Input('date-format') public dateFormat: string;
	public cellValueFormatter(value: any) {
		value = value === null ? '' : formatDate(value, this.dateFormat || 'dd-MM-yyyy', 'en-US');
		return value;
	}
	public inputValueFormatter(value: any) {
		return formatDate(value, 'yyyy-MM-dd', 'en-US');
	}
```
As we can see in the `cellValueFormatter`, the `@Input() dateFormat` attribute is used to dictate the string representation to be displayed in the cellView. in `setCellValue` this method is called before inserting text to the DOM.

The other formatter, `inputValueFormatter`, is called internally when setting the value attribute of `HTMLInputElement`. Unlike with the cell view, this formatter always returns a `'yyyy-MM-dd'` representation of the Date object. This is because HTML5 input fields require this format to parse a date string. The format of the contents of the date input field is then set by the browsers language settings.

For a more advanced way of implementing `AbstractTableCell`, check out the source code of `TypeaheadCellControlValueAccessor` which is defined in `ngx-table-editor/extras`

