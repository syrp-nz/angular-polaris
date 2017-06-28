import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class DocService {

    private _components: PolarisComponent[] = [
        {
            name: 'Badge',
            link: 'badge/badge.component',
            status: 'dev'
        },
        {
            name: 'Banner',
            link: 'banner/banner.component',
            status: 'dev'
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
        let matches: RegExpMatchArray = routeChange.url.match(/doc\/(.*?)\/?$/);
        if (matches) {
            this.select(matches[1]);
        } else {
            this.selected = undefined;
        }
    }


    public get components(): PolarisComponent[] {
        return this._components.filter((component: PolarisComponent) => {
            return this.filter == '' || component.name.match(this.filter);
        });
    }

    public filter: string = '';

    public selected: PolarisComponent = undefined;

    private select(componentLink: string) {
        if (componentLink == 'list') {
            this.selected = undefined;
        } else {
            this.selected = this._components.find((component: PolarisComponent) => {
                return component.link == componentLink;
            });
        }
    }
}

export interface PolarisComponent {
    name: string,
    link: string,
    status: 'dev'|'beta'|'completed'|'not started'
}
