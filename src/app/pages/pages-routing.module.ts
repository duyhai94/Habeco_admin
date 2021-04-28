import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'maintenance',
                loadChildren: () =>
                    import('./maintenance/maintenance.module').then((m) => m.MaintenanceHomeModule),
            },
            {
                path: 'asset',
                loadChildren: () =>
                    import('./asset/asset.module').then((m) => m.AssetHomeModule),
            },
            {
                path: 'setting',
                loadChildren: () => import('./setting/setting.module').then((m)=> m.SettingModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
