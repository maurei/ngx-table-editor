import { TypeaheadModule } from './typeahead/typeahead.module';
import { NgModule } from '@angular/core';

/** @ignore */
@NgModule({
	imports: [TypeaheadModule.forRoot()],
	exports: [TypeaheadModule]
})
class TableEditorExtrasModule {}

export { TableEditorExtrasModule, TypeaheadModule };
