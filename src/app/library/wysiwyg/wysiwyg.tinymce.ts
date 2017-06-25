import { Component, Input, Output, AfterViewInit, EventEmitter, ViewChild, ViewChildren, ElementRef, Optional, Inject, forwardRef, TemplateRef, QueryList } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ElementBase} from '../form/element.base';

// import * as tinymce from 'tinymce';
declare let tinymce: any;

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
    @ViewChildren('.ql-toolbar') private tollbar: QueryList<ElementRef>;

    private editor: any;

    ngAfterViewInit() {
        this.initEditor();
    }

    public get focus(): boolean {
        return  this.editor !== undefined &&
                typeof this.editor.hasFocus === 'function' &&
                this.editor.hasFocus();
    }

    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private host: ElementRef,
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    /**
     * Hint text to display
     */
    @Input() placeholder: string|TemplateRef<any> = "";


    private _value: string = '';
    private initValue:string;

    /**
     * 	Initial value for the input
     */
    @Input()
    public get value(): string {
        return this._value;
    };
    public set value(value: string) {
        this._value = value;
    }

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

    private _toolbar: any[] = ['bold', 'italic', 'underline', 'strike'];

    @Input()
    public get toolbar(): any[] {
        return this._toolbar;
    }
    public set toolbar(value: any[]) {
        this._toolbar = value;
        this.initEditor();
    }

    /**
     * Initialize or Reinitialize the editor.
     */
    private initEditor(): void {
        if (this.editorEl !== undefined && this.editor === undefined) {
            console.dir(tinymce);

            tinymce.init({
                target: this.editorEl.nativeElement,
                plugins: ['link', 'paste', 'table'],
                skin_url: 'assets/skins/lightgray',
                setup: editor => {
                    this.editor = editor;
                    editor.on('keyup', () => {
                        const content = editor.getContent();
                        this.change.emit(content);
                    });
                },
            });
        }
    }
}
