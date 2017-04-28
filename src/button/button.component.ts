import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsButton',
    templateUrl: 'button.component.html',
    host: {
        '[class.Polaris-ButtonGroup__Item]': 'inGroup'
    },
    styles: [':host {display: inline-block;}']
})
export class ButtonComponent implements OnInit {

    ngOnInit() { }


    @Input() set fromAction(action:AngularComplexAction) {
        this.children = action.content;
        this.accessibilityLabel = action.accessibilityLabel;
        this.url = action.url;
        this.onAction = action.onAction;
        this.routerLinkActive = action.routerLinkActive ? true : false;
    }

    /**
     * The content to display inside the button.
     */
    @Input() children:string;


    @Input() accessibilityLabel:string;

    /**
     * URL to link to
     */
    @Input() url:string;

    @Input() onAction = () => {
        this.click.emit(null);
    };

    /**
     * 	Display as primary button
     */
    @Input() primary: boolean = false;

    /**
     * Display as destructive button
     */
    @Input() destructive: boolean = false;

    /**
     * Display as disabled button.
     */
    @Input() disabled: boolean = false;

    /**
     * Hack as an Angular router link.
     */
    @Input() routerLinkActive: boolean = false;


    @Output() click: EventEmitter<any> = new EventEmitter();

    @Input() inGroup: boolean = false;

    ngClass() {
        return {
            'Polaris-Button--primary': this.primary !== false,
            'Polaris-Button--destructive': this.destructive !== false,
            'Polaris-Button--disabled': this.disabled !== false,
        }
    }



}
