import { Component, Input, Output, OnInit, OnChanges, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
        '[class.Polaris-TextField__Resizer]': 'true',
        '[attr.aria-hidden]': '"true"'
    }
})
export class ResizerComponent implements OnInit, OnChanges {

    @ViewChild('contentNode') private contentNode: ElementRef;
    @ViewChild('minimumLinesNode') private minimumLinesNode: ElementRef;

    @Output() heightChange: EventEmitter<number> = new EventEmitter<number>();

    @Input() contents: string = '';

    /**
     * @todo Handle properly
     */
    private currentHeight: number = 0;

    /**
     * The minimal number of lines the content should have.
     */
    @Input() minimumLines: number = 1;

    /**
     * Dummy content for building the minimum line object
     */
    private get minimumLineContent(): string {
        return " \n".repeat(Math.max(1, this.minimumLines));
    }

    /**
     * Retrieve the height of the nodes.
     */
    private getHeight(): number {
        const contentHeight = this.contentNode.nativeElement.offsetHeight;
        const minHeight = this.minimumLinesNode.nativeElement.offsetHeight;
        return Math.max(contentHeight, minHeight);
    }

    ngOnChanges() {
        setTimeout(() => {
            const updatedHeight = this.getHeight();
            if (updatedHeight != this.currentHeight) {
                this.currentHeight = updatedHeight;
                this.heightChange.emit(updatedHeight);
            }
        }, 10);
    }

    ngOnInit() {
        this.ngOnChanges();
    }

}
