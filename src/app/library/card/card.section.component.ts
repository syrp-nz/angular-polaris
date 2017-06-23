import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsCardSection',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Card__Section]': 'true'
    },
    styles: [':host {display: block;}']
})
export class CardSectionComponent implements OnInit {

    ngOnInit() {  }

}
