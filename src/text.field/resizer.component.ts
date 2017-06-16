import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';


/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsResizer',
    templateUrl: 'resizer.component.html',
    host: {
        '[Polaris-TextField__Resizer]': 'true',
        '[attr.aria-hidden]': '"true"'
    }
})
export class ResizerComponent {

    ngOnInit() { }

    @Output() heightChange: EventEmitter<number> = new EventEmitter<number>();

    @Input() contents: string = '';
    @Input() currentHeight: number | null = null;
    @Input() minimumLines?: number = 0;


}
