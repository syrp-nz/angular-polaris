import { Component } from '@angular/core';
import { DocService } from './doc.service';

@Component({
  templateUrl: 'doc.component.html',
})
export class DocComponent {

    constructor(private service:DocService) {}


    private get title(): string {
        return this.service.selected == undefined ?
            'List of Angular Polaris Component' :
            this.service.selected.name;
    }

    private get breadcrumbs(): any {
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
