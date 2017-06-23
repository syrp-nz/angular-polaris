import { Component, OnInit, Input } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsLayoutAnnotatedSection',
    templateUrl: 'layout.annotated.section.component.html',
    host: {
        '[class.Polaris-Layout__AnnotatedSection]': 'true'
    }
})
export class LayoutAnnotatedSectionComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;


    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }
}
