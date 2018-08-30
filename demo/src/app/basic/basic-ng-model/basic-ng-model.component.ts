import { Component, OnInit } from '@angular/core';
import { ExampleBase } from '../../shared/example-base';
import { data } from '../../shared/data';

@Component({
  selector: 'app-basic-ng-model',
  templateUrl: './basic-ng-model.component.html',
  styleUrls: ['./basic-ng-model.component.css']
})
export class BasicNgModelComponent extends ExampleBase implements OnInit {
  htmlNote: string = htmlNote;

  ngOnInit(): void {
    const rows = data.map( row => Object.assign({}, row));
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
    <tr teRow *ngFor='let row of rows'>
      <td teCell [(ngModel)]=row.givenName>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.familyName>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.age>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.company>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.birthday>
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
  public rows: any[];
  constructor(service: DataService, config: TableEditorConfig) {
    /* Configuring the table editor to put 'form-control' classes on the input fields.*/
    config.classes.push('form-control');
    /* exposing rows to the view.*/
    this.rows = service.data;
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
