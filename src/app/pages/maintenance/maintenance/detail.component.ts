import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { CardDetailModule } from 'src/app/shared/layout/card-detail/card-detail.component';

@Component({
    selector: 'app-detail-MaintenancePage',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailMaintenancePageComponent implements OnInit {
    detailGoods = {
        title: 'Hàng hoá',
        type: 'card',
        data: [
            { name: 'Tên hàng hoá', value: 'Vỏ keg', class: 'col-6' },
            { name: 'Serial', value: '165106546844', class: 'col-6' }
        ]
    }
    detailComponentsUsed = {
        title: 'Linh kiện sử dụng',
        type: 'card',
        data: [
            { name: 'Linh kiện', value: 'Vỏ keg', class: 'col-6' },
            { name: 'Số lượng ', value: '3', class: 'col-6' }
        ]
    }
    detailInfo = {
        title: 'Thông tin',
        type: 'card',
        data: [
            { name: 'Đơn vị xử lý', value: 'Phân xưởng 1', class: 'col-12' },
            { name: 'Người tạo', value: 'Nguyễn Văn A', class: 'col-12' },
            { name: 'Thời gian tạo', value: '23:59:59, 15/04/2021', class: 'col-12' }
        ]
    }
    detailHistory = {
        title: 'Lịch sử thao tác',
        type: 'table',
        data: [
            {
                date: "15/04/2021",
                nhan_vien: "Nguyễn Văn A",
                type: "date",
                noi_dung: 'Đã xác nhận -> Đang bảo dưỡng',
                hanh_dong: 'Đổi trạng thái'
            },
            {
                date: "18/04/2021",
                nhan_vien: "Nguyễn Văn B",
                type: "text",
                noi_dung: 'Đang bảo dưỡng -> Đang chờ linh kiện',
                hanh_dong: 'Đổi trạng thái'
            }
        ],
        listTh: [
            { id: "date", name: "Thời gian", type: "date" },
            { id: "nhan_vien", name: "Nhân viên", type: "text" },
            { id: "hanh_dong", name: "Hành động", type: "text" },
            { id: "noi_dung", name: "Nội dung ", type: "text" }
        ]
    }

    MaintenanceHistory = {
        title: 'Lịch sử bảo dưỡng',
        type: 'table',
        data: [
            {
                date: "15/04/2021",
                nhan_vien: "Nguyễn Văn A",
                type: "date"
            },
            {
                date: "18/04/2021",
                nhan_vien: "Nguyễn Văn B",
                type: "text",
            }
        ],
        listTh: [
            { id: "date", name: "Thời gian", type: "date" },
            { id: "nhan_vien", name: "Nhân viên", type: "text" }
        ]
    }
    constructor() { }

    ngOnInit(): void {
    }

}
@NgModule({
    declarations: [
        DetailMaintenancePageComponent,
    ],
    imports: [
        CommonModule,
        CardDetailModule
    ]
})
export class DetailMaintenancePageModule { }