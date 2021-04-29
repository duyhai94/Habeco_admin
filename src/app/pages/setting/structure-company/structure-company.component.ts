import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SettingStrutureModel } from 'src/app/common/model/setting-structure.model';
import { MaintenanceService } from 'src/app/common/service/maintenance.service';
import { FormatDateService } from 'src/app/shared/services/format-date.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-structure-company',
  template: `<app-filter [listFilter]="listFilter"></app-filter>
            <br />
            <app-table  [(data)]="data" [(listlable)]="listlable" [(listActive)]="listActive"
                (callback)="handleCallbackSettingTable($event)"></app-table>`,
})
export class StructureCompanyComponent implements OnInit {
  listFilter;
  listlable;
  dataSub = [];
  listActive;
  value: string;
  data = [
    {
      serial : '129738322',
      lastest: '12/12/2020',
      expected: '3/30/2021',
      repairer: 'Trần Quang Minh'

    },
    {
      serial : '129738322',
      lastest: '12/12/2020',
      expected: '3/30/2021',
      repairer: 'Trần Quang Minh'

    },
    {
      serial : '129738322',
      lastest: '12/12/2020',
      expected: '3/30/2021',
      repairer: 'Trần Quang Minh'

    }
  ]
  constructor( 
    private maintenanceService: MaintenanceService,
    private loadService: LoaderService,
    private dateService: FormatDateService,) { }

  conFig = new SettingStrutureModel;
  filterSelected: any = [
    { value: 'Mới', Name: 'Mới' },
    { value: 'Đã xác nhận', Name: 'Đã xác nhận' },
    { value: 'Đang bảo dưỡng', Name: 'Đang bảo dưỡng' },
    { value: 'Đang chờ linh kiện', Name: 'Đang chờ linh kiện' },
    { value: 'Bảo dưỡng xong', Name: 'Bảo dưỡng xong' },
    { value: 'Bảo dưỡng thất bại', Name: 'Bảo dưỡng thất bại' }
]

  ngOnInit(): void {
        // this.onLoadData(true);
        this.listlable = this.conFig.collums;
        this.listFilter = this.conFig.filter;
        this.listActive = this.conFig.btnActice;
  }
  onLoadData(){
  }

handleCallbackSettingTable(ev){
  console.log(ev);
  
}

}
