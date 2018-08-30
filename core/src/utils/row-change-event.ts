import { TableEditorRowDirective } from '../table/row.directive';
import { NavigationAction } from '../navigators/navigator';

/** This event is emitted by {@link TableEditorRowDirective} when a row transition occurs.
 * @param T ContextType The type of the context field.
 */
export class RowChangeEvent<T = any> {
	/** A {@link RowChangeContext} of the row that is being transitioned from. */
	public previous: RowChangeContext<T> = { row: null, context: null };
	/** A {@link RowChangeContext} of the row that is being transitioned from. */
	public next: RowChangeContext<T> = { row: null, context: null };
	/** The [navigation action]{@link NavigationAction} associated that caused the `RowChangeEvent` */
	public action: NavigationAction | null;
	/** @internal  */
	constructor(prevRow: TableEditorRowDirective | null = null, nextRow: TableEditorRowDirective | null = null, action: NavigationAction | null = null) {
		if (prevRow != null) {
			this.previous.row = prevRow;
			this.previous.context = prevRow.context;
		}
		if (nextRow != null) {
			this.next.row = nextRow;
			this.next.context = nextRow.context;
		}
		this.action = action;
	}
}

export interface RowChangeContext<T = any> {
	row: TableEditorRowDirective | null;
	context: T | null;
}
