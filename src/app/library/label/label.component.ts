import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLabel',
    templateUrl: 'label.component.html',
    host: {
        '[class.Polaris-Label]': 'true',
    }
})
export class LabelComponent implements OnInit {

    @Output() public click = new EventEmitter<any>();

    ngOnInit() { }


    /**
     * The content to display inside the button.
     */
    @Input() children:string;
    @Input() id:string;

    @Input() action: AngularComplexAction;
    @Input() hidden: boolean;

    public get labelID() {
        return `${this.id}Label`;
    }

    public onClick(event: any) {
        this.click.emit(event);
    }

}
