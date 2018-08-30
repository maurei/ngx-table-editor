import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEditorModule } from '@ngx-table-editor/core';
import { MarkdownModule } from 'ngx-markdown';
import { BasicFormControlComponent } from './basic-form-control/basic-form-control.component';
import { BASIC_STATES } from './basic.states';
import { BasicNgModelComponent } from './basic-ng-model/basic-ng-model.component';
import { BasicComponent } from './basic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableEditorModule,
    MarkdownModule.forChild(),
    UIRouterModule.forChild({
      states: BASIC_STATES
    })
  ],
  providers: [JsonPipe],
  declarations: [BasicNgModelComponent, BasicFormControlComponent, BasicComponent]
})
export class BasicModule {}
