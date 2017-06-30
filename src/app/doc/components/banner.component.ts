import { Component, Input, ViewChild} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';
import * as Polaris from '../../library';

@Component({
    templateUrl: 'banner.component.html'
})
export class BannerComponent extends ComponentComponent {

    protected componentPath: string = 'banner/banner.component';

    @ViewChild('banner') private banner: Polaris.Banner.BannerComponent;

    private subscription: any = false;


    content:string = 'Hello world';
    title:string = '';
    icon:string = '';
    status:string|false = '';
    progress:string|false = '';
    logDismiss: boolean = false;

    statusOptions = ['', 'default', 'success', 'info', 'warning', 'critical'];

    progressOptions = ['', 'incomplete', 'partiallyComplete', 'complete'];

    constructor(protected service: DocService) {
        super(service);
    }

    dismissUpdate() {
        if (this.logDismiss) {
            this.subscription = this.banner.dismiss.subscribe((event) => {this.eventLog(event, 'dismiss')});
        } else {
            this.subscription.unsubscribe();
        }
    }

    public get code(): string {
        const status = this.nullableAttr('status');
        const dismiss = this.eventAttr('dismiss');

return `<plrsBanner${status}${dismiss}>
    ${this.content}
</plrsBanner>`;
    }

}
