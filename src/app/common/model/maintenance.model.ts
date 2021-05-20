import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class MaintenanceModel {
    STT: number;
    Service: string;
    CSKH: string;
    Status: string;
    Tech: string;
    Date: string;
    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'serial',
                name: 'Serial',
                width: 200,
                type: 'text'
            },
            {
                id: 'date_baoduong',
                name: 'Ngày bảo dưỡng gần nhất',
                width: 200,
                type: 'date',
            },
            {
                id: 'date_dukien',
                name: 'Ngày xong dự kiến',
                width: 200,
                type: 'date',
            },
            {
                id: 'nguoi_sua',
                name: 'Người bảo dưỡng',
                width: 200,
                type: 'text',
            },
            {
                id: 'setting',
                name: '',
                width: 200,
                type: 'setting',
            },

        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'name',
                label: 'Đơn vị xử lý',
                name: 'name',
                type: 'selected',
                class: 'col-6'
            },
            {
                id: 'serial',
                label: 'Serial',
                name: 'serial',
                type: 'number',
                class: 'col-6'
            },
            {
                id: 'date_baoduong',
                label: 'Ngày gần nhất bảo dưỡng',
                name: 'date_baoduong',
                type: 'date',
                class: 'col-6'
            },
            {
                id: 'date_dukien',
                label: 'Ngày xong dự kiến',
                name: 'date_dukien',
                type: 'date',
                class: 'col-6'
            },
            {
                id: 'nguoi_nhan',
                label: 'Nhân viên tiếp nhận',
                name: 'nguoi_nhan',
                type: 'text',
                class: 'col-6'
            },
            {
                id: 'nguoi_sua',
                label: 'Nhân viên bảo dưỡng',
                name: 'nguoi_sua',
                type: 'text',
                class: 'col-6'
            },
            {
                id: 'trang_thai',
                label: 'Trạng thái',
                name: 'trang_thai',
                type: 'selected',
                class: 'col-6',
                data: []
            },
            {
                id: 'hang_hoa',
                label: 'Tên hàng hóa',
                name: 'hang_hoa',
                type: 'text',
                class: 'col-12'
            }
        ];
    }
    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Đơn vị xử lý',
                type: 'text',
                data: [],
                condition: 'id'
            },
            {
                Text: 'Serial',
                type: 'text',
                data: [],
                condition: 'serial'
            },
            {
                Text: 'Ngày tiếp nhận',
                type: 'date',
                data: [],
                condition: 'dateFilter_baoduong'
            },
            {
                Text: 'Ngày đến hạn',
                type: 'date',
                data: [],
                condition: 'dateFilter_dukien'
            },
            {
                Text: 'Linh kiện',
                type: 'text',
                data: [],
                condition: 'nguoi_sua'
            },
            {
                Text: 'Người tạo phiếu',
                type: 'text',
                data: [],
                condition: 'nguoi_sua'
            },
            {
                Text: 'Người bảo dưỡng',
                type: 'text',
                data: [],
                condition: 'nguoi_sua'
            },
            {
                Text: '',
                type: 'search',
                condition: 'fullText'
            }];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'mbf-btn-create',
                text: 'Thêm mới',
                type: 'create',
            },
            // {
            //     class: 'mbf-btn-active',
            //     text: 'Thao tác',
            //     type: 'active',
            // }
        ];
    }
}
