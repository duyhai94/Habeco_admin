import { Routes } from "@angular/router";
import { MaintenanceReasonComponent } from "./maintenance-reason/maintenance-reason.component";
import { MaintenanceSiteComponent } from "./maintenance-site/maintenance-site.component";
import { MaintenanceHomeComponent } from "./maintenance.component";
import { DetailMaintenancePageComponent } from "./maintenance/detail.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

export const maintenanceRoutes: Routes = [
    {
        path: '',
        component: MaintenanceHomeComponent,
        children: [
            {
                path: 'list',
                component: MaintenanceComponent
            },
            {
                path: 'reason',
                component: MaintenanceReasonComponent
            },
            {
                path: 'site',
                component: MaintenanceSiteComponent
            },
            {
                path: ':id',
                component: DetailMaintenancePageComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
        ]
    }
];