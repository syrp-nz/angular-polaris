import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbsPrompt } from '../breadcrumbs/breadcrumbs.component';
import { PaginationDescriptor } from '../pagination/pagination.descriptor';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsPage',
    templateUrl: './page.component.html',
    host: {
        '[class.Polaris-Page]': 'true',
        '[class.Polaris-Page--fullWidth]': 'fullWidth !== false'
    },
    styles: [':host {display: block;}']
})
export class PageComponent implements OnInit {


    @Input() public title: string = '';
    @Input() public icon: string = '';
    @Input() public breadcrumbs: BreadcrumbsPrompt;
    @Input() public secondaryActions: AngularComplexAction[];
    @Input() public primaryAction: AngularComplexAction;
    @Input() public pagination: PaginationDescriptor;
    @Input() public fullWidth: boolean = false;

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }
}
