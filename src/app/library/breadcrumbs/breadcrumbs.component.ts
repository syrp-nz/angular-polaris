import { Component, Input, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { AngularComplexAction } from '../types';


export interface BreadcrumbsPrompt {
    breadcrumbs: AngularComplexAction[]
};

/**
 * Component to display a Shopify layout
 */
// @Component({
//     selector: 'plrsButtonGroup',
//     templateUrl: 'button.group.component.html',
//     host: {
//         '[class.Polaris-ButtonGroup]': 'true',
//         '[class.Polaris-Card--segmented]': 'segmented !== false'
//     },
// })
export class BreadcrumbsComponent implements OnInit, AfterContentInit {

    ngOnInit() { }

    ngAfterContentInit() {

    }

    /**
     * 	Join buttons as segmented group
     */
    @Input() segmented:boolean;
}
