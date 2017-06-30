import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: 'banner.component.html'
})
export class BannerComponent extends ComponentComponent {

    protected componentPath: string = 'banner/banner.component';

    content:string = 'Hello world';
    title:string = '';
    icon:string = '';
    status:string|false = '';
    progress:string|false = '';

    statusOptions = ['', 'default', 'success', 'info', 'warning', 'critical'];

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
