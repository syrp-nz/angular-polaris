import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { BadgeComponent } from './badge/badge.component';

import { BannerComponent } from './banner/banner.component';

import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button/button.group.component';

import { CardComponent } from './card/card.component';
import { CardSectionComponent } from './card/card.section.component';
import { HeaderComponent } from './card/header.component';

import { IconComponent } from './icon/icon.component';

import { LabelComponent } from './label/label.component';
import { LabelledComponent } from './labelled/labelled.component';

import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { LayoutAnnotatedSectionComponent } from './layout/layout.annotated.section.component';
import { SectionComponent } from './layout/section.component';

import { ResourceListComponent } from './resource.list/resource.list.component';
import { ResourceListItemComponent } from './resource.list/resource.list.item.component';

import { SelectComponent } from './select/select.component';

import { StackComponent } from './stack/stack.component';
import { StackItemComponent } from './stack/stack.item.component';

import { TextFieldComponent } from './text.field/text.field.component';
import { SpinnerComponent } from './text.field/spinner.component';
import { ResizerComponent } from './text.field/resizer.component';

import { TemplateOrStringComponent } from './utilities/template.or.string.component';

import { ThumbnailComponent } from './thumbnail/thumbnail.component';

import { VisuallyHiddenComponent } from './visually.hidden/visually.hidden.component';

export * from './types';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        BannerComponent,
        BadgeComponent,
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
        ResourceListItemComponent,
        LabelComponent,
        LabelledComponent,
        TextFieldComponent,
        ResizerComponent,
        TemplateOrStringComponent,
        SelectComponent,
        ThumbnailComponent,
        LayoutAnnotatedSectionComponent,
        IconComponent,
        SpinnerComponent,
        VisuallyHiddenComponent
    ],
    exports: [
        BannerComponent,
        BadgeComponent,
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
        ResourceListItemComponent,
        LabelComponent,
        LabelledComponent,
        TextFieldComponent,
        ResizerComponent,
        TemplateOrStringComponent,
        SelectComponent,
        ThumbnailComponent,
        LayoutAnnotatedSectionComponent,
        IconComponent,
        SpinnerComponent,
        VisuallyHiddenComponent
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
