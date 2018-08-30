import { Directive, ViewContainerRef, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { InputTemplateComponent } from './input.component';
import { TemplateService } from './template.service';

/**
 * This directive is used internally for two purposes. Firstly, to allow for communication between an instance of [AbstractTableCell]{@link AbstractTableCell} and the `ViewContainer` of the inner `NgContainer` element. Secondly, to dynamically create a `TemplateRef<HTMLInputElement>` that is required by the [AbstractTableCell]{@link AbstractTableCell} instance to [inputify]{@link documentation/injectables/AbstractTableCell.html#source} a table cell
 *
 *  Should only be used in a `<ng-container teAnchor></ng-container>` element, within a `HTMLTableElement`, see [the examples]{@link /demo/#/examples/basic} for for more detail.
 *
 */
// @dynamic
@Directive({
	selector: '[teAnchor]'
})
export class AnchorDirective {
	/**
	 * A promise that is inspected by all instancs of `AnchorDirective` to make sure `InputComponent` is only resolved once [see the constructor ]{@link AnchorDirective#constructor}.
	 */
	private static InputTemplateComponentTemplatePromise: Promise<TemplateRef<HTMLInputElement>>;
	public vc: ViewContainerRef;
	/**
	 * A reference to the angular template of `HTMLInputElement`. It becomes available only after `InputTemplateComponentTemplatePromise` has been resolved, which happens when [resolveTemplate]{@link AnchorDirective#resolveTemplate} has been called.
	 */
	public InputTemplateComponentTemplateRef: TemplateRef<HTMLInputElement>;
	/**
	 * A callback function set by instances of [AbstractTableCell directive]{@link AbstractTableCell#constructor} to expose the input element `TemplateRef`.
	 * @param  TemplateRef<HTMLInputElement> tpl The `TemplateRef` as extracted from the InputComponent, [see the constructor]{@link AnchorDirective#constructor}.
	 */
	private templateSetter: (tpl: TemplateRef<HTMLInputElement>) => void;
	constructor(private cfr: ComponentFactoryResolver, vc: ViewContainerRef, ts: TemplateService) {
		this.vc = vc;
		this.templateSetter = ts.setter;
		delete ts.setter;
		if (!AnchorDirective.InputTemplateComponentTemplatePromise) {
			const InputTemplateComponentRef = this.vc.createComponent(this.cfr.resolveComponentFactory(InputTemplateComponent));
			AnchorDirective.InputTemplateComponentTemplatePromise = InputTemplateComponentRef.instance.getTemplateRef().toPromise();
			AnchorDirective.InputTemplateComponentTemplatePromise.then(() => InputTemplateComponentRef.destroy());
		}
		this.resolveTemplate();
	}
	/**
	 * Called by instances of [AbstractTableCell directive]{@link AbstractTableCell} to retrieve the `TemplateRef` of the input element.
	 */
	public async resolveTemplate(): Promise<void> {
		this.InputTemplateComponentTemplateRef = await AnchorDirective.InputTemplateComponentTemplatePromise;
		this.templateSetter(this.InputTemplateComponentTemplateRef);
	}
}
