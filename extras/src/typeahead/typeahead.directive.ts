/* tslint:disable:max-file-line-count */

import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	TemplateRef,
	ViewContainerRef,
	forwardRef,
	Injector
} from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { from, Observable, Subscription } from 'rxjs';
import { ComponentLoader } from './typeahead-dependencies/component-loader/component-loader.class';
import { ComponentLoaderFactory } from './typeahead-dependencies/component-loader/component-loader.factory';
import { TypeaheadContainerComponent } from './typeahead-dependencies/typeahead-container.component';
import { TypeaheadMatch } from './typeahead-dependencies/typeahead-match.class';
import { getValueFromObject, latinize, tokenize } from './typeahead-dependencies/typeahead-utils';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { AbstractTableCell, TableEditorConfig, TemplateService } from '@ngx-table-editor/core';
// import { AbstractTableCell, TableEditorConfig, TemplateService } from '../../../core/src/table-editor.module';

/**
 * This is a fork of [ngx-bootstrap typeahead]{@link https://valor-software.com/ngx-bootstrap/#/typeahead}. It has been adjusted to also accept in the `NgModel` binding references to objects instead of plain values, and typeaheadEditable is set to false ([see this issue]{@link https://github.com/valor-software/ngx-bootstrap/issues/1894}). Other than that, check out the ngx-bootstrap documentation for usage details, or check out [the examples]{@link ../../demo/#/examples/supported-fields} on how to use it.
 */
@Directive({
	selector: 'td[type=typeahead][ngModel]',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TypeaheadCellControlValueAccessor),
			multi: true
		}
	],
	exportAs: 'bs-typeahead',
	host: {
		'(input)': '$any(this)._handleInput($event.target.value)',
		'(blur)': 'onTouched()',
		'(compositionstart)': '$any(this)._compositionStart()',
		'(compositionend)': '$any(this)._compositionEnd($event.target.value)'
	}
})
export class TypeaheadCellControlValueAccessor extends AbstractTableCell implements OnInit, OnDestroy {
	/** @ignore */
	@Input()
	typeahead: any;
	/** @ignore */
	@Input()
	typeaheadMinLength: number = void 0;
	/** @ignore */
	@Input()
	typeaheadWaitMs: number;
	/** @ignore */
	@Input()
	typeaheadOptionsLimit: number;
	/** @ignore */
	@Input()
	typeaheadOptionField: string;
	/** @ignore */
	@Input()
	typeaheadGroupField: string;
	/** @ignore */
	@Input()
	typeaheadAsync: boolean = void 0;
	/** @ignore */
	@Input()
	typeaheadLatinize = true;

	/** @ignore */
	@Input()
	typeaheadSingleWords = true;
	/** @ignore */
	@Input()
	typeaheadWordDelimiters = ' ';
	/** @ignore */
	@Input()
	typeaheadPhraseDelimiters = '\'"';
	/** @ignore */
	@Input()
	typeaheadItemTemplate: TemplateRef<any>;
	/** @ignore */
	@Input()
	optionsListTemplate: TemplateRef<any>;
	/** @ignore */
	@Input()
	typeaheadScrollable = false;
	/** @ignore */
	@Input()
	typeaheadOptionsInScrollableView = 5;
	/** @ignore */
	@Output()
	typeaheadLoading = new EventEmitter<boolean>();
	/** @ignore */
	@Output()
	typeaheadNoResults = new EventEmitter<boolean>();
	/** @ignore */
	@Output()
	typeaheadOnSelect = new EventEmitter<TypeaheadMatch>();
	/** @ignore */
	@Output()
	typeaheadOnBlur = new EventEmitter<any>();
	/** @ignore */
	@Input()
	container: string;
	/** @ignore */
	@Input()
	dropup = false;

	/** @ignore */
	_container: TypeaheadContainerComponent;
	/** @ignore */
	isTypeaheadOptionsListActive = false;

