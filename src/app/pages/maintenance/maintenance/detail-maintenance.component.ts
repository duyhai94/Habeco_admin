import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaintenanceModel } from 'src/app/common/model/maintenance.model';
import { MaintenanceService } from 'src/app/common/service/maintenance.service';
import { CreateBaseModule } from 'src/app/shared/layout/create/create.component';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
    selector: 'app-detail-maintenance',
    template: ` <app-create
                    [(data)]="listCreate"
                    [(option)]="option"
                    [(arrayButton)]="arrayButton"
                    (callback)="handleCallbackEvent($event)"
                    [dataModel]="data"
                ></app-create>`
})
export class DetailMaintenanceComponent implements OnInit {
    listCreate: any;
    conFig = new MaintenanceModel;
    option = {
        title: 'Cập nhật bảo dưỡng',
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
        private dialogRef: MatDialogRef<DetailMaintenanceComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) { }

    ngOnInit(): void {
        console.log(this.data);

        this.listCreate = this.conFig.create;
        console.log(this.listCreate);

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
        this.service.update(this.data.id, data).subscribe(res => {
            this.swal.success('Cập nhật bảo dưỡng thành công');
            this.dialogRef.close();
        })
    }
}
@NgModule({
    declarations: [
        DetailMaintenanceComponent,
    ],
    imports: [
        CommonModule,
        CreateBaseModule
    ]
})
export class DetailMaintenanceModule { }