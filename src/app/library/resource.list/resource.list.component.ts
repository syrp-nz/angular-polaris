import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsResourceList',
    templateUrl: './resource.list.component.html',
    host: {
        '[class.Polaris-ResourceList]': 'true',
    }
})
export class ResourceListComponent implements OnInit {

    ngOnInit() { }

}
