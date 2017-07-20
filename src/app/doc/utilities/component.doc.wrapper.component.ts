import { Component, OnInit, Input, ContentChildren, ElementRef, QueryList} from '@angular/core';
import { PolarisComponent } from '../doc.data';



@Component({
    selector: 'componentDocWrapper',
    templateUrl: 'component.doc.wrapper.component.html'
})
export class ComponentDocWrapperComponent {

    @Input() bindedValue: any;

    @Input() code: string;

    @Input() component: PolarisComponent;

    @Input() showLog: boolean = false;

    get bindedValueJson(): string {
        return JSON.stringify(this.bindedValue, null, "    ");
    }

    clearConsole = {content: 'Clear console', onAction: console.clear};
}
