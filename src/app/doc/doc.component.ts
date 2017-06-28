import { Component } from '@angular/core';
import { DocService } from './doc.service';

@Component({
  templateUrl: 'doc.component.html',
})
export class DocComponent {
    breadcrumbs = [
        {
            content: "Home",
            routerLink: "/"
        }
    ];



    constructor(private service:DocService) {}

    private badge(status: string) {
        const statuses = {
            'dev': 'warning',
            'beta': 'info',
            'completed': 'success',
            'not started': 'default',
        };


        return {
            content: status,
            status: statuses[status]
        }


    }
}
