import { Component, Input, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { AngularComplexAction } from '../types';

@Component({
    selector: 'plrsBreadcrumbs',
    templateUrl: 'breadcrumbs.component.html',
    styles: [':host {display: block;}'],
    host: {
        '[attr.role]': '"navigation"',
    },
})
export class BreadcrumbsComponent implements OnInit, AfterContentInit {


    @Input() public breadcrumbs:AngularComplexAction[];

    ngOnInit() { }

    ngAfterContentInit() {

    }

    private get action(): AngularComplexAction {
        if (this.breadcrumbs && this.breadcrumbs.length > 0) {
            return this.breadcrumbs[this.breadcrumbs.length - 1];
        }
        return null;
    }

}
