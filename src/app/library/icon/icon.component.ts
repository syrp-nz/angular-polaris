import { Component, Input, Output, OnInit, EventEmitter, ElementRef} from '@angular/core';
import { AngularComplexAction } from '../types';
import { SVGSource } from '@shopify/images';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsIcon',
    templateUrl: 'icon.component.html',
    host: {
        '[class.Polaris-Icon]': 'true',
        '[class.Polaris-Icon--hasBackdrop]': 'backdrop !== false',
    }
})
export class IconComponent implements OnInit {

    ngOnInit() { }

    @Input() public source: string;

    private _color: string = '';

    @Input()
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        if (this._color != '') {
            this.el.nativeElement.classList.remove('Polaris-Icon--color' + this.capitalizeFirstLetter(this._color))
        }

        this._color = value;
        if (this._color != '') {
            this.el.nativeElement.classList.add('Polaris-Icon--color' + this.capitalizeFirstLetter(this._color))
        }
    };

    private capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    @Input() public backdrop : boolean = false;
    @Input() public accessibilityLabel: string;

    constructor(private el: ElementRef) { }

}
