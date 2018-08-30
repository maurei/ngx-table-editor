import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild()
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
