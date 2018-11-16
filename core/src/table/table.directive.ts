/* tslint:disable:no-eval */

import {
	Directive,
	ContentChildren,
	QueryList,
	AfterContentInit,
	IterableDiffer,
	IterableDiffers,
	ElementRef,
	Output,
	EventEmitter,
	OnInit,
	Renderer2,
	OnDestroy,
	ViewContainerRef,
	Inject,
	Type,
	IterableChangeRecord
} from '@angular/core';
import { TableEditorRowDirective } from './row.directive';
import { AbstractTableCell, CellDisabledState } from '../control-value-accessors/abstract-table-cell';
import { AbstractNavigator, NavigationAction, TE_NAVIGATORS } from '../navigators/navigator';
import { Subscription } from 'rxjs';
import { RowChangeEvent } from '../utils/row-change-event';

/**
 * An interface implemented by an instruction set to trigger a movement in a {@link TableEditorDirective}. Both `row` and `cell` are optional. If both are left blank, the instruction set is interpreted as an exit command. If `cell` is left blank, the first enabled cell in the row will be selected. Only leaving `row` blank will throw an error.
 */
export interface TeExecutor {
	row: TableEditorRowDirective | null;
	cell: AbstractTableCell | null;
}

/**
 * Place this directive on the top-level `table` element:
 * ```html
<table tableEditor  (rowChange)='listener()'>
			....
</table>
```
 * This directive only works in combination with `[teCell]` directives placed on `HTMLTableCellElement`s and `[teRow]` directives placed on `HTMLTableRowElement`s. See the [examples]{@link ../../demo/#/examples/basic}.
 */
@Directive({
	selector: 'table[tableEditor]'
})
export class TableEditorDirective implements AfterContentInit, OnInit, OnDestroy {
	/** Bind to the `rowChange` attribrute to listen to `RowChangeEvent`s, see [the details]{@link RowChangeEvent}. */
	@Output('rowChange')
	public rowChange = new EventEmitter<RowChangeEvent<any>>();
	/** @internal  */
	private navigators: Array<AbstractNavigator>;
	/** @internal  */
	private currentRow: TableEditorRowDirective | null = null;
	/** @internal  */
	private currentCell: AbstractTableCell | null = null;
	/** @internal  */
	private differ: IterableDiffer<TableEditorRowDirective>;
	/** @internal  */
	private subscriptions: Array<Subscription> = [];
	/** @internal  */
	private unlistenNavigators: Array<() => void> = [];
	/** @internal  */
	private _blockNavigation = false;
	/** @internal  */
	private get blockNavigation() {
		const rv = this._blockNavigation;
		this._blockNavigation = false;
		return rv;
	}
	/** @internal  */
	private set blockNavigation(value: boolean) {
		this._blockNavigation = value;
	}
	/** @internal  */
	@ContentChildren(TableEditorRowDirective)
	private rows: QueryList<TableEditorRowDirective>;
	/** @internal  */
	constructor(
		private element: ElementRef<HTMLTableElement>,
		private renderer: Renderer2,
		private differs: IterableDiffers,
		private vc: ViewContainerRef,
		@Inject(TE_NAVIGATORS) navigators: Array<Type<AbstractNavigator>>
	) {
		this.navigators = navigators.map(ctor => new ctor(renderer, element, this.actionParser.bind(this)));
	}
	/**
	 * Use this method to programatically control the movements in the table. See the guide in the README for an example.
	 * @param  TeExecutor target An instruction set that implements the [TeExecutor interface]{@link TeExecutor}.
	 */
	public trigger(target: TeExecutor) {
		if (target.row != null && !target.cell) {
			if (target.row!.cells.length) {
				target.cell = target.row.cells[0];
			}
		}
		this.executeFor(target);
	}
	/**
	 * @internal @ignore
	 * A method used internally to cellify and inputify specific rows based on an [instruction set]{@link TeExecutor}.
	 * @param  TeExecutor target
	 * @param  NavigationAction action
	 */
	private executeFor(target: TeExecutor, action: NavigationAction | null = null) {
		if (target.row) {
			let currentRow: TableEditorRowDirective | null = null;
			if (target.row !== this.currentRow) {
				if (this.currentRow) {
					currentRow = this.currentRow;
					this.currentRow.cellify();
				}
				target.row.inputify();
				this.rowChange.emit(new RowChangeEvent(currentRow, target.row, action));
				this.currentRow = target.row;
			}
		} else {
			this.currentRow!.cellify();
			this.rowChange.emit(new RowChangeEvent(this.currentRow, null, action));
			this.currentRow = null;
		}
		if (target.cell && target.cell !== this.currentCell) {
			target.cell.focus();
			this.currentCell = target.cell;
		}
	}

	/**
	 * @internal @ignore
	 * A method used internally to convert a {@link NavigationAction} into an [instruction set]{@link TeExecutor}
	 * @param  NavigationAction action
	 * @returns void
	 */
	private actionParser(action: NavigationAction | undefined): void {
		const _action = action;
		if (this.blockNavigation || (this.currentRow === null && action === NavigationAction.Exit)) return;
		const executor: TeExecutor = { row: null, cell: null };

		const currentRow = this.currentRow!;
		const currentCells = currentRow.cells.filter(c => c.disabled === CellDisabledState.Enabled);
		const cellIdx = currentCells.indexOf(this.currentCell!);
		let absoluteIdx = currentRow.cells.indexOf(this.currentCell!);
		const currentRows = this.rows.toArray();
		const rowIdx = currentRows.indexOf(currentRow);
		let nextCellIdx, nextCell, nextRowIdx, nextRow;
		if (action === NavigationAction.Right || action === NavigationAction.Left) {
			const indexOperator = action === NavigationAction.Left ? '--' : '++';
			nextCellIdx = cellIdx;
			eval('nextCellIdx' + indexOperator);
			nextCell = currentCells[nextCellIdx];
			if (nextCell) {
				executor.cell = nextCell;
				executor.row = this.currentRow;
				return this.executeFor(executor, _action);
			} else {
				action = action === NavigationAction.Left ? NavigationAction.Up : NavigationAction.Down;
				cellIdx > 0 ? (absoluteIdx = 0) : (absoluteIdx = currentRow.cells.length - 1);
			}
		}
		if (action === NavigationAction.Up || action === NavigationAction.Down) {
			const indexOperator = action === NavigationAction.Up ? '--' : '++';
			nextRowIdx = rowIdx;
			while (nextCell === undefined) {
				/* assures that it will jump over a disabled row */
				eval('nextRowIdx' + indexOperator);
				nextRow = currentRows[nextRowIdx];
				if (nextRow) {
					const nextRowAllCells = nextRow.cells;
					// if there is a teRow with no te cells at all, move to the next row
					if (!nextRowAllCells.length) {
						continue;
					}
					const nextRowEnabledCells = nextRowAllCells.filter(c => c.disabled === CellDisabledState.Enabled);
					executor.row = nextRow;

					nextCell = nextRowAllCells[absoluteIdx];
					if (nextCell.disabled === CellDisabledState.Disabled) {
						if (absoluteIdx > nextRowEnabledCells.length - 1) {
							nextCell = nextRowEnabledCells[nextRowEnabledCells.length - 1];
						} else {
							nextCell = nextRowEnabledCells[absoluteIdx];
						}
					}
					executor.cell = nextCell;
				} else {
					executor.row = null;
					executor.cell = null;
					break;
				}
			}
		}
		return this.executeFor(executor, _action);
	}

	/** @internal  */
	ngOnDestroy() {
		if (this.currentRow) {
			this.currentRow.cellify();
		}
		this.subscriptions.forEach(s => s.unsubscribe());
		this.unlistenNavigators.forEach(un => un());
		this.vc.clear();
	}
	/** @internal  Instantiates the navigators. */
	ngOnInit() {
		this.navigators.forEach(nav => this.unlistenNavigators.push(nav.listener()));
	}
	/** @internal  Subcribing to the rows and managing rows that are added dynamically. */
	ngAfterContentInit() {
		const rows = this.rows.toArray();
		rows.forEach(row => this.subscribeToRow(row));
		this.differ = this.differs.find(rows).create();
		this.differ.diff(rows);
		const changesSubscription = this.rows.changes.subscribe((changes: QueryList<TableEditorRowDirective>) => {
			const newRows = this.rows.toArray();
			const diff = this.differ.diff(newRows)!;
			diff.forEachAddedItem((row: IterableChangeRecord<TableEditorRowDirective>) => this.subscribeToRow(row.item));
		});
		// keeping the subsriptions in once place to make it easier to unregister everything upon destroy
		this.subscriptions.push(changesSubscription);
	}

	private subscribeToRow(target: TableEditorRowDirective) {
		this.subscriptions.push(target.teCellClick.subscribe((executor: TeExecutor) => this.executeFor(executor)));
		this.subscriptions.push(
			target.teBlockNavigationEventEmitter.subscribe(() => {
				this.blockNavigation = true;
			})
		);
	}
}
