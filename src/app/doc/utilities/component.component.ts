import { Component, OnInit} from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';

export abstract class ComponentComponent {

    public component: PolarisComponent;
    protected abstract componentLink;

    constructor(protected service: DocService) {


    }

    ngOnInit() {
        this.component = this.service.getByLink(this.componentLink);
        console.dir(this);
        console.dir(this.componentLink);
        console.dir(this.component);
    }

    /**
     * Build an optional attribute for the Angular code preview
     * @param  {string} attr [description]
     * @return {string}      [description]
     */
    protected nullableAttr(attr: string): string {
        return this[attr] != "" ? `\n    [${attr}]="${this[attr]}"` : '';
    }

}
