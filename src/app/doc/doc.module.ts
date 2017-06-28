import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularPolarisModule } from '../library';

import { DocComponent } from './doc.component';
import { DocService } from './doc.service';

const appRoutes: Routes = [
        { path: 'doc', component: DocComponent, children: [
    //   { path: 'overview', component: Overview },
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
        DocComponent
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
