import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  gettingStartedImport = gettingStartedImport;
  gettingStartedExtrasImport = gettingStartedExtrasImport;
  constructor() {}

  ngOnInit() {}
}

const gettingStartedImport = `import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEditorModule } from '@ngx-table-editor/core';

@NgModule({
  declarations: [ ... ],
  imports: [ ... ,
    TableEditorModule,
    FormsModule, /* if you want to use it with NgModel */
    ReactiveFormsModule, /* if you want to use it with FormGroup and FormControl */
    ... ],
  providers: [ ...],
  bootstrap: [ ... ]
})
export class SomeModule {}
`;
const gettingStartedExtrasImport = `import { TypeaheadModule } from '@ngx-table-editor/extras';

@NgModule({
  declarations: [ ... ],
  imports: [ ... , TypeaheadModule.forRoot(), ... ],
  providers: [ ...],
  bootstrap: [ ... ]
})
export class SomeModule {}
`;
