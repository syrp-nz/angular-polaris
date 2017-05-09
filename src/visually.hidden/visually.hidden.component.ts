import { Component, Input, OnInit, TemplateRef } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsVisuallyHidden',
    template: '<ng-content></ng-content>',
    host: {
        '[class.Polaris-VisuallyHidden]': 'true',
    },
})
export class VisuallyHiddenComponent implements OnInit {

    ngOnInit() { }

}
