(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advanced/advanced.component.css":
/*!*************************************************!*\
  !*** ./src/app/advanced/advanced.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/advanced/advanced.component.html":
/*!**************************************************!*\
  !*** ./src/app/advanced/advanced.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-row-change></app-row-change>"

/***/ }),

/***/ "./src/app/advanced/advanced.component.ts":
/*!************************************************!*\
  !*** ./src/app/advanced/advanced.component.ts ***!
  \************************************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/example-base */ "./src/app/shared/example-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AdvancedComponent = /** @class */ (function (_super) {
    __extends(AdvancedComponent, _super);
    function AdvancedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced',
            template: __webpack_require__(/*! ./advanced.component.html */ "./src/app/advanced/advanced.component.html"),
            styles: [__webpack_require__(/*! ./advanced.component.css */ "./src/app/advanced/advanced.component.css")]
        })
    ], AdvancedComponent);
    return AdvancedComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));



/***/ }),

/***/ "./src/app/advanced/advanced.module.ts":
/*!*********************************************!*\
  !*** ./src/app/advanced/advanced.module.ts ***!
  \*********************************************/
/*! exports provided: AdvancedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedModule", function() { return AdvancedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _advanced_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced.component */ "./src/app/advanced/advanced.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _advanced_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced.states */ "./src/app/advanced/advanced.states.ts");
/* harmony import */ var _row_change_row_change_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./row-change/row-change.component */ "./src/app/advanced/row-change/row-change.component.ts");
/* harmony import */ var _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-table-editor/core */ "./node_modules/@ngx-table-editor/core/fesm5/ngx-table-editor-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdvancedModule = /** @class */ (function () {
    function AdvancedModule() {
    }
    AdvancedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_7__["TableEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forChild({ states: _advanced_states__WEBPACK_IMPORTED_MODULE_5__["ADVANCED_STATES"] }), ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_advanced_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedComponent"], _row_change_row_change_component__WEBPACK_IMPORTED_MODULE_6__["RowChangeComponent"]]
        })
    ], AdvancedModule);
    return AdvancedModule;
}());



/***/ }),

/***/ "./src/app/advanced/advanced.states.ts":
/*!*********************************************!*\
  !*** ./src/app/advanced/advanced.states.ts ***!
  \*********************************************/
/*! exports provided: ADVANCED_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADVANCED_STATES", function() { return ADVANCED_STATES; });
/* harmony import */ var _advanced_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced.component */ "./src/app/advanced/advanced.component.ts");

var ADVANCED_STATES = [
    {
        name: 'advanced',
        url: '/examples/advanced',
        views: {
            '@': { component: _advanced_component__WEBPACK_IMPORTED_MODULE_0__["AdvancedComponent"] }
        }
    }
];


/***/ }),

/***/ "./src/app/advanced/row-change/row-change.component.html":
/*!***************************************************************!*\
  !*** ./src/app/advanced/row-change/row-change.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Row Change Event, Validation, Trigger and Disabled Cells</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Putting together some moving parts</h6>\n    <p class=\"card-text\">Everytime when a user changes from one row to another, a <code>RowChangeEvent</code> is emitted. This can be listened to by binding to the <code>rowChange</code> attribute on the <code>table</code> element.</p>\n    <p class=\"card-text\">Also, it is possible to supply a <code>teRow</code> with a reference to a context variable, by using the <code>[teContext]</code> attribute. This will for example may come in handy when using Angulars built-in validation methods. See the template how a reference to the <code>NgForm</code> instance is passed along to the <code>rowChange</code> event.</p>\n    <p>It is also possible to use the <code>RowChangeEvent</code> to implement custom hooks. As an example, we've implemented an onExitHook that adds a new record to the table when exiting the border from the bottom. It requires us to query the instances of <code>TableEditorDirective</code> and <code>TableEditorRowDirective</code>.</p>\n    <p>Lastly, it is possible to disable editing of cells on a individual level. To see this, play around with the toggle below.</p>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\" (click)='switchView(\"table\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"table\"}'>Example</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"html\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"html\"}'>HTML</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"ts\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"ts\"}'>TS</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"css\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"css\"}'>CSS</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'table'\">\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n      <label class=\"btn btn-secondary\" [ngClass]='{active: disabledMode}'>\n        <input type=\"radio\" [value]='true' [(ngModel)]=\"disabledMode\"> Disable\n      </label>\n      <label class=\"btn btn-secondary\" [ngClass]='{active: !disabledMode}'>\n        <input type=\"radio\" [value]='false' [(ngModel)]=\"disabledMode\"> Enable\n      </label>\n    </div>\n    <table tableEditor class='table' (rowChange)=onRowChange($event)>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Family</th>\n          <th>Age</th>\n          <th>Company</th>\n          <th>Birthday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr teRow ngForm #rowForm='ngForm' *ngFor='let row of rows; let i = index' [teContext]=rowForm>\n          <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.givenName name='givenName'>>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [teDisabled]=isDisabled(i)  [(ngModel)]=row.familyName name='familyName'>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.age name='age'>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [teDisabled]='isDisabled(i) || disabledMode' [(ngModel)]=row.company name='company'>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.birthday name='birthday'>\n            <ng-container teAnchor></ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <p>Row change events:\n      <markdown [data]=\"viewJson | language : 'json'\"></markdown>\n    </p>\n\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'html'\">\n    <markdown [data]=\"viewHtml| language : 'markup'\"></markdown>\n    <p>Note! Do not forget to put the <code>NgContainer</code> element with the <code>teAnchor</code> directive inside the table\n      cell: <markdown [data]=\"htmlNote | language : 'markup'\"></markdown>\n    </p>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'ts'\">\n    <markdown [data]=\"viewTs | language : 'typescript'\"></markdown>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'css'\">\n    The input elements are positioned by some javascript code, <a href=\"/ngx-table-editor/documentation\">see the API docs</a>. This requires the table to be positioned relative, and the inputs to be positioned absolute.\n    <markdown [data]=\"viewCss | language : 'scss'\"></markdown>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/advanced/row-change/row-change.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/advanced/row-change/row-change.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep td.ng-dirty input.form-control {\n  border-color: #d8aa2c; }\n\n::ng-deep tr.ng-dirty {\n  background-color: #d8aa2c42; }\n\n::ng-deep tr.ng-dirty input.form-control {\n    background-color: #d8aa2c42; }\n\n::ng-deep td[ng-reflect-te-disabled='true'] {\n  background-color: #ffdede;\n  opacity: 0.4; }\n"

/***/ }),

