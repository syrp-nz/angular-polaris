import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';

const getUniqueID = createUniqueIDFactory('TextField');

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsTextField',
    templateUrl: 'text.field.component.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextFieldComponent), multi: true}
    ],
})
export class TextFieldComponent extends ElementBase<string>  implements OnInit {

    ngOnInit() {
        console.dir(this.helpText);
    }

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    @Input() prefix: string;
    @Input() suffix: string;

    /**
     * Hint text to display
     */
    @Input() placeholder: string|TemplateRef<any> = "";

    /**
     * 	Initial value for the input
     */
    @Input() value: string;

    /**
     * Additional hint text to display.
     */
    @Input() helpText: string;
    @Input() label: string;
    @Input() labelAction: AngularComplexAction;
    @Input() labelHidden: boolean;
    @Input() disabled: boolean;
    @Input() readOnly: boolean;
    @Input() autoFocus: boolean;
    @Input() multiline: boolean | number;
    @Input() error: Error;
    // @Input() connectedRight?: React.ReactNode;
    // @Input() connectedLeft?: React.ReactNode;
    // @Input() type: Type;
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


    @Input() model: NgModel;


    @Output() keyup = new EventEmitter<KeyboardEvent>();

    triggerKeyUp(event: KeyboardEvent) {
        this.keyup.emit(event);
    }
}
