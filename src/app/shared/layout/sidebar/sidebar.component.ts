import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RoutesLink } from '../../../consts/routes';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    listRoute = RoutesLink;
    isActive: number;
}

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatListModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }