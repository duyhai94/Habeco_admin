import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaintenanceModel } from 'src/app/common/model/maintenance.model';
import { MaintenanceService } from 'src/app/common/service/maintenance.service';
import { FilterSelectedModule } from 'src/app/shared/layout/filter-selected/filter-selected.component';
import { FilterBaseModule } from 'src/app/shared/layout/filter/filter.component';
import { TableBaseModule } from 'src/app/shared/layout/table/table.component';
import { FormatDateService } from 'src/app/shared/services/format-date.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { CreateMaintenanceComponent } from './create-maintenance.component';
import { DetailMaintenanceComponent } from './detail-maintenance.component';

@Component({
    selector: 'app-list-maintenance',
    template: `<app-filter [(listFilter)]="listFilter" (callback)="handleCallback($event)">
            </app-filter>
              <br />
            <app-table [(data)]="dataSub" [(listlable)]="listlable" [(listActive)]="listActive"
                (callback)="handleCallbackSettingTable($event)">
            </app-table>`
})
export class MaintenanceComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private maintenanceService: MaintenanceService,
        private loadService: LoaderService,
        private dateService: FormatDateService,
        private router: Router
    ) { }
    conFig = new MaintenanceModel;
    listFilter;
    listlable;
    dataSub = [];
    listActive;
    data = [];
    value: string;

    filterSelected: any = [
        { value: 'Mới', Name: 'Mới' },
        { value: 'Đã xác nhận', Name: 'Đã xác nhận' },
        { value: 'Đang bảo dưỡng', Name: 'Đang bảo dưỡng' },
        { value: 'Đang chờ linh kiện', Name: 'Đang chờ linh kiện' },
        { value: 'Bảo dưỡng xong', Name: 'Bảo dưỡng xong' },
        { value: 'Bảo dưỡng thất bại', Name: 'Bảo dưỡng thất bại' }
    ]


    ngOnInit() {
        this.onLoadData(true);
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
                    date_baoduong: x.recentMaintenanceDate,
                    dateFilter_baoduong: this.dateService.formatDate(x.date_baoduong, 'MM-DD-YYYY'),
                    date_dukien: x.estimate,
                    dateFilter_dukien: this.dateService.formatDate(x.date_dukien, 'MM-DD-YYYY'),
                    trang_thai: x.trang_thai,
                    nguoi_sua: x.employee,
                    fullText: x.id + '-' + x.serial + '-' + x.hang_hoa
                }
            });
            this.dataSub.reverse();
            this.data = this.dataSub;
        }, () => { }, () => { this.loadService.hide(); })
    }

    handleCallback = (value?) => {
        const filter = this.listFilter.filter(x => x.value);
        if (this.value) {
            this.dataSub = this.data.filter(x => x.trang_thai === this.value);
            if (filter.length) {
                filter.forEach(x => {
                    if (x.type === 'text' || x.type === 'search') {
                        this.dataSub = this.dataSub.filter(
                            (a) => a[x.condition].toString().toLowerCase().indexOf(x.value.toLowerCase()) > -1);
                    } else {
                        this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
                    }
                });
            }
        }

        if (!this.value) {
            if (!filter.length) return this.dataSub = this.data;
            filter.forEach((x, ix) => {
                if (ix === 0) {
                    if (x.type === 'text' || x.type === 'search') {
                        this.dataSub = this.data.filter(
                            (a) => a[x.condition].toString().toLowerCase().indexOf(x.value.toLowerCase()) > -1);
                    } else {
                        this.dataSub = this.data.filter((a) => a[x.condition] == x.value);
                    }
                } else {
                    if (x.type === 'text' || x.type === 'search') {
                        this.dataSub = this.dataSub.filter(
                            (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
                    } else {
                        this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
                    }
                }

            });
        }
    }

    handleCallbackfilterSelected = (value) => {
        this.value = value.value;
        this.handleCallback();
    }

    handleCallbackSettingTable = (value) => {
        switch (value.type) {
            case 'create':
                return this.dialog.open(CreateMaintenanceComponent, {
                    width: '863px',
                    height: '563px',
                    data: value.item
                }).afterClosed().subscribe(result => {
                    this.onLoadData();
                });
                break;
            case 'delete':
                this.maintenanceService.delete(value.item.id).subscribe(res => {
                    this.dataSub = this.dataSub.filter(x => x.id != value.item.id);
                })
                break;
            case 'edit':
                return this.dialog.open(DetailMaintenanceComponent, {
                    width: '863px',
                    height: '563px',
                    data: value.item
                }).afterClosed().subscribe(result => {
                    this.onLoadData();
                });
                break;
            case 'route':
                this.router.navigateByUrl(`pages/maintenance/${value.item.id}`)
                break;
            default:
                break;
        }
    }
}

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports: [
        CommonModule,
        TableBaseModule,
        FilterBaseModule,
        MatDialogModule,
        FilterSelectedModule
    ],
    exports: [MaintenanceComponent]
})
export class MaintenanceModule { }