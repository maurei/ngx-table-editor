import { Component } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private state: StateService) {}

  isActive(name: string): boolean {
    return this.state.$current.name === name;
  }
}
