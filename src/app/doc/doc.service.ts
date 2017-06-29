import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class DocService {

    private _components: PolarisComponent[] = [
        {
            name: 'Badge',
            link: 'badge/badge.component',
            status: 'beta',
            docLink: 'images-and-icons/badge'
        },
        {
            name: 'Banner',
            link: 'banner/banner.component',
            status: 'beta'
        },
        {
            name: 'Breadcrumbs',
            link: 'breadcrumbs/breadcrumbs.component',
            status: 'dev'
        },
        {
            name: 'Page',
            link: 'page/page.component',
            status: 'dev'
        },
    ];

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
        return this._components.filter((component: PolarisComponent) => {
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

    private select(componentLink: string) {
        this.selected = this.getByLink(componentLink);
    }

    public getByLink(link: string): PolarisComponent {
        if (link == 'list') {
            return undefined;
        } else {
            return this._components.find((component: PolarisComponent) => {
                return component.link == link;
            });
        }
    }
}

export interface PolarisComponent {
    name: string,
    link: string,
    docLink?: string,
    status: 'dev'|'beta'|'completed'|'not started'
}