/***/ "./src/app/advanced/row-change/row-change.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/advanced/row-change/row-change.component.ts ***!
  \*************************************************************/
/*! exports provided: RowChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowChangeComponent", function() { return RowChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/example-base */ "./src/app/shared/example-base.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
/* harmony import */ var _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-table-editor/core */ "./node_modules/@ngx-table-editor/core/fesm5/ngx-table-editor-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*tslint:disable max-line-length*/






var RowChangeComponent = /** @class */ (function (_super) {
    __extends(RowChangeComponent, _super);
    function RowChangeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlNote = htmlNote;
        _this.disabledMode = true;
        return _this;
    }
    RowChangeComponent.prototype.ngOnInit = function () {
        var rows = _shared_data__WEBPACK_IMPORTED_MODULE_2__["data"].map(function (r) { return Object.assign({}, r); });
        this.rows = rows;
        this.viewHtml = viewHtml;
        this.viewTs = viewTs;
        this.viewCss = viewCss;
        this.viewJson = 'no event registered yet';
    };
    RowChangeComponent.prototype.onRowChange = function (event) {
        console.log(event);
        if (event.previous.context && event.previous.context.dirty) {
            console.log('row is dirty!');
        }
        this.onExitHook(event);
        this.viewJson = this.jsonPipe.transform(this.copyPreventCirculair(event));
    };
    RowChangeComponent.prototype.isDisabled = function (idx) {
        if (!this.disabledMode) {
            return false;
        }
        return idx === 2;
    };
    RowChangeComponent.prototype.onExitHook = function (event) {
        var _this = this;
        if (event.next.row === null && event.action != null) {
            if (event.action === _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__["NavigationAction"].Down || event.action === _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__["NavigationAction"].Right) {
                this.rows.push({
                    givenName: 'Foo',
                    familyName: 'Bar',
                    age: 12,
                    company: 'Meedoo',
                    birthday: '2/17/2017'
                });
                setTimeout(function () {
                    _this.tableEditor.trigger({ row: _this.rowInstances.last, cell: null });
                }, 0);
            }
        }
    };
    RowChangeComponent.prototype.copyPreventCirculair = function (event) {
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
    };
    RowChangeComponent.prototype.circulairString = function (object) {
        return "Instance of class " + object.constructor.name + " produces circulair JSON and cannot display here: see console.";
    };
    RowChangeComponent.prototype.ngDoCheck = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__["TableEditorDirective"]),
        __metadata("design:type", _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__["TableEditorDirective"])
    ], RowChangeComponent.prototype, "tableEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_3__["TableEditorRowDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RowChangeComponent.prototype, "rowInstances", void 0);
    RowChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-change',
            template: __webpack_require__(/*! ./row-change.component.html */ "./src/app/advanced/row-change/row-change.component.html"),
            styles: [__webpack_require__(/*! ./row-change.component.scss */ "./src/app/advanced/row-change/row-change.component.scss")]
        })
    ], RowChangeComponent);
    return RowChangeComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));

