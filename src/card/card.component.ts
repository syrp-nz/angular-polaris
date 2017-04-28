import { Component, Input, OnInit } from '@angular/core';
import { Action } from '@shopify/polaris';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsCard',
    templateUrl: './card.component.html',
    host: {
        '[class.Polaris-Card]': 'true',
        '[class.Polaris-Card--subdued]': 'subdued !== false'
    },
    styles: [':host {display: block;}']
})
export class CardComponent implements OnInit {

    /**
     * Title content for the card.
     */
    @Input() title: string = '';


    /**
     * A less prominent card.
     */
    @Input('subdued') subdued: boolean = false;

    /**
     * 	Auto wrap content in section.
     */
    @Input('sectioned') sectioned: boolean = false;

    /**
     * Primary action in the card footer.
     */
    @Input() primaryFooterAction: Action;

    /**
     * Secondary action in the card footer.
     */
    @Input() secondaryFooterAction: Action;

    /**
     * Card header actions.
     */
    @Input() actions: Action[];

    ngOnInit() { }

}
