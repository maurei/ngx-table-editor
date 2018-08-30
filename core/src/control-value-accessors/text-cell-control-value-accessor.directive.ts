import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractTableCell } from './abstract-table-cell';

const TE_TEXT_CELL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TextCellControlValueAccessor),
	multi: true
};

/**
 * The ControlValueAccessor that is instantiated for the following usage, with `type='text'` or omitting the `type`:

 * ```html
<tr teRow *ngFor=let row in rows>
	....
	<td teCell type=text ([ngModel])=row.someText>
		<ng-container teAnchor></ng-container>
	</td>
	<td teCell ([ngModel])=row.someOtherText>
		<ng-container teAnchor></ng-container>
	</td>
	....
</tr>
```
 * Do not forget to put `<ng-container teAnchor></ng-container>` inside the table elements. This is required because at this moment, it is not possible for the Angular renderer to **insert** elements into another element, only append as a sibling. It is thus not possible to insert into the `nativeElement` associated with and injected into the `teCell` directive.
 * For this reason, we need to create a `ViewContainer` inside the `HTMLTableCellElement` and get a reference to it, which is done by `NgContainer` and `teAnchor` respecively. [See this issue for a lengthy discussion]{@link https://github.com/angular/angular/issues/9035}.
 *
 */
@Directive({
	selector:
		'td[type=text][teCell][ngModel],td:not([type])[teCell][ngModel],td[type=text][teCell][formControl],td:not([type])[teCell][formControl],td[type=text][teCell][formControlName],td:not([type])[teCell][formControlName]',
	providers: [TE_TEXT_CELL_ACCESSOR],
	host: {
		'(input)': '$any(this).onChange($event.target.value)'
	}
})
export class TextCellControlValueAccessor extends AbstractTableCell {
	/** @internal for documentation see {@link AbstractTableCell} */
	public onChange: (_: any) => void;

	/** @internal for documentation see {@link AbstractTableCell} */
	public writeValue(modelVal: any): void {
		super.setCellValue(modelVal);
	}

	/** @internal for documentation see {@link AbstractTableCell} */
	public registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public registerOnTouched(fn: () => void): void {
		// this.onTouched = fn;
	}

	/** @internal for documentation see {@link AbstractTableCell} */
	public parser(value: any) {
		return value;
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public cellValueFormatter(value: any) {
		return (value = value === null ? '' : value);
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public inputValueFormatter(value: any) {
		return value;
	}
}
