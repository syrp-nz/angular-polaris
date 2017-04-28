import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ButtonComponent } from './button/button.component';

import { CardComponent } from './card/card.component';
import { CardSectionComponent } from './card/card.section.component';

import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { SectionComponent } from './layout/section.component';

export * from './types';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        ButtonComponent,
        CardComponent,
        CardSectionComponent,
        LayoutComponent,
        SectionComponent,
        SectionedLayoutComponent,
    ],
    exports: [
        ButtonComponent,
        CardComponent,
        CardSectionComponent,
        LayoutComponent,
        SectionComponent,
        SectionedLayoutComponent,
    ]
})
export class AngularPolarisModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SampleModule,
  //     providers: [SampleService]
  //   };
  // }
}
