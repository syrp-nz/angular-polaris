import { Component } from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';

const STATUSES = {
    'dev': 'attention',
    'beta': 'warning',
    'completed': 'success',
    'not started': 'info',
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

    public badge(component: PolarisComponent) {
        return [
            {
                content: component.status,
                status: STATUSES[component.status],
                progress: PROGRESSES[component.status]
            },
            {
                content: component.category,
            },
        ];
    }

}
