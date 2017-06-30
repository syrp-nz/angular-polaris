import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {docData, PolarisComponent} from './doc.data'

@Injectable()
export class DocService {

    constructor(private router: Router) {
        this.router.events.subscribe(this.selectComponent);
    }

    private selectComponent = (routeChange: NavigationEnd) => {
        let matches: RegExpMatchArray = routeChange.url.match(/doc\/(.*?)\/?$/i);
        if (matches) {
            this.select(matches[1]);
        } else {
            this.selected = undefined;
        }
    }


    public get components(): PolarisComponent[] {
        return docData.filter((component: PolarisComponent) => {
            return this.filter == '' || component.name.match(new RegExp(this.filter, 'i'));
        });
    }

    public filter: string = '';

    public selected: PolarisComponent = undefined;

    public get previous(): PolarisComponent {
        const components = this.components;
        for (let i = 0 ; i < components.length; i++) {
            if (components[i] === this.selected) {
                return components[i-1];
            }
        }
        return undefined;
    }

    public get next(): PolarisComponent {
        const components = this.components;
        for (let i = 0 ; i < components.length; i++) {
            if (components[i] === this.selected) {
                return components[i+1];
            }
        }
        return undefined;
    }

    private select(componentPath: string) {
        this.selected = this.getByPath(componentPath);
    }

    public getByPath(path: string): PolarisComponent {
        if (path == 'list') {
            return undefined;
        } else {
            return docData.find((component: PolarisComponent) => {
                return component.path == path;
            });
        }
    }
}
