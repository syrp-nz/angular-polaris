import { Component, Input} from '@angular/core';
import { DocService, PolarisComponent } from './doc.service';
import { ComponentComponent } from './component.component';

@Component({
    templateUrl: 'badge.component.html'
})
export class BadgeComponent extends ComponentComponent {

    protected componentLink: string = 'badge/badge.component';

    @Input() private content:string = 'Hello world';
    @Input() private status:string = '';
    private code: string;

    statusOptions = [
        {label: ' ', value: ''},
        {label: 'default', value: 'default'},
        {label: 'success', value: 'success'},
        {label: 'warning', value: 'warning'},
        {label: 'attention', value: 'attention'},
    ];

    constructor(protected service: DocService) {
        super(service);
        this.rebuildCode();
    }

    private rebuildCode() {
        this.code=`<plrsBadge>${this.content}<plrsBadge>`;
    }

}
