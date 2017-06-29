import { Component } from '@angular/core';
import { DocService } from './doc.service';
import { Pagination } from '../library/'

@Component({
  templateUrl: 'doc.component.html',
})
export class DocComponent {

    constructor(public service:DocService) {}


    get title(): string {
        return this.service.selected == undefined ?
            'List of Angular Polaris Component' :
            `${this.service.selected.name} component`;
    }

    get breadcrumbs(): any {
        let crumb = [
            {
                content: "Home",
                routerLink: "/"
            }
        ];

        if (this.service.selected !== undefined) {
            crumb.push({
                content: 'Component list',
                routerLink: '/doc'
            });
        }

        return crumb;
    }

    get pagination(): Pagination.PaginationDescriptor {
        const previous = this.service.previous;
        const next = this.service.next;

        let pagination: Pagination.PaginationDescriptor = {};
        if (previous) {
            pagination.hasPrevious = true;
            pagination.previousRouterLink = '/doc/' + previous.link;
        }

        if (next) {
            pagination.hasNext = true;
            pagination.nextRouterLink = '/doc/' + next.link;
        }

        return pagination;

    }
}
