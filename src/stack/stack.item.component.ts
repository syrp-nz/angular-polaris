import { Component, OnInit, Input } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsStackItem',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Stack__Item]': 'true',
        '[class.Polaris-Stack__Item--fill]': 'fill !== false'
    }
})
export class StackItemComponent implements OnInit {

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }

    /**
     * Fill the stack with this item.
     */
    @Input() fill: boolean = false;
}
