import { Directive, ContentChildren, QueryList, AfterContentInit, EventEmitter, Input, ViewContainerRef, OnDestroy } from '@angular/core';
import { AbstractTableCell } from '../control-value-accessors/abstract-table-cell';
import { TeExecutor } from './table.directive';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * Place this directive on the 'tr' elements in a table that has a `tableEditor` directive:
* ```html
....
<tbody>
	<tr *ngFor='let row in rows' teRow [teContext]='row.someContextVariable'>
			....
	</tr>
</tbody>
....
```
 * This directive only works in combination with `[teCell]` directives placed on `HTMLTableCellElement`s and `[tableEditor]` directive placed on `HTMLTablelement`s. See the [examples]{@link ../../demo/#/examples/basic} for a guide how to use it.
 */
@Directive({
	selector: 'tr[teRow]'
})
export class TableEditorRowDirective implements AfterContentInit, OnDestroy {
	/** Use this input attribute to pass along any context variable in a {@link RowChangeEvent} */
	@Input('teContext')
	public context: any;
	/** @internal An `EventEmitter` used internally to progagate a `TeCellClick` event to {@link TableEditorDirective} */
	public teCellClick: EventEmitter<TeExecutor> = new EventEmitter();
	/** All CellControlValueAccessors within a row. */
	public cells: AbstractTableCell[];
	/** @internal An `EventEmitter` used internally to progagate a TeBlockNavigation event to {@link TableEditorDirective} */
	public teBlockNavigationEventEmitter: EventEmitter<any> = new EventEmitter();
	/** @internal */
	@ContentChildren(NgControl)
	private _cells: QueryList<NgControl>;
	/** @internal */
	private subscriptions: Array<Subscription> = [];
	/** @internal */
	constructor(private vc: ViewContainerRef) {}
	/** @internal */
	public ngAfterContentInit(): void {
		this.cells = this._cells.toArray().map((c: NgControl) => c.valueAccessor as AbstractTableCell);
		this.cells.forEach(cell => {
			const clickSubscriber = cell.teCellClick.subscribe((triggeredCell: AbstractTableCell) => {
				const executor: TeExecutor = {row: null, cell: null};
				executor.row = this;
				executor.cell = triggeredCell;
				this.teCellClick.emit(executor);
			});
			const blockSubscriber = cell.teBlockNavigationEventEmitter.subscribe(() => {
				this.teBlockNavigationEventEmitter.emit();
			});
			this.subscriptions.push(clickSubscriber);
			this.subscriptions.push(blockSubscriber);
		});
	}

	/** @internal */
	public ngOnDestroy() {
		if (this.subscriptions) this.subscriptions.forEach(s => s.unsubscribe());
		this.teCellClick.complete();
		this.vc.clear();
	}
	/** @internal This method is exposed publically because it is used by {@link TableEditorDirective}. Do not call it manually. */
	public inputify() {
		this.cells.forEach(c => {
			c.inputify();
		});
	}
	/** @internal This method is exposed publically because it is used by {@link TableEditorDirective}. Do not call it manually. */
	public cellify() {
		this.cells.forEach(c => {
			c.cellify();
		});
	}
}
