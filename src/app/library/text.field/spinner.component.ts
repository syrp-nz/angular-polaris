import { Component, Input, Output, OnInit, EventEmitter, HostListener } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsSpinner',
    templateUrl: 'spinner.component.html',
    host: {
        '[class.Polaris-TextField__Spinner]': 'true',
        '[attr.aria-hidden]': '"true"'
    }
})
export class SpinnerComponent {

    ngOnInit() { }

    constructor() { }

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    @Input() onChange: {(delta: number): void} = (delta: number) => {};

    @Input() onClick: {(): void} = () => {};

    public handleStep(step: number) {
        this.onChange(step);
        this.change.emit(step);
    }

    @HostListener('click') public handleClick() {
        this.onClick();
    }

}
