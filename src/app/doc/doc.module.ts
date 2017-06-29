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

import { BadgeComponent } from './components/badge.component';
import { BannerComponent } from './components/banner.component';
import { CheckboxComponent } from './components/checkbox.component';
import { ChoiceComponent } from './components/choice.component';

const appRoutes: Routes = [
        { path: 'doc', component: DocComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: 'badge/badge.component', component: BadgeComponent },
            { path: 'banner/banner.component', component: BannerComponent },
            { path: 'checkbox/checkbox.component', component: CheckboxComponent },
            { path: 'choice/choice.component', component: ChoiceComponent },
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
        BannerComponent,
        ChoiceComponent,
        CheckboxComponent
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
