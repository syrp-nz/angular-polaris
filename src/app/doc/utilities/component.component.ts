import { Component, OnInit} from '@angular/core';
import { DocService, PolarisComponent } from '../doc.service';

export abstract class ComponentComponent {

    public component: PolarisComponent;
    protected abstract componentLink;

    constructor(protected service: DocService) {


    }

    ngOnInit() {
        this.component = this.service.getByLink(this.componentLink);
    }

    /**
     * Build an optional attribute for the Angular code preview
     * @param  {string} attr [description]
     * @return {string}      [description]
     */
    protected nullableAttr(attr: string): string {
        return this[attr] != "" ? `\n    [${attr}]="${this[attr]}"` : '';
    }

    /**
     * Build an optional attribute for the Angular code preview
     * @param  {string} attr [description]
     * @return {string}      [description]
     */
    protected eventAttr(eventName: string): string {
        const eventUC = this.capitalizeFirstLetter(eventName);
        return this['log' + eventUC] ? `\n    (${eventName})="on${eventUC}($event)"` : '';
    }

    private capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    eventLog(event: any, name: string = ''):void {
        if (name) {
            console.log(`Event: ${name}`);
        }

        console.dir(event);
    }

    clearConsole = {content: 'Clear console', onAction: console.clear};

}
