import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoute } from './home.router';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoute)
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
