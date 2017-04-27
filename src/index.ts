import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SectionComponent } from './layout/section.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        SectionComponent,
    ],
    exports: [
        LayoutComponent,
        SectionComponent,
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
