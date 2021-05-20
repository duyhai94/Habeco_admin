import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IoWarehouseModel } from 'src/app/common/model/iowarehouse.model';
import { MaintenanceModel } from 'src/app/common/model/maintenance.model';
import { MaintenanceService } from 'src/app/common/service/maintenance.service';
import { CreateBaseModule } from 'src/app/shared/layout/create/create.component';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
    selector: 'app-create-maintenance',
    template: ` <app-create
                    [(data)]="listCreate"
                    [(option)]="option"
                    [(arrayButton)]="arrayButton"
                    (callback)="handleCallbackEvent($event)"
                    [dataModel]="dataModel"
                ></app-create>`
})
export class CreateGoodComponent implements OnInit {
    listCreate: any;
    conFig = new IoWarehouseModel;
    dataModel = {};
    option = {
        title: 'Thêm mới hàng hóa xuất',
        type: 'create'
    };

    arrayButton = [{
        class: 'mbf-btn-cancel',
        text: 'Hủy bỏ',
        type: 'cancel'
    },
    {
        class: 'mbf-btn-save',
        text: 'Lưu',
        type: 'save'
    }]

    constructor(
        private service: MaintenanceService,
        private swal: SwalService,
        public dialogRef: MatDialogRef<CreateGoodComponent>,
    ) { }

    ngOnInit(): void {
        this.listCreate = this.conFig.create;
        this.listCreate[6].data = [
            { value: 'Mới', Name: 'Mới' },
            { value: 'Đã xác nhận', Name: 'Đã xác nhận' },
            { value: 'Đang bảo dưỡng', Name: 'Đang bảo dưỡng' },
            { value: 'Đang chờ linh kiện', Name: 'Đang chờ linh kiện' },
            { value: 'Bảo dưỡng xong', Name: 'Bảo dưỡng xong' },
            { value: 'Bảo dưỡng thất bại', Name: 'Bảo dưỡng thất bại' }
        ]
    }

    handleCallbackEvent = (data) => {
        this.service.create(data).subscribe(res => {
            this.swal.success('Thêm mới bảo dưỡng thành công');
            this.dialogRef.close();
        })
    }
}
@NgModule({
    declarations: [
        CreateGoodComponent,
    ],
    imports: [
        CommonModule,
        CreateBaseModule
    ]
})
export class CreateGoodModule { }