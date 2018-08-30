import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponent } from './advanced.component';
import { UIRouterModule } from '@uirouter/angular';
import { MarkdownModule } from 'ngx-markdown';
import { ADVANCED_STATES } from './advanced.states';
import { RowChangeComponent } from './row-change/row-change.component';
import { TableEditorModule } from '@ngx-table-editor/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [TableEditorModule, FormsModule, UIRouterModule.forChild({ states: ADVANCED_STATES }), MarkdownModule.forChild(), CommonModule],
  declarations: [AdvancedComponent, RowChangeComponent]
})
export class AdvancedModule {}