var viewHtml = "<table tableEditor (rowChange)=onRowChange($event)>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Family</th>\n      <th>Age</th>\n      <th>Company</th>\n      <th>Birthday</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr teRow ngForm #rowForm='ngForm' *ngFor='let row of rows; let i = index' [teContext]=rowForm>\n      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.givenName name='givenName'>>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [teDisabled]=isDisabled(i)  [(ngModel)]=row.familyName name='familyName'>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.age name='age'>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [teDisabled]='isDisabled(i) || disabledMode' [(ngModel)]=row.company name='company'>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [teDisabled]=isDisabled(i) [(ngModel)]=row.birthday name='birthday'>\n        <ng-container teAnchor></ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
var viewTs = "@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n})\nexport class MyComponent  {\n  public rows: any[]\n  public disabledMode: boolean = true;\n  @ViewChild(TableEditorDirective) private tableEditor: TableEditorDirective;\n  @ViewChildren(TableEditorRowDirective) private rowInstances: QueryList<TableEditorRowDirective>;\n  constructor(private service: DataService, config: TableEditorConfig) {\n    /* Configuring the table editor to put 'form-control' classes on the input fields.*/\n    config.classes.push('form-control');\n    /* exposing rows to the view.*/\n    this.rows = service.data;\n    });\n  }\n\n  public onRowChange(event: RowChangeEvent<NgForm>) {\n    console.log(event);\n    if (event.previous.context && event.previous.context.dirty) {\n      /* any logic can be added here to e.g. save content to a database */\n      this.service.doSomeAPIStuffWith(event.previous.row)\n      console.log('row is dirty!')\n    }\n    this.onExitHook(event);\n  }\n\n  public isDisabled(idx: number): boolean {\n    if (!this.disabledMode) {\n      return false;\n    }\n    return idx === 2;\n  }\n\n  private onExitHook(event: RowChangeEvent<any>) {\n    if (event.next.row === null && event.action != null) {\n      if (event.action === NavigationAction.Down || event.action === NavigationAction.Right) {\n        this.rows.push({\n          givenName: 'Foo',\n          familyName: 'Bar',\n          age: 12,\n          company: 'Meedoo',\n          birthday: '2/17/2017'\n        });\n        setTimeout(() => {\n          this.tableEditor.trigger({ row: this.rowInstances.last });\n        }, 0);\n      }\n    }\n  }\n}\n";
var viewCss = "/* form-control class is defined in bootstrap */\ntable {\n  position: relative;\n  input {\n\t  position: absolute;\n  }\n}\n\ntd.ng-dirty {\n\tinput.form-control {\n\tborder-color: #d8aa2c;\n\t}\n}\n\ntr.ng-dirty {\n\tbackground-color:#d8aa2c42;\n\tinput.form-control {\n\t\tbackground-color:#d8aa2c42;\n\t}\n}\n\ntd[ng-reflect-te-disabled='true'] {\n  background-color: #ffdede;\n  opacity: 0.4;\n}\n\n\n";
var htmlNote = "<td .... >\n  <ng-container teAnchor></ng-container>\n</td>";


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container mb-4\" ui-view>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.table tr td:nth-child(1),\ntable.table tr th:nth-child(1) {\n  width: 9.8039%;\n  text-align: left; }\n\ntable.table tr td:nth-child(2),\ntable.table tr th:nth-child(2) {\n  width: 15.8039%;\n  text-align: left; }\n\ntable.table tr td:nth-child(3),\ntable.table tr th:nth-child(3) {\n  width: 10.2156%;\n  text-align: left; }\n\ntable.table tr td:nth-child(4),\ntable.table tr th:nth-child(4) {\n  width: 24.5098%;\n  text-align: left; }\n\ntable.table tr td:nth-child(5),\ntable.table tr th:nth-child(5) {\n  width: 16.6666%;\n  text-align: left; }\n\ntable.table basic td.disabled {\n  background-color: #ffdede;\n  opacity: 0.4; }\n\ntable.table basic tr.disabled {\n  background-color: #ffdede;\n  opacity: 0.4; }\n\ntable.table basic td.disabled {\n  background-color: #ffdede;\n  opacity: 0.4; }\n\ntable.table basic tr.disabled {\n  background-color: #ffdede;\n  opacity: 0.4; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-table-editor/core */ "./node_modules/@ngx-table-editor/core/fesm5/ngx-table-editor-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _basic_basic_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/basic.module */ "./src/app/basic/basic.module.ts");
/* harmony import */ var _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getting-started/getting-started.module */ "./src/app/getting-started/getting-started.module.ts");
/* harmony import */ var _advanced_advanced_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced/advanced.module */ "./src/app/advanced/advanced.module.ts");
/* harmony import */ var _supported_fields_supported_fields_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./supported-fields/supported-fields.module */ "./src/app/supported-fields/supported-fields.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = /** @class */ (function () {
    function AppModule(config) {
        config.classes.push('form-control');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_2__["TableEditorModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot(),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__["UIRouterModule"].forRoot({
                    otherwise: { state: 'demo' },
                    useHash: true
                }),
                _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _basic_basic_module__WEBPACK_IMPORTED_MODULE_8__["BasicModule"],
                _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_9__["GettingStartedModule"],
                _advanced_advanced_module__WEBPACK_IMPORTED_MODULE_10__["AdvancedModule"],
                _supported_fields_supported_fields_module__WEBPACK_IMPORTED_MODULE_11__["SupportedFieldsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_2__["TableEditorConfig"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic/basic-form-control/basic-form-control.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/basic/basic-form-control/basic-form-control.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/basic-form-control/basic-form-control.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/basic/basic-form-control/basic-form-control.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Minimal Example: Using FormControl</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">The model-driven (reactive) way</h6>\n    <p class=\"card-text\">The same can be achieved using <code>FormControl</code> and <code>NgForm</code>. Don't forget to import <code>ReactiveFormsModule</code>.</p>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\" (click)='switchView(\"table\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"table\"}'>Example</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"html\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"html\"}'>HTML</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"ts\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"ts\"}'>TS</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"css\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"css\"}'>CSS</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'table'\">\n    <table tableEditor class='table'>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Family</th>\n          <th>Age</th>\n          <th>Company</th>\n          <th>Birthday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr teRow *ngFor='let row of rows' [formGroup]=\"row\">\n          <td teCell formControlName=givenName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell formControlName=familyName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell formControlName=age>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell formControlName=company>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell formControlName=birthday>\n            <ng-container teAnchor></ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <p>Changes in the first row are highlighted here:\n      <markdown [data]=\"viewJson | language : 'json'\"></markdown>\n    </p>\n\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'html'\">\n    <markdown [data]=\"viewHtml| language : 'markup'\"></markdown>\n    <p>Note! Do not forget to put the <code>NgContainer</code> element with the <code>teAnchor</code> directive inside the table\n      cell: <markdown [data]=\"htmlNote | language : 'markup'\"></markdown>\n    </p>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'ts'\">\n    <markdown [data]=\"viewTs | language : 'typescript'\"></markdown>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'css'\">\n    The input elements are positioned by some javascript code, <a href=\"/ngx-table-editor/documentation\">see the API docs</a>. This requires the table to be positioned relative, and the inputs to be positioned absolute.\n    <markdown [data]=\"viewCss | language : 'scss'\"></markdown>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basic/basic-form-control/basic-form-control.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/basic/basic-form-control/basic-form-control.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormControlComponent", function() { return BasicFormControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/example-base */ "./src/app/shared/example-base.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicFormControlComponent = /** @class */ (function (_super) {
    __extends(BasicFormControlComponent, _super);
    function BasicFormControlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlNote = htmlNote;
        return _this;
    }
    BasicFormControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rows = _shared_data__WEBPACK_IMPORTED_MODULE_2__["data"].map(function (row) {
            return _this.fb.group(row);
        });
        this.rows = rows;
        this.viewHtml = viewHtml;
        this.viewTs = viewTs;
        this.viewCss = viewCss;
    };
    BasicFormControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form-control',
            template: __webpack_require__(/*! ./basic-form-control.component.html */ "./src/app/basic/basic-form-control/basic-form-control.component.html"),
            styles: [__webpack_require__(/*! ./basic-form-control.component.css */ "./src/app/basic/basic-form-control/basic-form-control.component.css")]
        })
    ], BasicFormControlComponent);
    return BasicFormControlComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));

