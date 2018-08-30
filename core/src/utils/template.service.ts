import { Injectable, TemplateRef } from '@angular/core';

/**
 * A utility service used internally to communicate the `TemplateRef<HTMLInputElement>` from [anchor viewcontainer]{@link AnchorDirective} to the [table cell]{@link AbstractTableCell}
 */
@Injectable()
export class TemplateService {
	public setter: (tpl: TemplateRef<HTMLInputElement>) => void;
}
