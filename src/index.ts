import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, SectionedLayoutComponent } from './layout/layout.component';
import { SectionComponent } from './layout/section.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        SectionedLayoutComponent,
        SectionComponent,
    ],
    exports: [
        LayoutComponent,
        SectionComponent,
        SectionedLayoutComponent
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