var viewHtml = "<table tableEditor>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Family</th>\n        <th>Age</th>\n        <th>Company</th>\n        <th>Birthday</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr teRow *ngFor='let row of rows' [formGroup]=\"row\">\n        <td teCell formControlName=givenName>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell formControlName=familyName>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell formControlName=age>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell formControlName=company>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell formControlName=birthday>\n          <ng-container teAnchor></ng-container>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n";
var viewTs = "@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n})\nexport class MyComponent  {\n  public rows: FormGroup[];\n  constructor(service: DataService, config: TableEditorConfig, fb: FormBuilder) {\n    /* Configuring the table editor to put 'form-control' classes on the input fields.*/\n    config.classes.push('form-control');\n    /* exposing rows to the view.*/\n    this.rows = service.data.map(row => {\n      return fb.group(row);\n    });\n  }\n}\n";
var viewCss = "/* form-control class is defined in bootstrap */\ninput {\n\tposition: absolute;\n}\ntable {\n\tposition: relative;\n}";
var htmlNote = "<td .... >\n  <ng-container teAnchor></ng-container>\n</td>";


/***/ }),

/***/ "./src/app/basic/basic-ng-model/basic-ng-model.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/basic/basic-ng-model/basic-ng-model.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/basic-ng-model/basic-ng-model.component.html":
/*!********************************************************************!*\
  !*** ./src/app/basic/basic-ng-model/basic-ng-model.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Minimal Example: Using NgModel</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">The most minimal set-up, in the template-driven way</h6>\n    <p class=\"card-text\">An example using only the basic directives\n      <code>tableEditor</code>,\n      <code>teRow</code> and\n      <code>teCell</code>. Click a row in the table to start editing, then use the\n      <strong>tab</strong>,\n      <strong>shift-tab</strong>,\n      <strong>arrow up</strong> and\n      <strong>arrow down</strong> keys to navigate through the table. Hit <strong>enter</strong> or <strong>esc</strong> to exit the editor. Don't forget to import <code>FormsModule</code>.</p>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\" (click)='switchView(\"table\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"table\"}'>Example</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"html\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"html\"}'>HTML</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"ts\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"ts\"}'>TS</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"css\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"css\"}'>CSS</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'table'\">\n    <table tableEditor class='table'>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Family</th>\n          <th>Age</th>\n          <th>Company</th>\n          <th>Birthday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr teRow *ngFor='let row of rows;'>\n          <td teCell [(ngModel)]=row.givenName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.familyName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.age>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.company>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.birthday>\n            <ng-container teAnchor></ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <p>Changes in the first row are highlighted here: <markdown [data]=\"viewJson | language : 'json'\"></markdown></p>\n\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'html'\">\n    <markdown [data]=\"viewHtml| language : 'markup'\"></markdown>\n    <p>Note! Do not forget to put the <code>NgContainer</code> element with the <code>teAnchor</code> directive inside the table\n      cell: <markdown [data]=\"htmlNote | language : 'markup'\"></markdown>\n    </p>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'ts'\">\n    <markdown [data]=\"viewTs | language : 'typescript'\"></markdown>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'css'\">\n    <p>The input elements are positioned by some javascript code, <a href=\"/ngx-table-editor/documentation\">see the API docs</a>. This requires the tableto be positioned relative, and the inputs to be positioned absolute.\n    <markdown [data]=\"viewCss | language : 'scss'\"></markdown></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basic/basic-ng-model/basic-ng-model.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/basic/basic-ng-model/basic-ng-model.component.ts ***!
  \******************************************************************/
/*! exports provided: BasicNgModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicNgModelComponent", function() { return BasicNgModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/example-base */ "./src/app/shared/example-base.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicNgModelComponent = /** @class */ (function (_super) {
    __extends(BasicNgModelComponent, _super);
    function BasicNgModelComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlNote = htmlNote;
        return _this;
    }
    BasicNgModelComponent.prototype.ngOnInit = function () {
        var rows = _shared_data__WEBPACK_IMPORTED_MODULE_2__["data"].map(function (row) { return Object.assign({}, row); });
        this.rows = rows;
        this.viewHtml = viewHtml;
        this.viewTs = viewTs;
        this.viewCss = viewCss;
    };
    BasicNgModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-ng-model',
            template: __webpack_require__(/*! ./basic-ng-model.component.html */ "./src/app/basic/basic-ng-model/basic-ng-model.component.html"),
            styles: [__webpack_require__(/*! ./basic-ng-model.component.css */ "./src/app/basic/basic-ng-model/basic-ng-model.component.css")]
        })
    ], BasicNgModelComponent);
    return BasicNgModelComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));

var viewHtml = "<table tableEditor>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Family</th>\n      <th>Age</th>\n      <th>Company</th>\n      <th>Birthday</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr teRow *ngFor='let row of rows'>\n      <td teCell [(ngModel)]=row.givenName>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.familyName>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.age>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.company>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.birthday>\n        <ng-container teAnchor></ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
var viewTs = "@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n})\nexport class MyComponent  {\n  public rows: any[];\n  constructor(service: DataService, config: TableEditorConfig) {\n    /* Configuring the table editor to put 'form-control' classes on the input fields.*/\n    config.classes.push('form-control');\n    /* exposing rows to the view.*/\n    this.rows = service.data;\n  }\n}\n";
var viewCss = "/* form-control class is defined in bootstrap */\ninput {\n\tposition: absolute;\n}\ntable {\n\tposition: relative;\n}";
var htmlNote = "<td .... >\n  <ng-container teAnchor></ng-container>\n</td>";


/***/ }),

/***/ "./src/app/basic/basic.component.css":
/*!*******************************************!*\
  !*** ./src/app/basic/basic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/basic.component.html":
/*!********************************************!*\
  !*** ./src/app/basic/basic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basic-ng-model></app-basic-ng-model>\n<app-basic-form-control></app-basic-form-control>"

/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.css */ "./src/app/basic/basic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/basic/basic.module.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.module.ts ***!
  \***************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-table-editor/core */ "./node_modules/@ngx-table-editor/core/fesm5/ngx-table-editor-core.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _basic_form_control_basic_form_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-form-control/basic-form-control.component */ "./src/app/basic/basic-form-control/basic-form-control.component.ts");
/* harmony import */ var _basic_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic.states */ "./src/app/basic/basic.states.ts");
/* harmony import */ var _basic_ng_model_basic_ng_model_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-ng-model/basic-ng-model.component */ "./src/app/basic/basic-ng-model/basic-ng-model.component.ts");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic.component */ "./src/app/basic/basic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_4__["TableEditorModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forChild(),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forChild({
                    states: _basic_states__WEBPACK_IMPORTED_MODULE_7__["BASIC_STATES"]
                })
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]],
            declarations: [_basic_ng_model_basic_ng_model_component__WEBPACK_IMPORTED_MODULE_8__["BasicNgModelComponent"], _basic_form_control_basic_form_control_component__WEBPACK_IMPORTED_MODULE_6__["BasicFormControlComponent"], _basic_component__WEBPACK_IMPORTED_MODULE_9__["BasicComponent"]]
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ }),

/***/ "./src/app/basic/basic.states.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.states.ts ***!
  \***************************************/
/*! exports provided: BASIC_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_STATES", function() { return BASIC_STATES; });
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.component */ "./src/app/basic/basic.component.ts");

var BASIC_STATES = [
    {
        name: 'basic',
        url: '/examples/basic',
        views: {
            '@': { component: _basic_component__WEBPACK_IMPORTED_MODULE_0__["BasicComponent"] },
        }
    }
];


/***/ }),

/***/ "./src/app/getting-started/getting-started.component.css":
/*!***************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/getting-started/getting-started.component.html":
/*!****************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>ngx-table-editor</h1>\n  <p class=\"lead\"> A library that transforms dorky static HTML tables into cool dynamic editable components. Tested with Angular 6.1.</p>\n</div>\n<div class=\"jumbotron\">\n  <h1>Getting started</h1>\n  <br>\n  <p class=\"lead\">1. Install the library.</p>\n  <markdown ngPreserveWhitespaces>\n    ```console\n    npm install --save-dev '@ngx-table-editor/core'\n    ```\n  </markdown>\n  <br>\n  <p class=\"lead\">2. Import the library in your module.</p>\n  <markdown [data]=\"gettingStartedImport | language : 'typescript'\"></markdown>\n  <br>\n  <p class=\"lead\">3. Transform some dull HTML tables.</p>\n  <p>See <a href='https://maurei.github.io/ngx-table-editor/demo/#/examples/basic'>the examples</a> or read the <a href='https://maurei.github.io/ngx-table-editor/documentation/'>API docs</a></p>\n  <br>\n  <p class=\"lead\">4. Optional: Consider to install the extras module and import from it whatever you want to use.</p>\n  <markdown ngPreserveWhitespaces>\n    ```console \n    npm install --save-dev '@ngx-table-editor/extras'\n    ```\n  </markdown>\n  For example, you can use the <code>TypeaheadModule</code>:\n  <markdown [data]=\"gettingStartedExtrasImport | language : 'typescript'\"></markdown>\n\n</div>"

/***/ }),

/***/ "./src/app/getting-started/getting-started.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.ts ***!
  \**************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
        this.gettingStartedImport = gettingStartedImport;
        this.gettingStartedExtrasImport = gettingStartedExtrasImport;
    }
    GettingStartedComponent.prototype.ngOnInit = function () { };
    GettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/getting-started/getting-started.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());

var gettingStartedImport = "import { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { TableEditorModule } from '@ngx-table-editor/core';\n\n@NgModule({\n  declarations: [ ... ],\n  imports: [ ... ,\n    TableEditorModule,\n    FormsModule, /* if you want to use it with NgModel */\n    ReactiveFormsModule, /* if you want to use it with FormGroup and FormControl */\n    ... ],\n  providers: [ ...],\n  bootstrap: [ ... ]\n})\nexport class SomeModule {}\n";
var gettingStartedExtrasImport = "import { TypeaheadModule } from '@ngx-table-editor/extras';\n\n@NgModule({\n  declarations: [ ... ],\n  imports: [ ... , TypeaheadModule.forRoot(), ... ],\n  providers: [ ...],\n  bootstrap: [ ... ]\n})\nexport class SomeModule {}\n";


/***/ }),

/***/ "./src/app/getting-started/getting-started.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.module.ts ***!
  \***********************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _getting_started_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started.states */ "./src/app/getting-started/getting-started.states.ts");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forChild(),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forChild({ states: _getting_started_states__WEBPACK_IMPORTED_MODULE_3__["GETTING_STARTED_STATES"] })
            ],
            declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]],
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ }),

/***/ "./src/app/getting-started/getting-started.states.ts":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.states.ts ***!
  \***********************************************************/
