'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">ngx-table-editor documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad" ></span>Overview
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/TableEditorModule.html" data-type="entity-link">TableEditorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'data-target="#xs-components-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'id="xs-components-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                        <li class="link">
                                            <a href="components/InputTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputTemplateComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'data-target="#xs-directives-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'id="xs-directives-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                        <li class="link">
                                            <a href="directives/AnchorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DateCellControlValueAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateCellControlValueAccessor</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NumberCellControlValueAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberCellControlValueAccessor</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OnInitDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OnInitDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TableEditorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableEditorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TableEditorRowDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableEditorRowDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TextCellControlValueAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextCellControlValueAccessor</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'data-target="#xs-injectables-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' : 'id="xs-injectables-links-module-TableEditorModule-4d8fac0080e30eda31bb1939f2946bb4"' }>
                                        <li class="link">
                                            <a href="injectables/TableEditorConfig.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TableEditorConfig</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TemplateService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TypeaheadModule.html" data-type="entity-link">TypeaheadModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-TypeaheadModule-4bdffa7aec2eb5fe36b3b506869c6d88"' : 'data-target="#xs-directives-links-module-TypeaheadModule-4bdffa7aec2eb5fe36b3b506869c6d88"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-TypeaheadModule-4bdffa7aec2eb5fe36b3b506869c6d88"' : 'id="xs-directives-links-module-TypeaheadModule-4bdffa7aec2eb5fe36b3b506869c6d88"' }>
                                        <li class="link">
                                            <a href="directives/TypeaheadCellControlValueAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeaheadCellControlValueAccessor</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AbstractNavigator.html" data-type="entity-link">AbstractNavigator</a>
                    </li>
                    <li class="link">
                        <a href="classes/KeyboardNavigator.html" data-type="entity-link">KeyboardNavigator</a>
                    </li>
                    <li class="link">
                        <a href="classes/RowChangeEvent.html" data-type="entity-link">RowChangeEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/TemplateExtractor.html" data-type="entity-link">TemplateExtractor</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AbstractTableCell.html" data-type="entity-link">AbstractTableCell</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/HTMLInputElementStyle.html" data-type="entity-link">HTMLInputElementStyle</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RowChangeContext.html" data-type="entity-link">RowChangeContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TeExecutor.html" data-type="entity-link">TeExecutor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
