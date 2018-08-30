### Guide: implementing a custom Navigator
This guide will discuss how to implement a custom navigator that causes the table editor to exit upon a click outside of the table.

#### The implementation
```js
import { NavigationAction, AbstractNavigator } from 'ngx-table-editor'

class MouseNavigator extends AbstractNavigator {
	public listener(): () => void {
		const unregisterFn = this.renderer.listen(document, 'click', this.actionGenerator.bind(this));
		return unregisterFn
	}
	private actionGenerator(event: MouseEvent): void {
		if (!(event as any).path.includes(this.tableElementRef.nativeElement)) {
			this.execute(NavigationAction.Exit);
		}
	}
}
```
Any class that inherits from `AbstractNavigator` must implement a `listener` method, in which any interaction with the DOM is done (listening to scrolling events):

```js
	public listener(): () => void {
		// attach the appropiate listener to the dom.
		const unregisterFn = this.renderer.listen(document, 'click', this.actionGenerator.bind(this));
		// make sure to return the unregisterFn. It is called internally when the table is destroyed.
		return unregisterFn;
	}
```
Internally, the navigator will be injected in the `TableEditorDirective` constructor, and the listener method will be called by the instance of `TableEditorDirective` as soon as angular fires the `OnInit` lifecycle hook. It must return a unregister function which will be fired when the `TableEditorDirective` is destroyed.
```js
	private actionGenerator(event: MouseEvent): void {
		// Through the inheritance of `AbstractNavigator`, instances of the MouseNavigator class have access to the `ElementRef<HTMLTableElement>` of the table, through `this.tableElementRef`.
		if (!(event as any).path.includes(this.tableElementRef.nativeElement)) {
			this.execute(NavigationAction.Exit);
		}
	}
```

Lastly, the navigator must be added to the `TE_NAVIGATORS` multi provider, which is done by registering it in the `providers` section in your module as follows:
```js
import { NgModule } from '@angular/core';
import { TE_NAVIGATORS } from 'ngx-table-editor'
import { MouseNavigator } from './mouse-navigator'

@NgModule({
	providers: [
		{ provide: TE_NAVIGATORS, useValue: MouseNavigator, multi: true },
	]
})
export class MyModule {}
```

#### Notes
 * Injection in the navigators is currently not possible because the navigators are instantiated by `TableEditorDirective`, not through Angular DI. This should probably be changed in a later version.