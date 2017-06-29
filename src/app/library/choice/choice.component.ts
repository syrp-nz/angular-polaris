import { Component, Input, OnInit } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsChoice',
    templateUrl: './choice.component.html',
    host: { },
    styles: [':host {display: block;}']
})
export class ChoiceComponent {

    /**
     * ID of the input the label will be linked to
     */
    @Input() id: string = '';

    /**
     * Title content for the card.
     */
    @Input() label: string = '';

    @Input() labelHidden: boolean;

    @Input() error: Error;

    @Input() helpText: string;

}
