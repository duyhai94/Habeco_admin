import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    model;

    constructor() { }
    ngOnInit(): void {

    }
}
@NgModule({
    declarations: [
        UserProfileComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        UserProfileComponent
    ]
})
export class UserProfileBaseModule { }