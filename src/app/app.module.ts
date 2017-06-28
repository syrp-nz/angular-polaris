import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularPolarisModule } from './library'
import { DocModule } from './doc/doc.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not.found.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularPolarisModule,
        DocModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
