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
    name: string = 'choice';
    bindedValue: any[] = [];
    allowMultiple: boolean = false;

    choices: Types.Option[] = [
        'Choice One',
        'Choice Two',
        {label: 'Choice Three', value:3},
        {label: 'Choice Four', value:{hello:'world'}},
    ];


    constructor(protected service: DocService) {
        super(service);
    }

    public get code(): string {
        const title = this.nullableAttr('title');
        const titleHidden = this.booleanAttr("titleHidden");
        const id = this.nullableAttr('id');
        const name = this.nullableAttr('name');
        const allowMultiple = this.booleanAttr('allowMultiple');

        const choices = this.jsonAttr('[choices]', this.choices);


        const change = this.eventAttr('change');
        const bind = this.attr('[(ngModel)]','bindedValue');


        return `<plrsChoiceList${title}${titleHidden}${id}${name}${choices}${allowMultiple}${bind}${change}></plrsChoiceList>`;
    }

}
