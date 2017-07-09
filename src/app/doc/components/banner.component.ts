import { Component, Input, ViewChild} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';
import * as Polaris from '../../library';
import { Subscriber } from 'rxjs';

@Component({
    templateUrl: 'banner.component.html'
})
export class BannerComponent extends ComponentComponent {

    protected componentPath: string = 'banner/banner.component';

    @ViewChild('banner') private banner: Polaris.Banner.BannerComponent;

    private dismissSubscriber: Subscriber<any>;


    content:string = 'Hello world';
    title:string = '';
    icon:string = '';
    status:string|false = '';

    logDismiss: boolean = false;
    logPrimaryAction: boolean = false;
    logSecondaryAction: boolean = false;

    primaryAction: Polaris.Types.AngularComplexAction;
    secondaryAction: Polaris.Types.AngularComplexAction;

    statusOptions = ['', 'default', 'success', 'info', 'warning', 'critical'];

    constructor(protected service: DocService) {
        super(service);
        this.primaryAction = {
            content: 'Primary action',
            onAction: () => {this.eventLog(undefined, 'action')}
        }
        this.secondaryAction = {
            content: 'Secondary action',
            onAction: () => {this.eventLog(undefined, 'secondaryAction')}
        }
    }

    dismissUpdate() {
        if (this.logDismiss) {
            this.dismissSubscriber = this.banner.dismiss.subscribe((event) => {this.eventLog(event, 'dismiss')});
        } else {
            this.dismissSubscriber.unsubscribe();
        }
    }

    primaryActionUpdate() {
        if (this.logPrimaryAction) {
            this.banner.action = this.primaryAction;
        } else {
            this.banner.action = undefined;
        }
    }

    secondaryActionUpdate() {
        if (this.logSecondaryAction) {
            this.banner.secondaryAction = this.secondaryAction;
        } else {
            this.banner.secondaryAction = undefined;
        }
    }



    public get code(): string {
        const title = this.nullableAttr('title');
        const status = this.nullableAttr('status');
        const icon = this.nullableAttr('icon');
        const dismiss = this.eventAttr('dismiss');
        const action = this.logPrimaryAction ? this.indent(`[action]="{content: 'Primary action', onAction: eventLog}"`) : '';
        const secondaryAction = this.logSecondaryAction ? this.indent(`[secondaryAction]="{content: 'Secondary action', onAction: eventLog}"`) : '';

return `<plrsBanner${title}${status}${dismiss}${icon}${action}${secondaryAction}>
    ${this.content}
</plrsBanner>`;
    }

}
