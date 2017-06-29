import { Component } from '@angular/core';
import { DocService } from './doc.service';

@Component({
  templateUrl: 'doc.component.html',
})
export class DocComponent {

    constructor(public service:DocService) {}


    public get title(): string {
        return this.service.selected == undefined ?
            'List of Angular Polaris Component' :
            this.service.selected.name;
    }

    public get breadcrumbs(): any {
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
}
