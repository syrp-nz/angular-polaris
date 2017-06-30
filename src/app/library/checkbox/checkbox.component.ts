import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';


const getUniqueID = createUniqueIDFactory('Checkbox');

export type Option = string | {
  value: string,
  label: string,
};

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsCheckbox',
    templateUrl: 'checkbox.component.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true}
    ],
    host: {
    }
})
export class CheckboxComponent extends ElementBase<boolean>  implements OnInit {

    ngOnInit() { }

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    @Input() options: Option[] = [];

    /**
     * Hint text to display
     */
    @Input() placeholder: string = "";

    // groups?: (Group | Option)[],
    /**
     * Additional hint text to display.
     */
    @Input() helpText: string;
    @Input() label: string;
    @Input() labelHidden: boolean;
    @Input() disabled: boolean = false;
    @Input() checked: boolean = false;
    @Input() error: Error;
    @Input() name: string;

    private _id = getUniqueID();

    @Input()
    get id(): string {return this._id;}
    set id(value:string) { this._id = value ? value : this._id;}

    @Input() step: number;
    @Input() value: boolean;

    @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();


    @ViewChild(NgModel) model: NgModel;

}