/*! exports provided: GETTING_STARTED_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETTING_STARTED_STATES", function() { return GETTING_STARTED_STATES; });
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");

var GETTING_STARTED_STATES = [
    {
        name: 'demo',
        url: '',
        views: {
            '@': { component: _getting_started_component__WEBPACK_IMPORTED_MODULE_0__["GettingStartedComponent"] },
        }
    }
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.nav-link.no-hover:hover {\n\tcolor: rgba(0,0,0,.5)!important;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\"><h3>ngx-table-editor</h3></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]='{active: isActive(\"demo\")}' uiSref=\"demo\">Getting Started</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link no-hover\">|</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href='/ngx-table-editor/documentation/'>API Documentation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link no-hover\">|</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link no-hover\">Examples: </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]='{active: isActive(\"basic\")}' uiSref=\"basic\">Basic</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]='{active: isActive(\"supported-fields\")}' uiSref=\"supported-fields\">Supported Fields</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]='{active: isActive(\"advanced\")}' uiSref=\"advanced\">Advanced</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(state) {
        this.state = state;
    }
    NavbarComponent.prototype.isActive = function (name) {
        return this.state.$current.name === name;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_core__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forChild()
            ],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/data.ts":
/*!********************************!*\
  !*** ./src/app/shared/data.ts ***!
  \********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* tslint:disable quotemark max-line-length whitespace */
var data = [
    { "givenName": "Rita", "familyName": "Pitcher", "email": "rpitcher0@gnu.org", "age": "5", "company": "Meedoo", "birthday": "2/17/2017" },
    { "givenName": "Aloysius", "familyName": "O'Shea", "email": "aoshea1@hc360.com", "age": "95", "company": "Edgeify", "birthday": "3/30/2017" },
    { "givenName": "Roman", "familyName": "Boddis", "email": "rboddis2@indiegogo.com", "age": "90", "company": "Camido", "birthday": "3/5/2017" },
    { "givenName": "Dov", "familyName": "Kalb", "email": "dkalb3@wp.com", "age": "97", "company": "Dynazzy", "birthday": "2/21/2017" },
    { "givenName": "Peria", "familyName": "Bench", "email": "pbench4@wired.com", "age": "22", "company": "Skinte", "birthday": "5/12/2017" },
    { "givenName": "Keefer", "familyName": "Jeremaes", "email": "kjeremaes5@tinyurl.com", "age": "45", "company": "Gigashots", "birthday": "10/21/2016" },
];


/***/ }),

/***/ "./src/app/shared/example-base.ts":
/*!****************************************!*\
  !*** ./src/app/shared/example-base.ts ***!
  \****************************************/
/*! exports provided: ExampleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleBase", function() { return ExampleBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExampleBase = /** @class */ (function () {
    function ExampleBase(jsonPipe, fb) {
        this.jsonPipe = jsonPipe;
        this.fb = fb;
        this.view = 'table';
    }
    ExampleBase.prototype.switchView = function (target) {
        this.view = target;
    };
    ExampleBase.prototype.ngDoCheck = function () {
        if (this.rows && this.rows[0] && this.rows[0]) {
            var target = this.rows[0];
            if (target instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                target = target.value;
            }
            this.viewJson = this.jsonPipe.transform(target);
        }
    };
    ExampleBase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ExampleBase);
    return ExampleBase;
}());



/***/ }),

/***/ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-core/supported-fields-core.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-core/supported-fields-core.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Supported Fields</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">text, number and date fields</h6>\n    <p class=\"card-text\">Setting <code>type='text'</code>, <code>type='number'</code> and <code>type='date'</code> leverages native HTML5 input types. For the last, there is an additional attribute <code>date-format</code> that allows for configuration of the date representation in a template-driven way.</p>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\" (click)='switchView(\"table\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"table\"}'>Example</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"html\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"html\"}'>HTML</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"ts\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"ts\"}'>TS</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"css\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"css\"}'>CSS</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'table'\">\n    <table tableEditor class='table'>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Family</th>\n          <th>Age</th>\n          <th>Company</th>\n          <th>Birthday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr teRow *ngFor='let row of rows;'>\n          <td teCell [(ngModel)]=row.givenName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.familyName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell type='number' [(ngModel)]=row.age>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.company>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell type='date' date-format=\"fullDate\" [(ngModel)]=row.birthday>\n            <ng-container teAnchor></ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <p>Changes in the first row are highlighted here:\n      <markdown [data]=\"viewJson | language : 'json'\"></markdown>\n    </p>\n\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'html'\">\n    <markdown [data]=\"viewHtml| language : 'markup'\"></markdown>\n    <p>Note! Do not forget to put the <code>NgContainer</code> element with the <code>teAnchor</code> directive inside the\n      table cell: <markdown [data]=\"htmlNote | language : 'markup'\"></markdown>\n    </p>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'ts'\">\n    <markdown [data]=\"viewTs | language : 'typescript'\"></markdown>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'css'\">\n    <p>The input elements are positioned by some javascript code, <a href=\"/ngx-table-editor/documentation\">see the API docs</a>. This requires the\n      tableto be positioned relative, and the inputs to be positioned absolute.\n      <markdown [data]=\"viewCss | language : 'scss'\"></markdown>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-core/supported-fields-core.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SupportedFieldsCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedFieldsCoreComponent", function() { return SupportedFieldsCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/example-base */ "./src/app/shared/example-base.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportedFieldsCoreComponent = /** @class */ (function (_super) {
    __extends(SupportedFieldsCoreComponent, _super);
    function SupportedFieldsCoreComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlNote = htmlNote;
        return _this;
    }
    SupportedFieldsCoreComponent.prototype.ngOnInit = function () {
        var rows = [];
        _shared_data__WEBPACK_IMPORTED_MODULE_2__["data"].forEach(function (row) { return rows.push(Object.assign({}, row)); });
        rows.map(function (row) { return (row.birthday = new Date(row.birthday)); });
        this.rows = rows;
        this.viewHtml = viewHtml;
        this.viewTs = viewTs;
        this.viewCss = viewCss;
    };
    SupportedFieldsCoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supported-fields-core',
            template: __webpack_require__(/*! ./supported-fields-core.component.html */ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.html"),
            styles: [__webpack_require__(/*! ./supported-fields-core.component.css */ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.css")]
        })
    ], SupportedFieldsCoreComponent);
    return SupportedFieldsCoreComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));

