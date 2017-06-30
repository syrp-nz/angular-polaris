import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularPolarisModule } from '../library';


import { DocComponent } from './doc.component';
import { DocService } from './doc.service';
import { ListComponent } from './utilities/list.component';
import { CodeCardComponent } from './utilities/code.card.component';
import { MetaComponent } from './utilities/meta.component';

import * as C from './components';
import { docData } from './doc.data';

const appRoutes: Routes = [
        { path: 'doc', component: DocComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
        ]
    }
];
const declarations = [DocComponent, ListComponent, CodeCardComponent, MetaComponent];

for (let meta of docData ) {
   appRoutes[0].children.push({
       path: meta.path,
       component: C[meta.name + 'Component']
   });
   declarations.push(C[meta.name + 'Component']);
}


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(appRoutes),
        AngularPolarisModule
    ],
    declarations: declarations,
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
