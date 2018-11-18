import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractTableCell } from './control-value-accessors/abstract-table-cell';
import { TextCellControlValueAccessor } from './control-value-accessors/text-cell-control-value-accessor.directive';
import { NumberCellControlValueAccessor } from './control-value-accessors/number-cell-control-value-accessor.directive';
import { DateCellControlValueAccessor } from './control-value-accessors/date-cell-control-value-accessor.directive';
import { TableEditorDirective } from './table/table.directive';
import { TableEditorRowDirective } from './table/row.directive';
import { InputTemplateComponent } from './utils/input.component';
import { AnchorDirective } from './utils/anchor.directive';
import { OnInitDirective } from './utils/on-init.directive';
import { CommonModule } from '@angular/common';
import { TE_NAVIGATORS, AbstractNavigator, NavigationAction } from './navigators/navigator';
import { KeyboardNavigator } from './navigators/keyboard-navigator';
import { TemplateService } from './utils/template.service';
import { TableEditorConfig, HTMLInputElementStyle } from './utils/config.service';
import { RowChangeEvent } from './utils/row-change-event';

const TABLE_EDITOR_DIRECTIVE_DECLARATIONS = [
	TableEditorDirective,
	TextCellControlValueAccessor,
	DateCellControlValueAccessor,
	NumberCellControlValueAccessor,
	TableEditorRowDirective,
	InputTemplateComponent,
	OnInitDirective,
	AnchorDirective
];
const TABLE_EDITOR_DIRECTIVE_EXPORTS = [
	TableEditorDirective,
	TextCellControlValueAccessor,
	DateCellControlValueAccessor,
	NumberCellControlValueAccessor,
	TableEditorRowDirective,
	InputTemplateComponent,
	OnInitDirective,
	AnchorDirective
];
@NgModule({
	imports: [FormsModule, ReactiveFormsModule, CommonModule],
	declarations: TABLE_EDITOR_DIRECTIVE_DECLARATIONS,
	exports: TABLE_EDITOR_DIRECTIVE_EXPORTS,
	entryComponents: [InputTemplateComponent],
	providers: [{ provide: TE_NAVIGATORS, useValue: KeyboardNavigator, multi: true }, TemplateService, TableEditorConfig]
})
class TableEditorModule {
	constructor() {}
}

export {
	TableEditorModule,
	TableEditorRowDirective,
	TableEditorDirective,
	TextCellControlValueAccessor,
	DateCellControlValueAccessor,
	NumberCellControlValueAccessor,
	AbstractTableCell,
	RowChangeEvent,
	TableEditorConfig,
	NavigationAction,
	AbstractNavigator,
	KeyboardNavigator,
	TE_NAVIGATORS,
	TemplateService,
	HTMLInputElementStyle
};
