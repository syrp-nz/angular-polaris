import { Injectable } from '@angular/core';

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

    public get components(): PolarisComponent[] {
        return this._components.filter((component: PolarisComponent) => {
            return this.filter == '' || component.name.match(this.filter);
        });
    }

    public filter: string = '';

}

export interface PolarisComponent {
    name: string,
    link: string,
    status: 'dev'|'beta'|'completed'|'not started'
}
