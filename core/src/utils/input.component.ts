import { Component } from '@angular/core';
import { TemplateRef, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * A utility class used internally as a base class for an input component, allowing to publically expose the
 * a `TemplateRef` and programmatically extract it from the inheriting component.
 */
export class TemplateExtractor implements AfterViewInit {
	@ViewChild(TemplateRef)
	private innerTemplate: TemplateRef<any>;
	private template: Subject<TemplateRef<any>> = new Subject();
	public getTemplateRef(): Observable<TemplateRef<any>> {
		return this.template.asObservable();
	}
	ngAfterViewInit(): void {
		if (this.innerTemplate) {
			this.template.next(this.innerTemplate);
			this.template.complete();
		}
	}
}

/**
 * A component used internally to acquire a reference to a `TemplateRef<HTMLInputElement>`, which is used to [inputify]{@link documentation/injectables/AbstractTableCell.html#source} a table cell.
 */
@Component({
	selector: `te-input-template`,
	template: `
	<ng-template let-context>
	<input [teOnInit]=context.resolveElementFn [type]=context.type [class]=context.class>
	</ng-template>
	`
})
export class InputTemplateComponent extends TemplateExtractor {}
