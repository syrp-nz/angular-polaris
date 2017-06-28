import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularPolarisModule } from '../library';

import { BadgeComponent } from './components/badge.component';
import { DocComponent } from './doc.component';
import { DocService } from './doc.service';

import { ListComponent } from './utilities/list.component';
import { CodeCardComponent } from './utilities/code.card.component';
import { MetaComponent } from './utilities/meta.component';

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
        MetaComponent,

        BadgeComponent,
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
