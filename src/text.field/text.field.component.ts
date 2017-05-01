import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Renderer } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';


const getUniqueID = createUniqueIDFactory('TextField');

const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsTextField',
    templateUrl: 'text.field.component.html',
    providers: [DEFAULT_VALUE_ACCESSOR]
})
export class TextFieldComponent /*extends DefaultValueAccessor*/ implements OnInit {

    ngOnInit() { }


    @Input() prefix: string;
    @Input() suffix: string;
    @Input() placeholder: string;
    @Input() value: string;
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
}
