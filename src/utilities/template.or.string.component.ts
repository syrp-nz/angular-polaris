import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsTempalteOrString',
    template: `<ng-container *ngIf="renderAsString() else value">{{ value }}</ng-container>`,
    styles: [
        ':host {display: block;}',
        ':host(.displayInline) {display: inline;}',
        ':host(.displayInlineBlock) {display: inline-block;}',
        ':host(.displayFlex) {display: flex;}',
        ':host(.displayNone) {display: none;}',
    ],
    host: {
        '[class.displayInline]': 'display == "inline"',
        '[class.displayInlineBlock]': 'display == "inline-block"',
        '[class.displayFlex]': 'display == "flex"',
        '[class.displayNone]': 'display == "none"',
    }
})
export class TemplateOrStringComponent implements OnInit {

    @Input() value: string|TemplateRef<any> = '';

    private _display: string = 'block';

    @Input() get display(): string {
        if (this.value) {
            return this._display;
        } else {
            return 'none';
        }
    }
    set display(value: string) {
        this._display = value;
    }

    ngOnInit() { }

    renderAsString(): boolean {
        return ! (this.value && typeof this.value == 'object')
    }


}
