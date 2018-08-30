import { TemplateRef, ViewContainerRef } from '@angular/core';

/** @ignore */
export class BsComponentRef<T> {
	templateRef: TemplateRef<T>;
	viewContainer: ViewContainerRef;
}
