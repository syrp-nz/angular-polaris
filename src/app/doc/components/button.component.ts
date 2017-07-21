import { Component, Input, ViewChild} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';
import * as Polaris from '../../library';
import { Subscriber } from 'rxjs';

@Component({
    templateUrl: 'button.component.html'
})
export class ButtonComponent extends ComponentComponent {

    protected componentPath: string = 'button/button.component';

    @ViewChild('banner') private banner: Polaris.Banner.BannerComponent;

    private dismissSubscriber: Subscriber<any>;


    content:string = 'Hello world';
    url:string = '';
    routerLink:string = '';
    icon:string = '';
    size:string = '';

    logAction: boolean = false;
    logFocus: boolean = false;
    logBlur: boolean = false;

    primaryAction: Polaris.Types.AngularComplexAction;
    secondaryAction: Polaris.Types.AngularComplexAction;

    primary: boolean = false;
    disabled: boolean = false;
    external: boolean = false;
    destructive: boolean = false;
    outline: boolean = false;
    fullWidth: boolean = false;
    disclosure: boolean = false;
    plain: boolean = false;
    submit: boolean = false;

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

    public get code(): string {
        const title = this.nullableAttr('title');
        const status = this.nullableAttr('status');
        const icon = this.nullableAttr('icon');
        const dismiss = this.eventAttr('dismiss');

return `<plrsBanner${title}${status}${dismiss}${icon}>
    ${this.content}
</plrsBanner>`;
    }

}
