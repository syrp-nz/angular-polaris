import { Component, Input } from '@angular/core';
import { PolarisComponent } from '../doc.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'metaComponent',
    template: `<plrsCard sectioned title="Code">
        <ul>
            <li><a href="{{github}}tree/master/src/app/library/{{component.link}}.ts">View source code on GitHub</a></li>
            <li><a href="https://polaris.shopify.com/components/{{component.docLink}}">View Polaris specs</a></li>
        </ul>
    </plrsCard>`,
    styles: ["plrscard {margin-top: 2rem;}"]
})
export class MetaComponent {
    @Input() component: PolarisComponent;

    github = environment.repo;

    ngOnInit() {
        console.dir(this.component);
    }
}
