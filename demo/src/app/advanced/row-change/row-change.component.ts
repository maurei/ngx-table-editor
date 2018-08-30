/*tslint:disable max-line-length*/
import { Component, OnInit, DoCheck, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ExampleBase } from '../../shared/example-base';
import { data } from '../../shared/data';
import { RowChangeEvent } from '@ngx-table-editor/core';
import { NgForm } from '@angular/forms';
import { NavigationAction } from '@ngx-table-editor/core';
import { TableEditorDirective } from '@ngx-table-editor/core';
import { TableEditorRowDirective } from '@ngx-table-editor/core';

@Component({
  selector: 'app-row-change',
  templateUrl: './row-change.component.html',
  styleUrls: ['./row-change.component.scss']
})
export class RowChangeComponent extends ExampleBase implements OnInit, DoCheck {
  public htmlNote: string = htmlNote;
  @ViewChild(TableEditorDirective)
  private tableEditor: TableEditorDirective;
  @ViewChildren(TableEditorRowDirective)
  private rowInstances: QueryList<TableEditorRowDirective>;
  public disabledMode = true;
  ngOnInit() {
    const rows = data.map(r => Object.assign({}, r));
    this.rows = rows;
    this.viewHtml = viewHtml;
    this.viewTs = viewTs;
    this.viewCss = viewCss;
    this.viewJson = 'no event registered yet';
  }

  onRowChange(event: RowChangeEvent<NgForm>) {
    console.log(event);
    if (event.previous.context && event.previous.context.dirty) {
      console.log('row is dirty!');
    }
    this.onExitHook(event);
    this.viewJson = this.jsonPipe.transform(this.copyPreventCirculair(event));
  }

  public isDisabled(idx: number): boolean {
    if (!this.disabledMode) {
      return false;
    }
    return idx === 2;
  }

  private onExitHook(event: RowChangeEvent<any>) {
    if (event.next.row === null && event.action != null) {
      if (event.action === NavigationAction.Down || event.action === NavigationAction.Right) {
        this.rows.push({
          givenName: 'Foo',
          familyName: 'Bar',
          age: 12,
          company: 'Meedoo',
          birthday: '2/17/2017'
        });
        setTimeout(() => {
          this.tableEditor.trigger({ row: this.rowInstances.last, cell: null });
        }, 0);
      }
    }
  }

  private copyPreventCirculair(event: RowChangeEvent<NgForm>): any {
    return {
      action: event.action,
      previous: {
        row: event.previous.row ? this.circulairString(event.previous.row) : null,
        context: event.previous.context ? this.circulairString(event.previous.context) : null
      },
      next: {
        row: event.next.row ? this.circulairString(event.next.row) : null,
        context: event.next.context ? this.circulairString(event.next.context) : null
      }
    };
  }

  private circulairString(object: any) {
    return `Instance of class ${object.constructor.name} produces circulair JSON and cannot display here: see console.`;
  }
  ngDoCheck(): void {}
}

const viewHtml =
`<table tableEditor (rowChange)=onRowChange($event)>
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
    <tr teRow ngForm #rowForm='ngForm' *ngFor='let row of rows; let i = index' [teContext]=rowForm>
      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.givenName name='givenName'>>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [teDisabled]=isDisabled(i)  [(ngModel)]=row.familyName name='familyName'>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.age name='age'>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [teDisabled]='isDisabled(i) || disabledMode' [(ngModel)]=row.company name='company'>
        <ng-container teAnchor></ng-container>
      </td>
      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.birthday name='birthday'>
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
  public rows: any[]
  public disabledMode: boolean = true;
  @ViewChild(TableEditorDirective) private tableEditor: TableEditorDirective;
  @ViewChildren(TableEditorRowDirective) private rowInstances: QueryList<TableEditorRowDirective>;
  constructor(private service: DataService, config: TableEditorConfig) {
    /* Configuring the table editor to put 'form-control' classes on the input fields.*/
    config.classes.push('form-control');
    /* exposing rows to the view.*/
    this.rows = service.data;
    });
  }

  public onRowChange(event: RowChangeEvent<NgForm>) {
    console.log(event);
    if (event.previous.context && event.previous.context.dirty) {
      /* any logic can be added here to e.g. save content to a database */
      this.service.doSomeAPIStuffWith(event.previous.row)
      console.log('row is dirty!')
    }
    this.onExitHook(event);
  }

  public isDisabled(idx: number): boolean {
    if (!this.disabledMode) {
      return false;
    }
    return idx === 2;
  }

  private onExitHook(event: RowChangeEvent<any>) {
    if (event.next.row === null && event.action != null) {
      if (event.action === NavigationAction.Down || event.action === NavigationAction.Right) {
        this.rows.push({
          givenName: 'Foo',
          familyName: 'Bar',
          age: 12,
          company: 'Meedoo',
          birthday: '2/17/2017'
        });
        setTimeout(() => {
          this.tableEditor.trigger({ row: this.rowInstances.last });
        }, 0);
      }
    }
  }
}
`;
const viewCss = `/* form-control class is defined in bootstrap */
table {
  position: relative;
  input {
	  position: absolute;
  }
}

td.ng-dirty {
	input.form-control {
	border-color: #d8aa2c;
	}
}

tr.ng-dirty {
	background-color:#d8aa2c42;
	input.form-control {
		background-color:#d8aa2c42;
	}
}

td[ng-reflect-te-disabled='true'] {
  background-color: #ffdede;
  opacity: 0.4;
}


`;
const htmlNote = `<td .... >
  <ng-container teAnchor></ng-container>
</td>`;
