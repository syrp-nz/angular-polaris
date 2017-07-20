import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ValueAccessorBase } from '../form/value.accessor';


const getUniqueID = createUniqueIDFactory('RadioButton');

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsRadioButton',
    templateUrl: 'radio.button.component.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioButtonComponent), multi: true}
    ],
    host: {
    }
})
export class RadioButtonComponent extends ValueAccessorBase<any> {

    /**
     * Additional hint text to display.
     */
    @Input() helpText: string;
    @Input() label: string;
    @Input() labelHidden: boolean;
    @Input() disabled: boolean = false;
    @Input() error: Error;
    @Input() name: string;

    private _id = getUniqueID();

    @Input()
    get id(): string {return this._id;}
    set id(value:string) { this._id = value ? value : this._id;}

    @Input('value') radioVal: string;

    @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

    get checked(): boolean {
        return this.value == this.radioVal;
    }

    triggerUpdate(event: Event) {
        if (event.srcElement['checked']) {
            this.value = this.radioVal;
        }
    }

}
