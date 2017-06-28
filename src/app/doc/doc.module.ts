import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularPolarisModule } from '../library';

import { BadgeComponent } from './badge.component';
import { DocComponent } from './doc.component';
import { ListComponent } from './list.component';
import { DocService } from './doc.service';
import { CodeCardComponent } from './code.card.component';

const appRoutes: Routes = [
        { path: 'doc', component: DocComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: 'badge/badge.component', component: BadgeComponent },
    //   { path: 'specs', component: Specs }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(appRoutes),
        AngularPolarisModule
    ],
    declarations: [
        DocComponent,
        ListComponent,
        CodeCardComponent,
        BadgeComponent
    ],
    exports: [ ],
    providers: [
        DocService
    ],
})
export class DocModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SampleModule,
  //     providers: [SampleService]
  //   };
  // }
}
