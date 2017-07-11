import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {

    public action = {content: 'Browse Documentation', routerLink: '/doc'};

}
