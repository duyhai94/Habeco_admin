import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { StructureCompanyComponent } from './structure-company/structure-company.component';
import { GroupUserComponent } from './group-user/group-user.component';
import { PermissionUserComponent } from './permission-user/permission-user.component';
import { FilterBaseModule } from 'src/app/shared/layout/filter/filter.component';
import { TableBaseModule } from 'src/app/shared/layout/table/table.component';



@NgModule({
  declarations: [SettingComponent, StructureCompanyComponent, GroupUserComponent, PermissionUserComponent, ],
  imports: [
    CommonModule,SettingRoutingModule,FilterBaseModule,TableBaseModule
  ]
})
export class SettingModule { }
