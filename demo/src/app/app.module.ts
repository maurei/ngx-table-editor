import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableEditorModule } from '@ngx-table-editor/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEditorConfig } from '@ngx-table-editor/core';
import { MarkdownModule } from 'ngx-markdown';
import { UIRouterModule } from '@uirouter/angular';
import { NavbarModule } from './navbar/navbar.module';
import { BasicModule } from './basic/basic.module';

import { GettingStartedModule } from './getting-started/getting-started.module';
import { AdvancedModule } from './advanced/advanced.module';
import { SupportedFieldsModule } from './supported-fields/supported-fields.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TableEditorModule,
    MarkdownModule.forRoot(),
    UIRouterModule.forRoot({
      otherwise: { state: 'demo' },
      useHash: true
    }),
    NavbarModule,
    BasicModule,
    GettingStartedModule,
    AdvancedModule,
    SupportedFieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: TableEditorConfig) {
    config.classes.push('form-control');

  }
}
