import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: 'badge.component.html'
})
export class BadgeComponent extends ComponentComponent {

    protected componentPath: string = 'badge/badge.component';

    @Input() public content:string = 'Hello world';
    @Input() public status:string|false = '';
    @Input() public progress:string|false = '';

    statusOptions = ['', 'default', 'success', 'info', 'warning', 'attention'];

    progressOptions = ['', 'incomplete', 'partiallyComplete', 'complete'];

    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const status = this.nullableAttr('status');
        const progress = this.nullableAttr('progress');

return `<plrsBadge${status}${progress}>
    ${this.content}
</plrsBadge>`;
    }

}
