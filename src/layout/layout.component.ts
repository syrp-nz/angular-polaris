import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLayout',
    templateUrl: 'layout.component.html',
    host: {
        '[class.Polaris-Layout]': 'true'
    }
})
export class LayoutComponent implements OnInit {

    /**
     * Automatically add a sectionned to the layout.
     */
    @Input() sectioned: boolean = false;

    ngOnInit() { }
}
