import { Component } from '@angular/core';

@Component({
  templateUrl: 'not.found.component.html',
})
export class NotFoundComponent {
    breadcrumbs = [
        {
            content: "Home",
            routerLink: "/"
        }
    ];
    primaryAction = {
        content: "Raise issue",
        url: "https://github.com/syrp-nz/angular-polaris/issues/new"
    };
}
