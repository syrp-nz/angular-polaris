import { Component, Input} from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: 'badge.component.html'
})
export class BadgeComponent extends ComponentComponent {

    protected componentLink: string = 'badge/badge.component';

    @Input() private content:string = 'Hello world';
    @Input() private status:string|false = '';
    @Input() private progress:string|false = '';

    statusOptions = ['', 'default', 'success', 'warning', 'attention'];

    progressOptions = ['', 'incomplete', 'partiallyComplete', 'complete'];

    constructor(protected service: DocService) {
        super(service);
    }

    private get code(): string {
        const status = this.nullableAttr('status');
        const progress = this.nullableAttr('progress');

return `<plrsBadge${status}${progress}>
    ${this.content}
</plrsBadge>`;
    }

}
