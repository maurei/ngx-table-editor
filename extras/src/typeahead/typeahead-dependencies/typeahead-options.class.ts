import { TypeaheadCellControlValueAccessor } from '../typeahead.directive';

/** @ignore */
export class TypeaheadOptions {
	placement: string;
	animation: boolean;
	typeaheadRef: TypeaheadCellControlValueAccessor;

	constructor(options: TypeaheadOptions) {
		Object.assign(this, options);
	}
}
