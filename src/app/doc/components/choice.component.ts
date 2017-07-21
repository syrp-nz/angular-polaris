import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: './choice.component.html'
})
export class ChoiceComponent extends ComponentComponent {

    protected componentPath: string = 'choice/choice.component';

    label:string = 'Hello world';
    id:string = 'SampleID123';
    helpText:string = '';
    error:any = '';

    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const label = this.nullableAttr('label');
        const id = this.nullableAttr('id');
        const helpText = this.nullableAttr('helpText');
        const error = this.nullableAttr('error');


return `<plrsChoice${label}${id}${helpText}${error}>
    <input type="checkbox" attr.id="${this.id}" />
</plrsChoice>`;
    }

}