var viewHtml = "<table tableEditor>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Family</th>\n      <th>Age</th>\n      <th>Company</th>\n      <th>Birthday</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr teRow *ngFor='let row of rows;'>\n      <td teCell [(ngModel)]=row.givenName>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.familyName>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell type='number' [(ngModel)]=row.age>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell [(ngModel)]=row.company>\n        <ng-container teAnchor></ng-container>\n      </td>\n      <td teCell type='date' date-format=\"fullDate\" [(ngModel)]=row.birthday>\n        <ng-container teAnchor></ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
var viewTs = "@Component({\n  selector: 'app-supported-fields-core',\n  templateUrl: './app-supported-fields-core.component.html',\n})\nexport class BasicComponent  {\n  public rows: FormGroup[];\n  constructor(service: DataService, config: TableEditorConfig, fb: FormBuilder) {\n    /* Configuring the table editor to put 'form-control' classes on the input fields.*/\n    config.classes.push('form-control');\n    /* exposing rows to the view.*/\n    this.rows = []\n    service.data.forEach(row => this.rows.push(row));\n    this.rows.map(row => (row.birthday = new Date(row.birthday)));\n  }\n}\n";
var viewCss = "/* form-control class is defined in bootstrap */\ninput {\n\tposition: absolute;\n}\ntable {\n\tposition: relative;\n}";
var htmlNote = "<td .... >\n  <ng-container teAnchor></ng-container>\n</td>";


/***/ }),

/***/ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Supported Fields: Extras</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">ngx-bootstrap typeahead</h6>\n    <p class=\"card-text\">Additionally, <a href='https://valor-software.com/ngx-bootstrap/#/typeahead'>ngx-bootstrap typeahead</a> was forked and adjusted to work with this library. It has been adjusted to also accept in the <code>NgModel</code> binding references to types other than <code>string</code> and typeaheadEditable is set to false (<a href='https://github.com/valor-software/ngx-bootstrap/issues/1894'>see this issue</a>). Other than that, check out the ngx-bootstrap documentation for usage details.</p>\n    <p>You must import <code>TableEditorExtras</code> from <code>ngx-table-editor/extras</code> to use this feature.</p>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\" (click)='switchView(\"table\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"table\"}'>Example</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"html\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"html\"}'>HTML</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"ts\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"ts\"}'>TS</a>\n      </li>\n      <li class=\"nav-item\" (click)='switchView(\"css\")'>\n        <a class=\"nav-link\" [ngClass]='{active: view === \"css\"}'>CSS</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'table'\">\n    <table tableEditor class='table'>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Family</th>\n          <th>Age</th>\n          <th>Company</th>\n          <th>Birthday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr teRow *ngFor='let row of rows;'>\n          <td teCell [(ngModel)]=row.givenName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell [(ngModel)]=row.familyName>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell type='number' [(ngModel)]=row.age>\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell type='typeahead' [(ngModel)]=row.company [typeahead]=\"companies\" typeaheadOptionField=\"label\" typeaheadGroupField=\"category\">\n            <ng-container teAnchor></ng-container>\n          </td>\n          <td teCell type='date' date-format=\"fullDate\" [(ngModel)]=row.birthday>\n            <ng-container teAnchor></ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <p>Changes in the first row are highlighted here:\n      <markdown [data]=\"viewJson | language : 'json'\"></markdown>\n    </p>\n\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'html'\">\n    <markdown [data]=\"viewHtml| language : 'markup'\"></markdown>\n    <p>Note! Do not forget to put the <code>NgContainer</code> element with the <code>teAnchor</code> directive inside the\n      table cell: <markdown [data]=\"htmlNote | language : 'markup'\"></markdown>\n    </p>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'ts'\">\n    <markdown [data]=\"viewTs | language : 'typescript'\"></markdown>\n  </div>\n  <div class=\"card-block\" *ngIf=\"view === 'css'\">\n    <p>The input elements are positioned by some javascript code, <a href=\"/ngx-table-editor/documentation\">see the API docs</a>. This requires the\n      tableto be positioned relative, and the inputs to be positioned absolute.\n      <markdown [data]=\"viewCss | language : 'scss'\"></markdown>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SupportedFieldsExtrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedFieldsExtrasComponent", function() { return SupportedFieldsExtrasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_example_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/example-base */ "./src/app/shared/example-base.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
/*tslint:disable max-line-length*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var categories = ['Tech', 'Banking', 'Health'];
var i = 0;
var Company = /** @class */ (function () {
    function Company(id, val) {
        this.label = val;
        this.id = id + 1;
        this.category = categories[i];
        if (i === 2) {
            i = 0;
        }
        else {
            i++;
        }
        Company.list.push(this);
    }
    Company.list = [];
    return Company;
}());
var SupportedFieldsExtrasComponent = /** @class */ (function (_super) {
    __extends(SupportedFieldsExtrasComponent, _super);
    function SupportedFieldsExtrasComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlNote = htmlNote;
        return _this;
    }
    SupportedFieldsExtrasComponent.prototype.ngOnInit = function () {
        var rows = [];
        _shared_data__WEBPACK_IMPORTED_MODULE_2__["data"].forEach(function (row, idx) {
            var _row = Object.assign({}, row);
            _row.company = new Company(idx, _row.company);
            _row.birthday = new Date(row.birthday);
            rows.push(_row);
        });
        this.rows = rows;
        this.viewHtml = viewHtml;
        this.viewTs = viewTs;
        this.viewCss = viewCss;
        this.companies = Company.list;
    };
    SupportedFieldsExtrasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supported-fields-extras',
            template: __webpack_require__(/*! ./supported-fields-extras.component.html */ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.html"),
            styles: [__webpack_require__(/*! ./supported-fields-extras.component.css */ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.css")]
        })
    ], SupportedFieldsExtrasComponent);
    return SupportedFieldsExtrasComponent;
}(_shared_example_base__WEBPACK_IMPORTED_MODULE_1__["ExampleBase"]));

