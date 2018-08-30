import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { TableEditorModule } from '@ngx-table-editor/core';
import { TableEditorExtrasModule } from '@ngx-table-editor/extras';
import { MarkdownModule } from 'ngx-markdown';
import { SupportedFieldsComponent } from './supported-fields.component';
import { SUPPORTED_FIELD_STATES } from './supported-fields.states';
import { SupportedFieldsCoreComponent } from './supported-fields-core/supported-fields-core.component';
import { SupportedFieldsExtrasComponent } from './supported-fields-extras/supported-fields-extras.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableEditorModule,
    TableEditorExtrasModule,
    MarkdownModule.forChild(),
    UIRouterModule.forChild({
      states: SUPPORTED_FIELD_STATES
    })
  ],
  declarations: [SupportedFieldsComponent, SupportedFieldsCoreComponent, SupportedFieldsExtrasComponent]
})
export class SupportedFieldsModule {}
