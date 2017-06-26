import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbsPrompt } from '../breadcrumbs/breadcrumbs.component';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsPage',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Page]': 'true'
    }
})
export class PageComponent implements OnInit {


    @Input() public title: string = '';
    @Input() public icon: string = '';
    @Input() public breadcrumbs: BreadcrumbsPrompt;
    @Input() public secondaryActions: AngularComplexAction[];
    @Input() public primaryAction: AngularComplexAction;
    @Input() public pagination: any;

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }
}
