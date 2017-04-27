import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsSection',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Layout__Section]': 'true',
        '[class.Polaris-Layout__Section--secondary]': 'secondary !== false'
    }
})
export class SectionComponent implements OnInit {

    /**
     * Whatever this section is secondary
     */
    @Input('secondary') secondary: boolean = false;

    ngOnInit() {  }

}
