import { ElementRef, Renderer2 } from '@angular/core';
import { AbstractNavigator, NavigationAction } from './navigator';

/**
 * An implementation of [AbstractNavigator]{@link AbstractNavigator} that is responsible for
 * parsing keyboard input, allowing for navigation similar to that of excel.
 *
 * See the [README]{@link /documentation/classes/AbstractNavigator.html#readme} of [AbstractNavigator]{@link AbstractNavigator} for a instruction on how to implement a custom navigator.
 */
export class KeyboardNavigator extends AbstractNavigator {
	public keyCodes = [38, 40, 9, 13, 27];
	public listener(): () => void {
		const unlistenKeyDown = this.renderer.listen(this.tableElementRef.nativeElement, 'keydown', event => {
			if (this.keyCodes.includes(event.which)) {
				event.preventDefault();
				event.stopPropagation();
			}
		});
		const unlistenKeyUp = this.renderer.listen(this.tableElementRef.nativeElement, 'keyup', this.actionGenerator.bind(this));
		return () => {
			unlistenKeyDown();
			unlistenKeyUp();
		};
	}
	private actionGenerator(event: KeyboardEvent) {
		if (this.keyCodes.includes(event.which)) {
			let action: NavigationAction | undefined;
			event.preventDefault();
			event.stopPropagation();
			if (event.which === 9) {
				if (event.shiftKey) {
					action = NavigationAction.Left;
				} else {
					action = NavigationAction.Right;
				}
			} else if (event.which === 38) {
				action = NavigationAction.Up;
			} else if (event.which === 40) {
				action = NavigationAction.Down;
			} else if (event.which === 13 || event.which === 27) {
				action = NavigationAction.Exit;
			}
			this.execute(action);
		}
	}
}
