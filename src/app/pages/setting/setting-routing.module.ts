import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { StructureCompanyComponent } from './structure-company/structure-company.component';
import { GroupUserComponent } from './group-user/group-user.component';
import { PermissionUserComponent } from './permission-user/permission-user.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'structure',
        component: StructureCompanyComponent,
      },
      {
        path: 'group',
        component: GroupUserComponent,
      },
      {
        path: 'permission',
        component: PermissionUserComponent,
      },
      
    ],
  },
  {
    path: '',
    redirectTo: 'structure',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
