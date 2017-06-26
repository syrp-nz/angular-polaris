import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLabelled',
    templateUrl: 'labelled.component.html',
    host: {
        '[class.Polaris-Labelled]': 'true',
    },
    styles: [':host {display: block;}']
})
export class LabelledComponent implements OnInit {

    ngOnInit() { }


    @Input() id: string;
    @Input() label: string;
    @Input() error: any;
    @Input() action: AngularComplexAction;
    @Input() helpText: string;
    @Input() children: string;
    @Input() labelHidden: boolean;

    @Output() public click = new EventEmitter<any>();
    private onClick(event: any) {
        this.click.emit(event);
    }

}
