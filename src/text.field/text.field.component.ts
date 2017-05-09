import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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

    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    @Input() prefix: string|TemplateRef<any> = "";
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
    @Input() disabled: boolean = false;
    @Input() readOnly: boolean = false;
    @Input() autoFocus: boolean;
    @Input() multiline: boolean | number;
    @Input() error: Error;
    // @Input() connectedRight?: React.ReactNode;
    // @Input() connectedLeft?: React.ReactNode;
    @Input() type: string;
    @Input() name: string;
    @Input() id = getUniqueID();
    @Input() step: number = 1;
    @Input() autoComplete: boolean;
    @Input() max: number = Infinity;
    @Input() maxLength: number;
    @Input() min: number = -Infinity;
    @Input() minLength: number;
    @Input() pattern: string;
    @Input() spellCheck: boolean;
    @Input() onChange: (value: string) => void;
    @Input() onFocus: () => void;
    @Input() onBlur: () => void;
    @Input() required: boolean = false;


    @ViewChild(NgModel) model: NgModel;

    @ViewChild('field') private field: ElementRef;


    @Output() keyup = new EventEmitter<KeyboardEvent>();

    private triggerKeyUp(event: KeyboardEvent) {
        this.keyup.emit(event);
    }

    private triggerChange(value: string) {
        this.change.emit(value);
        if (typeof this.onChange == 'function'){
            this.onChange(this.value);
        }
    }

    private handleInputFocus() {
        this.field.nativeElement.focus();
    }

    private handleNumberChange(steps: number) {
        const numericValue = this.value ? parseFloat(this.value) : 0;
        if (isNaN(numericValue)) { return; }
        const newValue = Math.min(this.max, Math.max(numericValue + (steps * this.step), this.min));

        if (newValue != numericValue) {
            this.value = newValue.toString();
            this.triggerChange(this.value);
        }

    }

    private displayLimit(value: number): string {
        if (this.type == 'number' && isFinite(value)) {
            return value.toString();
        } else {
            return '';
        }
    }
}
