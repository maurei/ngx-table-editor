/*tslint:disable radix*/
import { Injectable } from '@angular/core';

export interface HTMLInputElementStyle {
	height: number;
	width: number;
	top: number;
	left: number;
}

/**
 * Global configuration service for the Table Editor directive.
 * You can inject this service, typically in your root component, and customize the values of its
 * properties in order to provide default values for all the table editors used in the application.
 */
@Injectable()
export class TableEditorConfig {
	/**
	 * An array of class names that will be added to the class attribute on the `HTMLInputElement`, when a table cell is [inputitifed]{@link documentation/injectables/AbstractTableCell.html#source}. Note that it is an array, so do not assign a string to it.
	 */
	public classes: Array<string> = [];
	/**
	 * A function that overrides the default method of the used control value accessor to display the model in the table cell. If the function relies on `this`, be aware that only using a normal function declaration, i.e. no arrow function, will set the `this` context to the control value accessor instance.
	 *  For instance in `config.cellValueFormatter = () => {}` this will refer to the instance of TableEditorConfig.
	 * @param  any value The value as stored in NgModel.
	 * @returns string The desired output, to be displayed in the `td` element.
	 */
	public cellValueFormatter: (value: any) => string;

	/**
	 * @param  HTMLTableCellElement cellElement The live element which is about to be inputified
	 * @returns HTMLInputElementStyle An object that implements [HTMLInputElementStyle interface]{@link HTMLInputElementStyle} that contains height, width, top and left attributes, which will be used to programatically set the offset and dimensions of the input element and table cell. For more information see `AbstractTableCell#formatCell`.
	 */
	public inputElementFormatter(cellElement: HTMLTableCellElement): HTMLInputElementStyle {
		return {
			height: cellElement.offsetHeight,
			width: cellElement.offsetWidth,
			top: cellElement.offsetTop,
			left: cellElement.offsetLeft - 1
		};
	}
}
