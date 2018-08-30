import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TypeaheadContainerComponent } from './typeahead-dependencies/typeahead-container.component';
import { TypeaheadCellControlValueAccessor } from './typeahead.directive';
import { ComponentLoaderFactory } from './typeahead-dependencies/component-loader/component-loader.factory';
import { PositioningService } from './typeahead-dependencies/positioning/positioning.service';

/** This module is part of `ngx-table-editor/extras`. To use it, run
 *
 * ```console
  	npm install --save ngx-table-editor/extras
```
 * and import the desired module. You can also import `TableEditorExtrasModule` to import everything.
*/
@NgModule({
	imports: [CommonModule],
	declarations: [TypeaheadContainerComponent, TypeaheadCellControlValueAccessor],
	exports: [TypeaheadContainerComponent, TypeaheadCellControlValueAccessor],
	entryComponents: [TypeaheadContainerComponent]
})
export class TypeaheadModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: TypeaheadModule,
			providers: [ComponentLoaderFactory, PositioningService]
		};
	}
}