	/** @ignore */
	protected keyUpEventEmitter: EventEmitter<any> = new EventEmitter();
	/** @ignore */
	protected _matches: TypeaheadMatch[];
	/** @ignore */
	protected placement = 'bottom-left';
	// protected popup:ComponentRef<TypeaheadContainerComponent>;
	/** @ignore */
	private _typeahead: ComponentLoader<TypeaheadContainerComponent>;
	/** @ignore */
	private _subscriptions: Subscription[] = [];
	/** @ignore */
	private _outsideClickListener: Function;
	/** @ignore */
	constructor(
		templateBridge: TemplateService,
		config: TableEditorConfig,
		private element: ElementRef<HTMLTableCellElement>,
		renderer: Renderer2,
		viewContainerRef: ViewContainerRef,
		injector: Injector,
		private cis: ComponentLoaderFactory,
		private changeDetection: ChangeDetectorRef
	) {
		super(templateBridge, config, element, renderer, viewContainerRef, injector);
	}
	/** @ignore */
	ngOnInit(): void {
		super.ngOnInit();
		this.ngControl = <NgControl>this.injector.get(NgControl);
		this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
		this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
		this.typeaheadWaitMs = this.typeaheadWaitMs || 0;

		// async should be false in case of array
		if (this.typeaheadAsync === undefined && !(this.typeahead instanceof Observable)) {
			this.typeaheadAsync = false;
		}

		if (this.typeahead instanceof Observable) {
			this.typeaheadAsync = true;
		}

		if (this.typeaheadAsync) {
			this.asyncActions();
		} else {
			this.syncActions();
		}
		this.onBlurEventEmitter.subscribe((e: FocusEvent) => {
			const value = this.inputValueFormatter(this.ngControl.control.value);

			this.setInputValue(value);
			if (this._container && !this._container.isFocused) {
				this.typeaheadOnBlur.emit(this._container.active);
			}
		});

		// this.onKeyUpEventEmitter.subscribe( (e) => {
		// 	this._onChange(e);
		// });
	}

	/** @ignore */
	@HostListener('input', ['$event'])
	onInput(e: any): void {
		// For `<input>`s, use the `value` property. For others that don't have a
		// `value` (such as `<span contenteditable="true">`), use either
		// `textContent` or `innerText` (depending on which one is supported, i.e.
		// Firefox or IE).;
		// if (this.hasMatches()) {
		if (!this.typeaheadGroupField) {
			// super.onChange(e.target.value);
		}
		const value =
			e.target.value !== undefined ? e.target.value : e.target.textContent !== undefined ? e.target.textContent : e.target.innerText;
		if (value != null && value.trim().length >= this.typeaheadMinLength) {
			this.typeaheadLoading.emit(true);
			this.keyUpEventEmitter.emit(e.target.value);
		} else {
			this.typeaheadLoading.emit(false);
			this.typeaheadNoResults.emit(false);
			this.hide();
		}
	}
	/** @ignore */
	@HostListener('keyup', ['$event'])
	_onChange(e: any): void {
		if (this._container) {
			if (e.keyCode === 27) {
				this.teBlockNavigationEventEmitter.emit();
				const value = this.inputValueFormatter(this.ngControl.control.value);
				this.setInputValue(value);
				this.hide();
				return;
			}

			// up
			if (e.keyCode === 38) {
				this.teBlockNavigationEventEmitter.emit();
				this._container.prevActiveMatch();

				return;
			}

			// down
			if (e.keyCode === 40) {
				this.teBlockNavigationEventEmitter.emit();
				this._container.nextActiveMatch();

				return;
			}

			// enter, tab
			if (e.keyCode === 13) {
				this.teBlockNavigationEventEmitter.emit();
				const active = this._container.active;
				this.changeModel(active);
				// this._container.selectMatch(active);

				return;
			}
		}
	}

	// @HostListener('click')
	// @HostListener('focus')
	// onFocus(): void {
	// 	if (this.typeaheadMinLength === 0) {
	// 		this.typeaheadLoading.emit(true);
	// 		// NEED TO FIX
	// 		// this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
	// 	}
	// }

