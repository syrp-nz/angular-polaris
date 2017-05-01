import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button/button.group.component';

import { CardComponent } from './card/card.component';
import { CardSectionComponent } from './card/card.section.component';
import { HeaderComponent } from './card/header.component';

import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { SectionComponent } from './layout/section.component';

import { ResourceListComponent } from './resource.list/resource.list.component';
import { ResourceListItemComponent } from './resource.list/resource.list.item.component';

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
        HeaderComponent,
        ResourceListComponent,
        ResourceListItemComponent
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
        HeaderComponent,
        ResourceListComponent,
        ResourceListItemComponent
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
