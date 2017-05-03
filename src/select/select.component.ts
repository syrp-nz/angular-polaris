import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';


const getUniqueID = createUniqueIDFactory('Select');

export type Option = string | {
  value: string,
  label: string,
};

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsSelect',
    templateUrl: 'select.component.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true}
    ],
})
export class SelectComponent extends ElementBase<string>  implements OnInit {

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
    @Input() labelAction: AngularComplexAction;
    @Input() labelHidden: boolean;
    @Input() disabled: boolean = false;
    @Input() autoFocus: boolean;
    @Input() multiline: boolean | number;
    @Input() error: Error;
    @Input() name: string;
    @Input() id = getUniqueID();
    @Input() step: number;
    @Input() autoComplete: boolean;
    @Input() max: number;
    @Input() maxLength: number;
    @Input() min: number;
    @Input() minLength: number;
    @Input() pattern: string;
    @Input() spellCheck: boolean;
    @Input() onChange: (value: string) => void;
    @Input() onFocus: () => void;
    @Input() onBlur: () => void;
    @Input() required: boolean = false;
    @Input() value: string;


    @ViewChild(NgModel) model: NgModel;

}
