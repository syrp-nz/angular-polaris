import { Component, Input} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';
import { ComponentComponent } from '../utilities/component.component';
import { Types } from '../../library';

@Component({
    templateUrl: './choice.list.component.html'
})
export class ChoiceListComponent extends ComponentComponent {

    protected componentPath: string = 'radio.button/radio.button.component';

    title:string = 'Hello world';
    titleHidden:boolean = false;
    id:string = '';
    logChange: boolean = false;
    logFocus: boolean = false;
    logBlur: boolean = false;
    name: string = 'choice';
    bindedValue: any[] = [];
    allowMultiple: boolean = false;
    normalCheckbox: any;

    hello: string = 'two';

    choices: Types.Option[] = [
        'Choice One',
        'Choice Two',
        {label: 'Choice Three', value:3},
        {label: 'Choice Four', value:{hello:'world'}},
    ];

    one: boolean = false;
    two: boolean = true;
    three: boolean = false;
    printVal() {
        console.dir(this.hello)
    }

    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const title = this.nullableAttr('title');
        const titleHidden = this.titleHidden ? "\n    [titleHidden]=\"titleHidden\"" : "";
        const id = this.nullableAttr('id');
        const change = this.eventAttr('change');
        const focus = this.eventAttr('focus');
        const blur = this.eventAttr('blur');

        return `<plrsRadioButton${title}${titleHidden}${id}
    [(ngModel)]="model.BooleanVariable"${change}${focus}${blur}></plrsRadioButton>`;
    }

}
