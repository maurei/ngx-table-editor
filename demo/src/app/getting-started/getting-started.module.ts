import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { GETTING_STARTED_STATES } from './getting-started.states';
import { GettingStartedComponent } from './getting-started.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    UIRouterModule.forChild({ states: GETTING_STARTED_STATES })
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule { }
