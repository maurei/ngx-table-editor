import {
	ElementRef,
	Renderer2,
	HostListener,
	EventEmitter,
	ComponentFactory,
	ViewContainerRef,
	OnInit,
	TemplateRef,
	Input,
	Injector,
	Directive,
	ContentChild,
	AfterContentInit,
	OnDestroy,
	Injectable
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AnchorDirective } from '../utils/anchor.directive';
import { TemplateService } from '../utils/template.service';
import { TableEditorConfig, HTMLInputElementStyle } from '../utils/config.service';

export enum CellState {
	Inputified,
	Cellified
}

export enum CellDisabledState {
	Disabled,
	Enabled
}

/** @internal */
export enum InputPromiseState {
	Pending,
	Resolved,
	Canceled
}

/**
 * This is the abstract ControlValueAccessor class which is implemented by the [DateCell]{@link DateCellContolValueAccessor}, [TextCell]{@link TextCellContolValueAccessor} and [NumberCell]{@link NumberCellControlValueAccessor} directives. Do not inject this class anywhere.
 * You should either use one of the implementing classes mentioned above, or implement your own `CellControlValueAccessor` class as described [in the README of this page]{@link /documentation/injectables/AbstractTableCell.html#readme}.
 *
 * For usage see [the examples]{@link demo/#/examples/basic}.
 *
 */
@Injectable()
export abstract class AbstractTableCell implements OnInit, ControlValueAccessor, AfterContentInit, OnDestroy {
	/**
	 * Use this `Input` attribute to select choose a `ControlValueAccessor`.
	 * @param  boolean value The supported types are `date`, `text`, `number`. For additional types, install `ngx-table-editor/extra`. It contains support for `typeahead`.
	 */
	@Input('type')
	public type = 'text';
	/**
	 * Use this `Input` attribute to enable or disable a table cell in a declarative way at the level of the template.
	 * For example:  `<td teCell [teDisabled]=='isOdd($index)'> .... </td>`.
	 * @param  boolean value A variable to disable or enable editor mode for this cell.
	 */
	@Input('teDisabled')
	public set teDisabled(value: boolean) {
		this.disabled = value ? CellDisabledState.Disabled : CellDisabledState.Enabled;
	}

	public disabled = CellDisabledState.Enabled;
	public teCellClick: EventEmitter<AbstractTableCell> = new EventEmitter();
	public teBlockNavigationEventEmitter: EventEmitter<any> = new EventEmitter();
	protected onBlurEventEmitter: EventEmitter<FocusEvent> = new EventEmitter();
	protected onKeyUpEventEmitter: EventEmitter<KeyboardEvent> = new EventEmitter();
	protected ngControl: NgControl;

	/** @internal */
	private inputTemplateRef: TemplateRef<HTMLInputElement>;
	/** @internal */
	private innerViewContainer: ViewContainerRef;
	/** @internal */
	private resolveElementFn: (value?: ElementRef<HTMLInputElement> | PromiseLike<ElementRef<HTMLInputElement>>) => void;
	/** @internal */
	private inputPromise = this.inputPromiseFactory();
	/** @internal */
	private inputPromiseState: InputPromiseState;
	/** @internal */
	private inputElement: ElementRef<HTMLInputElement>;
	/** @internal */
	private unlistenFnCollection: Array<() => void> = [];
	/** @internal */
	private state: CellState = CellState.Cellified;
	/** @internal */
	@ContentChild(AnchorDirective)
	private cellAnchor: AnchorDirective;
	/** @internal */
	private class: string;
	constructor(
		ts: TemplateService,
		private config: TableEditorConfig,
		protected el: ElementRef<HTMLTableCellElement>,
		protected renderer: Renderer2,
		protected viewContainer: ViewContainerRef,
		protected injector: Injector
	) {
		ts.setter = (tpl: TemplateRef<HTMLInputElement>) => {
			this.inputTemplateRef = tpl;
		};
	}

