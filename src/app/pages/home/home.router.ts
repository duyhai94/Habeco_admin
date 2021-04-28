import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const homeRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        // children: [
        //     {
        //         path: 'list',
        //         component: MaintenanceComponent
        //     },
        //     {
        //         path: '',
        //         redirectTo: 'list',
        //         pathMatch: 'full',
        //     },
        // ]
    }
];