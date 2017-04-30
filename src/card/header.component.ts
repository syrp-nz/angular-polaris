import { Component, Input, OnInit } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsHeader',
    templateUrl: './header.component.html',
    host: {
        '[class.Polaris-Card__Header]': 'true',
    },
    styles: [':host {display: block;}']
})
export class HeaderComponent implements OnInit {

    /**
     * Title content for the card.
     */
    @Input() title: string = '';


    /**
     * Card header actions.
     */
    @Input() actions: AngularComplexAction[];

    ngOnInit() { }

}
