import { Component, OnInit } from '@angular/core';
import { ExampleBase } from '../../shared/example-base';
import { data } from '../../shared/data';

@Component({
  selector: 'app-supported-fields-core',
  templateUrl: './supported-fields-core.component.html',
  styleUrls: ['./supported-fields-core.component.css']
})
export class SupportedFieldsCoreComponent extends ExampleBase implements OnInit {
  public htmlNote: string = htmlNote;
  ngOnInit() {
    const rows = [];
    data.forEach(row => rows.push(Object.assign({}, row)));
    rows.map(row => (row.birthday = new Date(row.birthday)));
    this.rows = rows;
    this.viewHtml = viewHtml;
    this.viewTs = viewTs;
    this.viewCss = viewCss;
  }
}

const viewHtml =
`<table tableEditor>
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
    <tr teRow *ngFor='let row of rows;'>
      <td teCell [(ngModel)]=row.givenName>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.familyName>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell type='number' [(ngModel)]=row.age>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [(ngModel)]=row.company>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell type='date' date-format="fullDate" [(ngModel)]=row.birthday>
        <ng-container teAnchor></ng-container>
      </td>
    </tr>
  </tbody>
</table>
`;

const viewTs =
`@Component({
  selector: 'app-supported-fields-core',
  templateUrl: './app-supported-fields-core.component.html',
})
export class BasicComponent  {
  public rows: FormGroup[];
  constructor(service: DataService, config: TableEditorConfig, fb: FormBuilder) {
    /* Configuring the table editor to put 'form-control' classes on the input fields.*/
    config.classes.push('form-control');
    /* exposing rows to the view.*/
    this.rows = []
    service.data.forEach(row => this.rows.push(row));
    this.rows.map(row => (row.birthday = new Date(row.birthday)));
  }
}
`;

const viewCss =
`/* form-control class is defined in bootstrap */
input {
	position: absolute;
}
table {
	position: relative;
}`;

const htmlNote =
`<td .... >
  <ng-container teAnchor></ng-container>
</td>`;
