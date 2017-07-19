import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';

import { Types } from '../../library';

@Component({
    templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent extends ComponentComponent {

    protected componentPath: string = 'breadcrumbs/breadcrumbs.component';

    label:string = 'Hello world';
    id:string = 'SampleID123';
    helpText:string = '';
    error:any = '';

    breadcrumbs: Types.AngularComplexAction[] = [{content: "Root Page", url: "#"}];

    constructor(protected service: DocService) {
        super(service);
    }

    public popAction() {
        if (this.breadcrumbs.length > 1) {
            this.breadcrumbs.pop();
        }
    }

    public pushLogAction() {
        this.breadcrumbs.push({
            content: "Log to console " + (this.breadcrumbs.length + 1),
            onAction: () => {this.eventLog(null, 'Crumb click');}
        });
    }

    public pushUrl() {
        this.breadcrumbs.push({
            content: "URL link " + (this.breadcrumbs.length + 1),
            url: "doc"
        });
    }

    public pushRouterLink() {
        this.breadcrumbs.push({
            content: "Router link " + (this.breadcrumbs.length + 1),
            routerLink: "/doc"
        });
    }

    public get code(): string {
        const status = this.nullableAttr('status');
        const progress = this.nullableAttr('progress');

        let breadcrumbs: string = this.breadcrumbs.map((crumb) => {
            if (crumb.onAction) {
                return this.indent(`{'content': '${crumb.content}, 'onAction': () => eventLog(null, 'Crumb click') }'`, 2);
            } else {
                return this.indent(JSON.stringify(crumb).replace(/"/g, "'"), 2);
            }
        }).join(',');


return `<plrsBreadcrumbs
    [breadcrumbs]="[${breadcrumbs}
    ]">
</plrsBreadcrumbs>`;
    }

}
