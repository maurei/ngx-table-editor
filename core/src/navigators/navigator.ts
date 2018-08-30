import { ElementRef, Renderer2, InjectionToken } from '@angular/core';

export const TE_NAVIGATORS = new InjectionToken<AbstractNavigator>('TeNavigators');

/**
 * An enumerator that reflect the possible movements that happen within a table.
 */
export enum NavigationAction {
	Up = 'up',
	Right = 'right',
	Down = 'down',
	Left = 'left',
	Exit = 'exit'
}
/**
 * An abstract base class that can be used to implement a navigator, allowing for interactions between the UI and [TableEditorDirective]{@link TableEditorDirective}. See the [README section]{@link /documentation/classes/AbstractNavigator.html#readme} on this page on how to implement one, or check out the source code of [KeyboardNavigator]{@link documentation/classes/KeyboardNavigator.html#source} for more detailed information.
 */
export abstract class AbstractNavigator {
	constructor(
		protected renderer: Renderer2,
		protected tableElementRef: ElementRef<HTMLTableElement>,
		private actionParser: (action: NavigationAction | undefined) => void
	) {}

	/**
	 * A method that should be called to instruct the Table Editor to move in a certain direction.
	 * @returns void
	 */
	protected execute(action: NavigationAction | undefined): void {
		this.actionParser(action);
	}
	/**
	 * When a TableEditorDirective is instantiated, it will call ([in the onInit lifecycle]{@link TableEditorDirective#ngOnInit}) `listener` of all navigators associated with the instance.
	 * @returns () => void the unregister function for the listeners that have been registered.
	 */
	abstract listener(): () => void;
}
