import { Directive, forwardRef, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatDate } from '@angular/common';
import { AbstractTableCell } from './abstract-table-cell';

const TE_DATE_CELL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateCellControlValueAccessor),
	multi: true
};

/**
 * The ControlValueAccessor that is instantiated for the following usage, with `type='date'`
 * ```html
<tr teRow *ngFor=let row in rows>
	....
	<td teCell type=text ([ngModel])=row.someDateObject>
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
	selector: 'td[type=date][teCell][ngModel],td[type=date][teCell][formControl],td[type=date][teCell][formControlName]',
	providers: [TE_DATE_CELL_ACCESSOR]
})
export class DateCellControlValueAccessor extends AbstractTableCell implements OnInit {
	/** Set a desired date string representation using the Angular [formatDate]{@link https://angular.io/api/common/formatDate} method. The default settings are `'yyyy-MM-dd'` with locale: `'en-US'`.*/
	@Input('date-format')
	public dateFormat: string;

	/** @internal for documentation see {@link AbstractTableCell} */
	public writeValue(modelVal: Date): void {
		super.setCellValue(modelVal);
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public registerOnChange(fn: any): void {}
	/** @internal for documentation see {@link AbstractTableCell} */
	public registerOnTouched(fn: any): void {}
	/** @internal for documentation see {@link AbstractTableCell} */
	public parser(value: any) {
		return new Date(value);
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public cellValueFormatter(value: any) {
		value = value === null ? '' : formatDate(value, this.dateFormat || 'dd-MM-yyyy', 'en-US');
		return value;
	}
	/** @internal for documentation see {@link AbstractTableCell} */
	public inputValueFormatter(value: any) {
		return formatDate(value, 'yyyy-MM-dd', 'en-US');
	}
}
