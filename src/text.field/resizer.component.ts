import { Component, Input, Output, OnInit, OnChanges, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';


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

    @HostListener('window:resize', ['$event'])
    ngOnChanges() {
        setTimeout(() => {
            const updatedHeight = this.getHeight();
            if (updatedHeight != this.currentHeight) {
                this.currentHeight = updatedHeight;
                this.heightChange.emit(updatedHeight);
            }
        }, 0);
    }

    ngOnInit() {
        this.ngOnChanges();
    }

}
