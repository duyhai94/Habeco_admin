import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterBaseModule } from '../shared/layout/filter/filter.component';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.component';
import { UserProfileBaseModule } from '../shared/layout/user-profile/user-profile.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        PagesRoutingModule,
        FilterBaseModule,
        SidebarModule,
        UserProfileBaseModule
    ],
    providers: [],
    exports: [
        SidebarModule
    ]
})
export class PagesModule { }
