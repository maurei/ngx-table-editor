import { TypeaheadModule } from './typeahead/typeahead.module';
import { NgModule } from '@angular/core';

/** @ignore */
@NgModule({
	imports: [TypeaheadModule.forRoot()],
	exports: [TypeaheadModule]
})
class TableEditorExtrasModule {}

export { TableEditorExtrasModule, TypeaheadModule };

/**
 * It seems that this.typeahead is being shared across multiple instances of directive, but only for the same "name" (?)
 * clients / filedirs
 * row 1: options = null / options = [xyz]
 * row 2: options = [uvw] / options = [xyz]
 *  when row 2 is instantiated, it complains with ExpressionChangedAfterItHasBeenCheckedError. But it should be empty.
 *
 *
 */
