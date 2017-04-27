import { Component, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLayout:not([sectioned])',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Layout]': 'true'
    }
})
export class LayoutComponent implements OnInit {

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }
}

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLayout[sectioned]',
    template: `<plrsSection><ng-content></ng-content></plrsSection>`,
    host: {
        '[class.Polaris-Layout]': 'true'
    }
})
export class SectionedLayoutComponent implements OnInit {

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }
}
