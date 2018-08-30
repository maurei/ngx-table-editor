/** @ignore */
export type BsEventCallback = (event?: any) => boolean | void;
/** @ignore */
export interface ListenOptions {
	target?: HTMLElement;
	targets?: HTMLElement[];
	triggers?: string;
	outsideClick?: boolean;
	show?: BsEventCallback;
	hide?: BsEventCallback;
	toggle?: BsEventCallback;
}
