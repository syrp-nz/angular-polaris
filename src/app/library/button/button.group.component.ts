import { Component, Input, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { AngularComplexAction } from '../types';
import { ButtonComponent } from './button.component';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsButtonGroup',
    templateUrl: 'button.group.component.html',
    host: {
        '[class.Polaris-ButtonGroup]': 'true',
        '[class.Polaris-Card--segmented]': 'segmented !== false'
    },
})
export class ButtonGroupComponent implements OnInit, AfterContentInit {

    ngOnInit() { }

    ngAfterContentInit() {
        this.buttons.toArray().forEach((button: ButtonComponent) => {
            button.inGroup = true;
        });
    }

    /**
     * 	Join buttons as segmented group
     */
    @Input() segmented:boolean;

    @ContentChildren(ButtonComponent) buttons: QueryList<ButtonComponent>;
}
