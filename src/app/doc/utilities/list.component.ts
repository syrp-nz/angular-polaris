import { Component } from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';

const STATUSES = {
    'dev': 'warning',
    'beta': 'info',
    'completed': 'success',
    'not started': 'default',
};

const PROGRESSES = {
    'dev': 'partiallyComplete',
    'beta': 'partiallyComplete',
    'completed': 'complete',
    'not started': 'incomplete',
};

@Component({
  templateUrl: 'list.component.html',
})
export class ListComponent {

    constructor(public service: DocService) {}

    public badge(status: string) {
        return {
            content: status,
            status: STATUSES[status],
            progress: STATUSES[status]
        }
    }

}