	@HostListener('click', ['$event'])
	protected onClick(event: MouseEvent) {
		if (this.disabled === CellDisabledState.Disabled) return;
		this.teCellClick.emit(this);
	}

	/** This method needs to be implemented for Angulars built-in [ControlValueAccessor interface]{@link https://angular.io/api/forms/ControlValueAccessor}. See the docs on how to implement one. */
	abstract writeValue(modelValue: any): void;
	/** This method needs to be implemented for Angulars built-in [ControlValueAccessor interface]{@link https://angular.io/api/forms/ControlValueAccessor}. See the docs on how to implement one.*/
	abstract registerOnChange(fn: any): void;
	/** This method needs to be implemented for Angulars built-in [ControlValueAccessor interface]{@link https://angular.io/api/forms/ControlValueAccessor}. See the docs on how to implement one.*/
	abstract registerOnTouched(fn: any): void;

	/**
	 * This method needs to be implemented to tell the ControlValueAccessor how to parse the string value from an inputfield to the model (input -> model). This is useful for example in the implementation of [DateCell]{@link DateCellContolValueAccessor}, where the `inputValue` will be a string representation of the Date, whereas we want to store native `Date` objects in the model.
	 * @param  string inputValue The `value` attribute of the native `HTMLInputElement`.
	 * @returns any
	 */
	abstract parser(inputValue: string): any;
	/**
	 * This method needs to be implemented to tell the ControlValueAccessor how to format a the value in a table cell with state `Cellified`
	 * (model -> cellView).
	 * @param  any modelValue The value as in `NgControl`.
	 * @returns string
	 */
	abstract cellValueFormatter(modelValue: any): string;
	/**
	 * This method needs to be implemented to tell the ControlValueAccessor how to format the value in a input field within a table cell with state `Inputified` (model -> inputView).
	 * @param  any modelValue The value as in `NgControl`.
	 * @returns string
	 */
	abstract inputValueFormatter(modelValue: any): string;

	/**
	 * Programmatically set the inner text of a tableCell. Only works when the [cell state is cellified]{@link AbstractTableCell#state}. This method is used internally to set the initial inner text table cell when cellified. The method can be used to override the inner text of the table cell.
	 * @param  string value? When no value is given as an argument, the most recent value of `ngControl` is converted using the [cellValueFormatter]{@link cellValueFormatter}.
	 * @returns void
	 */
	protected setCellValue(value: any): void {
		if (this.state === CellState.Cellified) {
			const cellValueFormatter = this.config.cellValueFormatter || this.cellValueFormatter;
			const cellValue = cellValueFormatter.call(this, value);
			this.clearText();
			const text = this.renderer.createText(cellValue);
			this.renderer.appendChild(this.el.nativeElement, text);
		}
	}
	/**
	 * Programmatically set the value of the inputfield within a tableCell. Only works when the [cell state is inputified]{@link AbstractTableCell#state}. This method is used internally to set the initial value of the input field when inputified. The method can be used to override the value of the input field in other moments of the lifecycle.
	 * @param  string value? When no value is given as an argument, the most recent value of `ngControl` is converted using the [inputValueFormatter]{@link inputValueFormatter}. Calling this method directly thus makes it possible to render to the input field avoiding the inputValueFormatter.
	 * @returns void
	 */
	protected setInputValue(value?: string): void {
		if (this.state === CellState.Cellified) return;
		const val = this.inputValueFormatter(value || this.ngControl.value);
		this.renderer.setProperty(this.inputElement.nativeElement, 'value', val);
	}
	/**
	 * Override this method to execute some code right after a cell is inputified. This can be used for example to override the initial value of the input field, using {@link AbstractTableCell#setInputValue}.
	 * @returns void
	 */
	protected teAfterInputify(): void {}

