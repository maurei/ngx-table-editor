import { Component, OnInit } from '@angular/core';
import { ExampleBase } from '../../shared/example-base';
import { data } from '../../shared/data';

@Component({
  selector: 'app-basic-form-control',
  templateUrl: './basic-form-control.component.html',
  styleUrls: ['./basic-form-control.component.css']
})
export class BasicFormControlComponent extends ExampleBase implements OnInit {
  public htmlNote: string = htmlNote;

  ngOnInit() {
    const rows = data.map(row => {
      return this.fb.group(row);
    });
    this.rows = rows;
    this.viewHtml = viewHtml;
    this.viewTs = viewTs;
    this.viewCss = viewCss;
  }
}

const viewHtml = `<table tableEditor>
    <thead>
      <tr>
        <th>Name</th>
        <th>Family</th>
        <th>Age</th>
        <th>Company</th>
        <th>Birthday</th>
      </tr>
    </thead>
    <tbody>
      <tr teRow *ngFor='let row of rows' [formGroup]="row">
        <td teCell formControlName=givenName>
          <ng-container teAnchor></ng-container>
        </td>
        <td teCell formControlName=familyName>
          <ng-container teAnchor></ng-container>
        </td>
        <td teCell formControlName=age>
          <ng-container teAnchor></ng-container>
        </td>
        <td teCell formControlName=company>
          <ng-container teAnchor></ng-container>
        </td>
        <td teCell formControlName=birthday>
          <ng-container teAnchor></ng-container>
        </td>
      </tr>
    </tbody>
  </table>
`;

const viewTs = `@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent  {
  public rows: FormGroup[];
  constructor(service: DataService, config: TableEditorConfig, fb: FormBuilder) {
    /* Configuring the table editor to put 'form-control' classes on the input fields.*/
    config.classes.push('form-control');
    /* exposing rows to the view.*/
    this.rows = service.data.map(row => {
      return fb.group(row);
    });
  }
}
`;
const viewCss = `/* form-control class is defined in bootstrap */
input {
	position: absolute;
}
table {
	position: relative;
}`;
const htmlNote = `<td .... >
  <ng-container teAnchor></ng-container>
</td>`;
