import { Component, Input} from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends ComponentComponent {

    protected componentLink: string = 'checkbox/checkbox.component';

    label:string = 'Hello world';
    labelHidden:boolean = false;
    id:string = 'SampleID123';
    helpText:string = '';
    error:any = '';
    checked: boolean = true;

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
