import { Component, Input, OnInit, HostListener, TemplateRef } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsResourceListItem',
    templateUrl: './resource.list.item.component.html',
    host: {
        '[class.Polaris-ResourceList__ItemWrapper]': 'true',
    },
    styles: [':host {display: list-item;}']
})
export class ResourceListItemComponent implements OnInit {

    @Input() url: string;
    @Input() attributeOne: string;
    @Input() attributeTwo: string;
    @Input() attributeThree: string;
    @Input() routerLink: boolean = false;
    @Input() media: string|TemplateRef<any> = "";

    state = {
        actionsMenuVisible: false,
        focused: false,
    };

    ngOnInit() { }

    @HostListener('mouseenter') @HostListener('focus') focus() {
        this.state.focused = true;
    }

    @HostListener('mouseleave') @HostListener('blur') blur() {
        this.state.focused = false;
    }


    ngClass() {
        return {
            'Polaris-ResourceList__Item--focused': this.state.focused,
        }
    }

}
