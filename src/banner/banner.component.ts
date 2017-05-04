import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';

const getUniqueID = createUniqueIDFactory('Banner');

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsBanner',
    templateUrl: './banner.component.html',
    host: {
        '[class.Polaris-Banner]': 'true',
        '[class.Polaris-Banner--statusSuccess]': 'status == "success"',
        '[class.Polaris-Banner--statusInfo]': 'status == "info"',
        '[class.Polaris-Banner--statusWarning]': 'status == "warning"',
        '[class.Polaris-Banner--statusCritical]': 'status == "critical"',
        '[class.Polaris-Banner--hasDismiss]': 'onDismiss',
        '[attr.role]': '"banner " + status',
        '[attr.aria-labelledby]': 'id + "Heading"',
        '[attr.aria-describedby]': 'id + "Content"',
        '[attr.tabindex]': '0',
    },
})
export class BannerComponent implements OnInit {

    ngOnInit() { }

    /**
     * Title content for the card.
     */
    @Input() title: string = '';

    private id = getUniqueID();

    private _icon : string|TemplateRef<any>;

    /**
     * Icon to display in the banner.
     */
    @Input() get icon(): string|TemplateRef<any> {
        if (this._icon) {
            return this._icon;
        } else {
            // switch (this.status) {
                // case 'success':
                //     return successIcon;
                // case 'info':
                //     return infoIcon;
                // case 'warning':
                //     return successWarning;
                // case 'critical':
                //     return infoCritical;
                // default:
                //     return fallbackIcon;

            //}
            return '';
        }
    };
    set icon(value: string|TemplateRef<any>) {
        this._icon = value;
    }

    /**
     * Sets the status of the banner.
     */
    @Input() status: '' | 'success' | 'info' | 'warning' | 'critical' = '';

    /**
     * Action for banner.
     */
    @Input() action: AngularComplexAction;

    /**
     * Displays a secondary action
     */
    @Input() secondaryAction: AngularComplexAction;

    /**
     * Displays a secondary action
     */
    @Input() onDismiss: () => any;


    private get iconColor(): string {
        switch (this.status) {
            case 'success':
                return 'greenDark';
            case 'info':
                return 'tealDark';
            case 'warning':
                return 'yellowDark';
            case 'critical':
                return 'redDark';
            default:
                return 'ink';
        }
    }
}
