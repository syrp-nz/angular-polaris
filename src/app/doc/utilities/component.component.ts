import { Component, OnInit} from '@angular/core';
import { DocService } from '../doc.service';
import { PolarisComponent } from '../doc.data';

export abstract class ComponentComponent {

    public component: PolarisComponent;
    protected abstract componentPath;

    constructor(protected service: DocService) {


    }

    ngOnInit() {
        this.component = this.service.getByPath(this.componentPath);
    }

    /**
     * Build an optional attribute for the Angular code preview
     * @param  {string} attr [description]
     * @return {string}      [description]
     */
    protected nullableAttr(attr: string): string {
        return this[attr] != "" ? this.indent(`${attr}="${this[attr]}"`) : '';
    }

    /**
     * Build an optional attribute for the Angular code preview
     * @param  {string} attr [description]
     * @return {string}      [description]
     */
    protected eventAttr(eventName: string): string {
        const eventUC = this.capitalizeFirstLetter(eventName);
        return this['log' + eventUC] ? this.indent(`(${eventName})="on${eventUC}($event)"`) : '';
    }

    private capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    protected indent(str: string, count:number = 1): string {
        let indented: string = "\n";
        while (count > 0) {
            indented += "    ";
            count--;
        }
        indented += str;
        return indented;
    }

    eventLog(event: any, name: string = ''):void {
        if (name) {
            console.log(`Event: ${name}`);
        }

        console.dir(event);
    }

    clearConsole = {content: 'Clear console', onAction: console.clear};

    jsonEncode(value) {
        return JSON.stringify(value);
    }
}
