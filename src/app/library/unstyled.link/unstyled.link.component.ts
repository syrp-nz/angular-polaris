import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsUnstyledLink',
    host: {
        '[attr.data-polaris-unstyled]': 'true',
    },
    templateUrl: './unstyled.link.component.html',
    styles: [':host {display: inline;}'],
})
export class UnstyledLinkComponent {

    @Input() set fromAction(action:AngularComplexAction) {
        this.children = action.content;
        this.accessibilityLabel = action.accessibilityLabel;
        this.url = action.url;
        this.onAction = action.onAction;

        if (action.routerLink) {
            this.routerLink = action.routerLink;
        }


        this.plain = action.plain ? true : false;
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

    @Output() click: EventEmitter<any> = new EventEmitter();

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
     * Display as disabled button.
     */
    @Input() plain: boolean = false;

    /**
     * Hack as an Angular router link.
     */
    @Input() routerLink: string;

    @Input() inGroup: boolean = false;

    @Input() outline: boolean = false;

    @Input() external: boolean = false;

    @Input() iconOnly: boolean = false;

    @Input() icon: string;

    @Input() classNames: string;


    /**
     * Apply classes to the inner button.
     */
    @Input() innerClass: string = '';

    ngClass() {
        return {
            'Polaris-Button--primary': this.primary !== false,
            'Polaris-Button--destructive': this.destructive !== false,
            'Polaris-Button--disabled': this.disabled !== false,
            'Polaris-Button--plain': this.plain !== false,
            'Polaris-Button--outline': this.outline !== false,
            'Polaris-Button--iconOnly': this.iconOnly !== false,

        }
    }

}