	// @HostListener('blur')
	// onBlur(): void {
	// 	this.writeValue(this.ngControl.control.value);
	// 	if (this._container && !this._container.isFocused) {
	// 		this.typeaheadOnBlur.emit(this._container.active);
	// 	}
	// }
	/** @ignore */
	@HostListener('keydown', ['$event'])
	onKeydown(e: any): void {
		// no container - no problems
		if (!this._container) {
			return;
		}

		// if an item is visible - prevent form submission (enter)
		if (e.keyCode === 13) {
			e.preventDefault();
			return;
		}
		// if an item is visible - don't change focus (tab)
		if (e.keyCode === 9) {
			this.teBlockNavigationEventEmitter.emit();
			e.preventDefault();
			const active = this._container.active;
			this.changeModel(active);
			return;
		}
	}
	/** @ignore */
	changeModel(match: TypeaheadMatch): void {
		// const valueStr: string = match.value;
		// this.renderer.setProperty(this['inputElement'].nativeElement, 'value', match.value);
		this.setInputValue(match.value);
		this.ngControl.viewToModelUpdate(match.item);
		this.ngControl.control.setValue(match.item);
		this.changeDetection.markForCheck();
		this.onChange(match.item);
		this.hide();
	}
	/** @ignore */
	get matches(): any[] {
		return this._matches;
	}
	/** @ignore */
	@HostListener('click', ['$event'])
	onClick(event: MouseEvent) {
		super.onClick(event);
	}
	/** @ignore */
	public writeValue(modelVal: Date): void {
		super.setCellValue(modelVal);
	}
	/** @ignore */
	public onChange = (_: any) => {
		/* HOW THE F does this work under the hood??? */
	}
	public registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}
	/** @ignore */
	public registerOnTouched(fn: any): void {}
	/** @ignore */
	public parser(value: any) {
		return this.ngControl.control.value;
		// return new Date(value);
	}
	/** @ignore */
	teAfterInputify() {
		this._typeahead = this.cis.createLoader<TypeaheadContainerComponent>(this.element, this['innerViewContainer'], this.renderer);
	}
	/** @ignore */
	public cellValueFormatter(value: any) {
		value = value === null ? '' : this.getOptionFromObject(value);
		return value;
	}
	/** @ignore */
	public inputValueFormatter(value: any) {
		value = value === null ? '' : this.getOptionFromObject(value);
		return value;
	}
	/** @ignore */
	show(): void {
		this._typeahead
			.attach(TypeaheadContainerComponent)
			// todo: add append to body, after updating positioning service
			.to(this.element)
			.position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
			.show({
				typeaheadRef: this,
				placement: this.placement,
				animation: false,
				dropup: this.dropup
			});

		this._outsideClickListener = this.renderer.listen('document', 'click', (e: MouseEvent) => {
			if (this.typeaheadMinLength === 0 && (this.element.nativeElement as any).contains(e.target)) {
				return;
			}
			this.onOutsideClick();
		});

		this._container = this._typeahead.instance;
		this._container.parent = this;
		// This improves the speed as it won't have to be done for each list item
		const normalizedValue = this.getOptionFromObject(this.ngControl.control.value);
		const normalizedQuery = (this.typeaheadLatinize ? latinize(normalizedValue) : normalizedValue).toString().toLowerCase();
		this._container.query = this.typeaheadSingleWords
			? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
			: normalizedQuery;
		this._container.matches = this._matches;
		this.element.nativeElement.focus();
	}
	/** @ignore */
	hide(): void {
		if (this._typeahead.isShown) {
			this._typeahead.hide();
			this._outsideClickListener();
			this._container = null;
		}
	}
	/** @ignore */
	onOutsideClick(): void {
		if (this._container && !this._container.isFocused) {
			this.hide();
		}
	}
	/** @ignore */
	ngOnDestroy(): any {
		for (const sub of this._subscriptions) {
			sub.unsubscribe();
		}
		if (this._typeahead) this._typeahead.dispose();
	}
	/** @ignore */
	protected asyncActions(): void {
		this._subscriptions.push(
			this.keyUpEventEmitter
				.pipe(
					debounceTime(this.typeaheadWaitMs),
					switchMap(() => this.typeahead)
				)
				.subscribe((matches: any) => {
					this.finalizeAsyncCall(matches);
				})
		);
	}
	/** @ignore */
	protected syncActions(): void {
		this._subscriptions.push(
			this.keyUpEventEmitter
				.pipe(
					debounceTime(this.typeaheadWaitMs),
					mergeMap((value: string) => {
						const normalizedQuery = this.normalizeQuery(value);
						return from(this.typeahead).pipe(
							filter((option: any) => {
								return option && this.testMatch(this.normalizeOption(option), normalizedQuery);
							}),
							toArray()
						);
					})
				)
				.subscribe((matches: any[]) => {
					this.finalizeAsyncCall(matches);
				})
		);
	}
	/** @ignore */
	protected normalizeOption(option: any): any {
		const optionValue: string = getValueFromObject(option, this.typeaheadOptionField);
		const normalizedOption = this.typeaheadLatinize ? latinize(optionValue) : optionValue;

		return normalizedOption.toLowerCase();
	}
	/** @ignore */
	protected normalizeQuery(value: string): any {
		// If singleWords, break model here to not be doing extra work on each
		// iteration
		let normalizedQuery: any = (this.typeaheadLatinize ? latinize(value) : value).toString().toLowerCase();
		normalizedQuery = this.typeaheadSingleWords
			? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
			: normalizedQuery;

		return normalizedQuery;
	}
	/** @ignore */
	protected testMatch(match: string, test: any): boolean {
		let spaceLength: number;

		if (typeof test === 'object') {
			spaceLength = test.length;
			for (let i = 0; i < spaceLength; i += 1) {
				if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
					return false;
				}
			}

			return true;
		}

		return match.indexOf(test) >= 0;
	}
	/** @ignore */
	protected finalizeAsyncCall(matches: any[]): void {
		this.prepareMatches(matches);
		this.typeaheadLoading.emit(false);
		this.typeaheadNoResults.emit(!this.hasMatches());

		if (!this.hasMatches()) {
			this.hide();

			return;
		}

		if (this._container) {
			// fix: remove usage of ngControl internals
			const normalizedValue = this.getOptionFromObject(this.ngControl.control.value);
			const _controlValue = (this.typeaheadLatinize ? latinize(normalizedValue) : normalizedValue) || '';
			// This improves the speed as it won't have to be done for each list item
			const normalizedQuery = _controlValue.toString().toLowerCase();
			this._container.query = this.typeaheadSingleWords
				? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
				: normalizedQuery;
			this._container.matches = this._matches;
		} else {
			this.show();
		}
	}
	/** @ignore */
	protected prepareMatches(options: any[]): void {
		const limited: any[] = options.slice(0, this.typeaheadOptionsLimit);

		if (this.typeaheadGroupField) {
			let matches: TypeaheadMatch[] = [];

			// extract all group names
			const groups = limited
				.map((option: any) => getValueFromObject(option, this.typeaheadGroupField))
				.filter((v: string, i: number, a: any[]) => a.indexOf(v) === i);

			groups.forEach((group: string) => {
				// add group header to array of matches
				matches.push(new TypeaheadMatch(group, group, true));

				// add each item of group to array of matches
				matches = matches.concat(
					limited
						.filter((option: any) => getValueFromObject(option, this.typeaheadGroupField) === group)
						.map((option: any) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)))
				);
			});

			this._matches = matches;
		} else {
			this._matches = limited.map((option: any) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
		}
	}
	/** @ignore */
	protected hasMatches(): boolean {
		return this._matches.length > 0;
	}
	/** @ignore */
	private getOptionFromObject(ngControlValue: any) {
		if (!!ngControlValue && typeof ngControlValue === 'object') {
			return ngControlValue[this.typeaheadOptionField];
		}
		return ngControlValue;
	}
}
