import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaintenanceReasonModule } from './maintenance-reason/maintenance-reason.component';
import { MaintenanceSiteModule } from './maintenance-site/maintenance-site.component';
import { MaintenanceHomeComponent } from './maintenance.component';
import { maintenanceRoutes } from './maintenance.router';
import { MaintenanceModule } from './maintenance/maintenance.component';

@NgModule({
    declarations: [MaintenanceHomeComponent],
    imports: [
        MaintenanceModule,
        MaintenanceReasonModule,
        MaintenanceSiteModule,
        RouterModule.forChild(maintenanceRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MaintenanceHomeModule { }
