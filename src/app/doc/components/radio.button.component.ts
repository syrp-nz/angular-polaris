import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';

@Component({
    templateUrl: './radio.button.component.html'
})
export class RadioButtonComponent extends ComponentComponent {

    protected componentPath: string = 'radio.button/radio.button.component';

    label:string = 'Hello world';
    labelHidden:boolean = false;
    id:string = '';
    name:string = 'hello';
    checked:boolean = false;
    helpText:string = '';
    logChange: boolean = false;
    logFocus: boolean = false;
    logBlur: boolean = false;
    value: boolean = false;

    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const label = this.nullableAttr('label');
        const labelHidden = this.labelHidden ? "\n    [labelHidden]=\"labelHidden\"" : "";
        const helpText = this.nullableAttr('helpText');
        const id = this.nullableAttr('id');
        const change = this.eventAttr('change');
        const focus = this.eventAttr('focus');
        const blur = this.eventAttr('blur');

        return `<plrsRadioButton${label}${labelHidden}${helpText}${id}
    [(ngModel)]="model.BooleanVariable"${change}${focus}${blur}></plrsRadioButton>`;
    }

}