	/** @internal This method is exposed publically because it is used internally by `TableEditorRowDirective` to inputify a cell. It should not be called manually. It is asynchronous because exposing the native `HTMLInputElement` is done using an `Observable`.*/
	public async inputify(): Promise<void> {
		const inputStyle = this.config.inputElementFormatter(this.el.nativeElement);
		if (this.disabled === CellDisabledState.Disabled) return;
		this.state = CellState.Inputified;
		this.clearText();
		this.class = this.config.classes.length ? this.config.classes.join(' ') : '';
		this.innerViewContainer.createEmbeddedView(this.inputTemplateRef, { $implicit: this } as any); // file bug report: why does type C of context variable have to be the same as TemplateRef<C> ?
		this.inputElement = await this.inputPromise;
		this.formatCell(inputStyle);
		if (this.inputPromiseState === InputPromiseState.Canceled) return;
		this.inputPromiseState = InputPromiseState.Resolved;
		this.setInputValue();
		this.unlistenFnCollection.push(
			this.renderer.listen(this.inputElement.nativeElement, 'input', event => {
				this.ngControl.control!.patchValue(this.parser(event.target.value));
			})
		);
		this.unlistenFnCollection.push(
			this.renderer.listen(this.inputElement.nativeElement, 'blur', (event: FocusEvent) => {
				this.onBlurEventEmitter.emit(event);
			})
		);
		this.teAfterInputify();
	}
	/** @internal This method is exposed publically because it is used internally by `TableEditorRowDirective` to cellify a cell. It should not be called manually.  */
	public cellify(): void {
		if (this.disabled === CellDisabledState.Disabled) return;
		this.innerViewContainer.clear();
		this.state = CellState.Cellified;
		this.writeValue(this.ngControl.value);
		let canceled = false;
		if (this.inputPromiseState === InputPromiseState.Pending) {
			canceled = true;
		} else {
			this.unlistenFnCollection.forEach(fn => fn());
		}
		this.inputPromise = this.inputPromiseFactory(canceled);
	}
	/** @internal This method is exposed publically because it is used internally by `TableEditorDirective` to set focus on a cell. It should not be called manually.  */
	public async focus() {
		await this.inputPromise;
		this.inputElement.nativeElement.focus();
	}
	/** @internal */
	private formatCell(options: HTMLInputElementStyle): void {
		this.renderer.setStyle(this.el.nativeElement, 'height', options.height.toString() + 'px');
		this.renderer.setStyle(this.el.nativeElement, 'width', options.width.toString() + 'px');
		this.renderer.setStyle(this.inputElement.nativeElement, 'height', options.height.toString() + 'px');
		this.renderer.setStyle(this.inputElement.nativeElement, 'width', options.width.toString() + 'px');
		this.renderer.setStyle(this.inputElement.nativeElement, 'top', options.top.toString() + 'px');
		this.renderer.setStyle(this.inputElement.nativeElement, 'left', options.left.toString() + 'px');
	}
	/** @internal */
	private clearText() {
		const childNodes = Array.prototype.slice.call(this.el.nativeElement.childNodes);
		childNodes.filter( (n: Node) => n.nodeName === '#text').forEach( (child: ChildNode) => this.renderer.removeChild(this.el.nativeElement, child));
	}

	/** @internal */
	private inputPromiseFactory(canceled?: boolean): Promise<ElementRef<HTMLInputElement>> {
		this.inputPromiseState = canceled ? InputPromiseState.Canceled : InputPromiseState.Pending;
		return new Promise(resolve => (this.resolveElementFn = resolve));
	}

	/** @internal */
	public ngOnDestroy() {
		this.unlistenFnCollection.forEach(fn => fn());
		this.innerViewContainer.clear();
		this.viewContainer.clear();
		this.teCellClick.complete();
	}
	/** @internal */
	public ngAfterContentInit() {
		this.innerViewContainer = this.cellAnchor.vc;
	}
	/** @internal */
	public ngOnInit() {
		this.ngControl = <NgControl>this.injector.get(NgControl);
	}


}
