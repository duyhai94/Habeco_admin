import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FilterBaseModule } from 'src/app/shared/layout/filter/filter.component';
import { HomeComponent } from './home.component';
import { homeRoute } from './home.router';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoute),
        FilterBaseModule,
        NgApexchartsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
