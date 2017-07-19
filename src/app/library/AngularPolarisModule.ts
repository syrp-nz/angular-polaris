import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BadgeComponent } from './badge/badge.component';
import { BannerComponent } from './banner/banner.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button/button.group.component';

import { CardComponent } from './card/card.component';

import { CardSectionComponent } from './card/card.section.component';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChoiceComponent } from './choice/choice.component';

import { HeaderComponent } from './card/header.component';

import { IconComponent } from './icon/icon.component';

import { LabelComponent } from './label/label.component';
import { LabelledComponent } from './labelled/labelled.component';

import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { LayoutAnnotatedSectionComponent } from './layout/layout.annotated.section.component';
import { SectionComponent } from './layout/section.component';

import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page/page.header.component';

import { PaginationComponent } from './pagination/pagination.component';

import { RadioButtonComponent } from './radio.button';

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

import { UnstyledLinkComponent } from './unstyled.link/unstyled.link.component';

import { WysiwygComponent } from './wysiwyg/wysiwyg.component';

export * from './types';

const components = [
    BadgeComponent,
    BannerComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CardSectionComponent,
    CheckboxComponent,
    ChoiceComponent,
    HeaderComponent,
    IconComponent,
    LabelComponent,
    LabelledComponent,
    LayoutAnnotatedSectionComponent,
    LayoutComponent,
    PageComponent,
    PageHeaderComponent,
    PaginationComponent,
    RadioButtonComponent,
    ResizerComponent,
    ResourceListComponent,
    ResourceListItemComponent,
    SectionComponent,
    SectionedLayoutComponent,
    SelectComponent,
    SpinnerComponent,
    StackComponent,
    StackItemComponent,
    TemplateOrStringComponent,
    TextFieldComponent,
    ThumbnailComponent,
    UnstyledLinkComponent,
    VisuallyHiddenComponent,
    WysiwygComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    declarations: components,
    exports: components
})
export class AngularPolarisModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: AngularPolarisModule,
    //         providers: []
    //     };
    // }
}
