import { Component, Input } from '@angular/core';
import { PolarisComponent } from '../doc.data';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'metaComponent',
    template: `<plrsCard sectioned title="Related resources">
        <ul>
            <li><a href="{{github}}tree/master/src/app/library/{{component.path}}.ts">View source code on GitHub</a></li>
            <li *ngIf="component.docLink"><a href="https://polaris.shopify.com/components/{{component.docLink}}">View Polaris specs</a></li>
        </ul>
    </plrsCard>`,
    styles: ["plrscard {margin-top: 2rem;}"]
})
export class MetaComponent {
    @Input() component: PolarisComponent;

    github = environment.repo;
}
