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
            <app-table [listlable]="listlable" [data]="data" [listActive]="listActive"></app-table>`,
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
  onLoadData = (isLoading?) => {
    if (isLoading) {
        this.loadService.show();
    }
    this.maintenanceService.list().subscribe(res => {
        console.log('data', res);
        this.filterSelected.forEach(x => {
            x.length = res.filter(a => a.trang_thai === x.Name).length;
        });
        this.dataSub = res.map(x => {


            return {
                id: x.id,
                hang_hoa: x.hang_hoa,
                serial: x.serial,
                date_baoduong: x.date_baoduong,
                dateFilter_baoduong: this.dateService.formatDate(x.date_baoduong, 'MM-DD-YYYY'),
                date_dukien: x.date_dukien,
                dateFilter_dukien: this.dateService.formatDate(x.date_dukien, 'MM-DD-YYYY'),
                trang_thai: x.trang_thai,
                nguoi_sua: x.nguoi_sua,
                fullText: x.id + '-' + x.serial + '-' + x.hang_hoa
            }
        });
        this.dataSub.reverse();
        this.data = this.dataSub;
    }, () => { }, () => { this.loadService.hide(); })
}

}
