import { Component, Input} from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: './choice.component.html'
})
export class ChoiceComponent extends ComponentComponent {

    protected componentLink: string = 'choice/choice.component';

    label:string = 'Hello world';
    id:string = 'SampleID123';
    helpText:string = '';
    error:any = '';

    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const status = this.nullableAttr('status');
        const progress = this.nullableAttr('progress');

return `<plrsChoice
    [label]="label"
    [id]="id"
    [helpText]="helpText"
    [error]="error">
    <input type="checkbox" [attr.id]="id" />
</plrsChoice>`;
    }

}
