import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button/button.group.component';

import { CardComponent } from './card/card.component';
import { CardSectionComponent } from './card/card.section.component';

import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { SectionComponent } from './layout/section.component';

import { StackComponent } from './stack/stack.component';
import { StackItemComponent } from './stack/stack.item.component';

export * from './types';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        CardSectionComponent,
        LayoutComponent,
        SectionComponent,
        SectionedLayoutComponent,
        StackComponent,
        StackItemComponent,
    ],
    exports: [
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        CardSectionComponent,
        LayoutComponent,
        SectionComponent,
        SectionedLayoutComponent,
        StackComponent,
        StackItemComponent,
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
