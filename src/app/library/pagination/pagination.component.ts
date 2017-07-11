import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsPagination',
    templateUrl: './pagination.component.html',
    host: {
        '[class.Polaris-Pagination]': 'true',
        '[class.Polaris-Pagination--plain]': 'plain !== false'
    }
})
export class PaginationComponent {

    @Input() public plain: boolean = false;

    @Input() public nextUrl: string;
    @Input() public previousUrl: string;

    @Input() public hasNext: boolean = false;
    @Input() public hasPrevious: boolean = false;

    @Output() public next: EventEmitter<any> = new EventEmitter<any>();
    @Output() public previous: EventEmitter<any> = new EventEmitter<any>();

    @Input() public nextRouterLink:string;
    @Input() public previousRouterLink:string;
}
