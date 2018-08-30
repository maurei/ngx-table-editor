/*tslint:disable max-line-length*/

import { Component, OnInit } from '@angular/core';
import { ExampleBase } from '../../shared/example-base';
import { data } from '../../shared/data';

const categories = ['Tech', 'Banking', 'Health'];
let i = 0;
class Company {
  static list: any[] = [];
  public id: number;
  public category: string;
  public label: string;
  constructor(id, val) {
    this.label = val;
    this.id = id + 1;
    this.category = categories[i];
    if (i === 2) {
      i = 0;
    } else {
      i++;
    }
    Company.list.push(this);
  }
}

@Component({
  selector: 'app-supported-fields-extras',
  templateUrl: './supported-fields-extras.component.html',
  styleUrls: ['./supported-fields-extras.component.css']
})
export class SupportedFieldsExtrasComponent extends ExampleBase implements OnInit {
  public htmlNote: string = htmlNote;
  public companies: Company[];
  ngOnInit() {
    const rows = [];
    data.forEach((row, idx) => {
      const _row = <any>Object.assign({}, row);
      _row.company = new Company(idx, _row.company);
      _row.birthday = new Date(row.birthday);
      rows.push(_row);
    });
    this.rows = rows;
    this.viewHtml = viewHtml;
    this.viewTs = viewTs;
    this.viewCss = viewCss;
    this.companies = Company.list;
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
        <td teCell type='typeahead' [(ngModel)]=row.company [typeahead]="companies" typeaheadOptionField="label" typeaheadGroupField="category">
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
`const categories = ['Tech', 'Banking', 'Health'];
let i = 0;
class Company {
  static list: any[] = [];
  public id: number;
  public category: string;
  public label: string;
  constructor(id, val) {
    this.label = val;
    this.id = id + 1;
    this.category = categories[i];
    if (i === 2) {
      i = 0;
    } else { i++; }
    Company.list.push(this);
  }
}

@Component({
  selector: 'app-supported-fields-extras',
  templateUrl: './app-supported-fields-extras.component.html',
})
export class BasicComponent  {
  public rows: FormGroup[];
  constructor(service: DataService, config: TableEditorConfig) {
    /* Configuring the table editor to put 'form-control' classes on the input fields.*/
    config.classes.push('form-control');
    /* exposing rows to the view.*/
    this.rows = service.data.map( (row, idx) => {
      row.company = new Company(idx, row.company);
      row.date = new Date(row.date);
      return row;
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
