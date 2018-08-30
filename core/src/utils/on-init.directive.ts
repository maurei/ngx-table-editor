import { Directive, Input, OnInit, ElementRef } from '@angular/core';

/**
 * A utility directive used internally in [InputComponent]{@link InputComponent} to fire code in a template-driven way during the OnInit lifecycle.
 */
@Directive({ selector: '[teOnInit]' })
export class OnInitDirective implements OnInit {
	@Input('teOnInit') public teOnInit: any;
	constructor(private el: ElementRef<HTMLElement>) {}
	ngOnInit(): void {
		this.teOnInit(this.el);
	}
}
