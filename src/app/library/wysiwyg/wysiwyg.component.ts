import { Component, Input, Output, AfterViewInit, EventEmitter, ViewChild, ElementRef, Optional, Inject, forwardRef, TemplateRef } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';

import * as Quill from 'quill';
// declare const Quill;

const getUniqueID = createUniqueIDFactory('Wysiwyg');

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsWysiwyg',
    templateUrl: 'wysiwyg.component.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WysiwygComponent), multi: true}
    ],
    styleUrls: ['./wysiwyg.component.css'],
    host: {
        '[class.focus]': 'focus',
    }
})
export class WysiwygComponent extends ElementBase<string>  implements AfterViewInit {

    @ViewChild('editor') private editorEl: ElementRef;

    private quillEditor: any;

    ngAfterViewInit() {
        this.quillEditor = new Quill(this.editorEl.nativeElement, {
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction

                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],

                    ['clean']
                ],
                // toolbar: ['bold', 'italic', 'underline', 'strike']
            },
            theme: 'snow'
        });

        console.dir(this.quillEditor);
    }

    public get focus(): boolean {
        return  this.quillEditor !== undefined &&
                typeof this.quillEditor.hasFocus === 'function' &&
                this.quillEditor.hasFocus();
    }

    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

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

    @Input() error: Error;

    @Input() name: string;
    @Input() id = getUniqueID();

    @Input() onChange: (value: string) => void;
    @Input() onFocus: () => void;
    @Input() onBlur: () => void;
    @Input() required: boolean = false;

    @Output() keyup = new EventEmitter<KeyboardEvent>();

    @ViewChild(NgModel) model: NgModel;

    private triggerKeyUp(event: KeyboardEvent) {
        this.keyup.emit(event);
    }

    private triggerChange(value: string) {
        this.change.emit(value);
        if (typeof this.onChange == 'function'){
            this.onChange(this.value);
        }
    }
}
