# ngx-table-editor

A library that transform dorky static HTML tables into cool dynamic editable components. Tested with Angular 6.1.

## Getting Started

### Install the library
Using npm:
```console
npm install --save-dev @ngx-table-editor/core
```

### Import the library in your module
```js
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
```

### Transform some dull HTML tables.
See the [examples](https://maurei.github.io/ngx-table-editor/demo) or the [API docs](https://maurei.github.io/ngx-table-editor/documentation).

### Optional: Consider to install the extras
By hitting:
```console
npm install --save-dev @ngx-table-editor/extras
```
And import from it whatever you want to use.
```js
@NgModule({
  declarations: [ ... ],
  imports: [ ... , TypeaheadModule.forRoot(), ... ],
  providers: [ ...],
  bootstrap: [ ... ]
})
export class SomeModule {}
```

## License
MIT
