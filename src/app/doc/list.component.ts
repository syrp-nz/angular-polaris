import { Component, OnInit } from '@angular/core';
import { DocService, PolarisComponent } from './doc.service';

@Component({
  templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    constructor(protected service: DocService) {}

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

    ngOnInit() {

    }

}