var viewHtml = "<table tableEditor>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Family</th>\n        <th>Age</th>\n        <th>Company</th>\n        <th>Birthday</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr teRow *ngFor='let row of rows;'>\n        <td teCell [(ngModel)]=row.givenName>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell [(ngModel)]=row.familyName>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell type='number' [(ngModel)]=row.age>\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell type='typeahead' [(ngModel)]=row.company [typeahead]=\"companies\" typeaheadOptionField=\"label\" typeaheadGroupField=\"category\">\n          <ng-container teAnchor></ng-container>\n        </td>\n        <td teCell type='date' date-format=\"fullDate\" [(ngModel)]=row.birthday>\n          <ng-container teAnchor></ng-container>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n";
var viewTs = "const categories = ['Tech', 'Banking', 'Health'];\nlet i = 0;\nclass Company {\n  static list: any[] = [];\n  public id: number;\n  public category: string;\n  public label: string;\n  constructor(id, val) {\n    this.label = val;\n    this.id = id + 1;\n    this.category = categories[i];\n    if (i === 2) {\n      i = 0;\n    } else { i++; }\n    Company.list.push(this);\n  }\n}\n\n@Component({\n  selector: 'app-supported-fields-extras',\n  templateUrl: './app-supported-fields-extras.component.html',\n})\nexport class BasicComponent  {\n  public rows: FormGroup[];\n  constructor(service: DataService, config: TableEditorConfig) {\n    /* Configuring the table editor to put 'form-control' classes on the input fields.*/\n    config.classes.push('form-control');\n    /* exposing rows to the view.*/\n    this.rows = service.data.map( (row, idx) => {\n      row.company = new Company(idx, row.company);\n      row.date = new Date(row.date);\n      return row;\n    });\n  }\n}\n";
var viewCss = "/* form-control class is defined in bootstrap */\ninput {\n\tposition: absolute;\n}\ntable {\n\tposition: relative;\n}";
var htmlNote = "<td .... >\n  <ng-container teAnchor></ng-container>\n</td>";


/***/ }),

/***/ "./src/app/supported-fields/supported-fields.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/supported-fields/supported-fields.component.html":
/*!******************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-supported-fields-core></app-supported-fields-core>\n<app-supported-fields-extras></app-supported-fields-extras>"

/***/ }),

/***/ "./src/app/supported-fields/supported-fields.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields.component.ts ***!
  \****************************************************************/
/*! exports provided: SupportedFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedFieldsComponent", function() { return SupportedFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportedFieldsComponent = /** @class */ (function () {
    function SupportedFieldsComponent() {
    }
    SupportedFieldsComponent.prototype.ngOnInit = function () { };
    SupportedFieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supported-fields',
            template: __webpack_require__(/*! ./supported-fields.component.html */ "./src/app/supported-fields/supported-fields.component.html"),
            styles: [__webpack_require__(/*! ./supported-fields.component.css */ "./src/app/supported-fields/supported-fields.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportedFieldsComponent);
    return SupportedFieldsComponent;
}());



/***/ }),

/***/ "./src/app/supported-fields/supported-fields.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields.module.ts ***!
  \*************************************************************/
/*! exports provided: SupportedFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedFieldsModule", function() { return SupportedFieldsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-table-editor/core */ "./node_modules/@ngx-table-editor/core/fesm5/ngx-table-editor-core.js");
/* harmony import */ var _ngx_table_editor_extras__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-table-editor/extras */ "./node_modules/@ngx-table-editor/extras/fesm5/ngx-table-editor-extras.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _supported_fields_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supported-fields.component */ "./src/app/supported-fields/supported-fields.component.ts");
/* harmony import */ var _supported_fields_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supported-fields.states */ "./src/app/supported-fields/supported-fields.states.ts");
/* harmony import */ var _supported_fields_core_supported_fields_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supported-fields-core/supported-fields-core.component */ "./src/app/supported-fields/supported-fields-core/supported-fields-core.component.ts");
/* harmony import */ var _supported_fields_extras_supported_fields_extras_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supported-fields-extras/supported-fields-extras.component */ "./src/app/supported-fields/supported-fields-extras/supported-fields-extras.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SupportedFieldsModule = /** @class */ (function () {
    function SupportedFieldsModule() {
    }
    SupportedFieldsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_table_editor_core__WEBPACK_IMPORTED_MODULE_4__["TableEditorModule"],
                _ngx_table_editor_extras__WEBPACK_IMPORTED_MODULE_5__["TableEditorExtrasModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forChild(),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forChild({
                    states: _supported_fields_states__WEBPACK_IMPORTED_MODULE_8__["SUPPORTED_FIELD_STATES"]
                })
            ],
            declarations: [_supported_fields_component__WEBPACK_IMPORTED_MODULE_7__["SupportedFieldsComponent"], _supported_fields_core_supported_fields_core_component__WEBPACK_IMPORTED_MODULE_9__["SupportedFieldsCoreComponent"], _supported_fields_extras_supported_fields_extras_component__WEBPACK_IMPORTED_MODULE_10__["SupportedFieldsExtrasComponent"]]
        })
    ], SupportedFieldsModule);
    return SupportedFieldsModule;
}());



/***/ }),

/***/ "./src/app/supported-fields/supported-fields.states.ts":
/*!*************************************************************!*\
  !*** ./src/app/supported-fields/supported-fields.states.ts ***!
  \*************************************************************/
/*! exports provided: SUPPORTED_FIELD_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTED_FIELD_STATES", function() { return SUPPORTED_FIELD_STATES; });
/* harmony import */ var _supported_fields_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supported-fields.component */ "./src/app/supported-fields/supported-fields.component.ts");

var SUPPORTED_FIELD_STATES = [
    {
        name: 'supported-fields',
        url: '/examples/supported-fields',
        views: {
            '@': { component: _supported_fields_component__WEBPACK_IMPORTED_MODULE_0__["SupportedFieldsComponent"] }
        }
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Moeys/Code/ngx-table-editor/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map