import { CollumsModel } from './base/collums.model';
import { CreateModel } from './base/create.model';
import { FilterModel } from './base/filter.model';

export class SettingStrutureModel {
  STT: number;
  Service: string;
  CSKH: string;
  Status: string;
  Tech: string;
  Date: string;
  public get collums(): Array<CollumsModel> {
    return [
      {
        name: 'Serial',
        width: 200,
        type: 'text',
        id: 'serial',
      },
      {
        name: 'Ngày bảo dưỡng gần nhất',
        width: 300,
        type: 'date',
        id: 'lastest',
      },
      {
        name: 'Ngày xong dự kiến',
        width: 300,
        type: 'date',
        id: 'expected',
      },
      {
        name: 'Người sửa',
        width: 300,
        type: 'text',
        id: 'repairer',
      },
      {
        name: '',
        width: 200,
        type: 'setting',
        id: '',
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
        class: 'col-6',
      },
      {
        id: 'serial',
        label: 'Serial',
        name: 'serial',
        type: 'number',
        class: 'col-6',
      },
      {
        id: 'date_baoduong',
        label: 'Ngày gần nhất bảo dưỡng',
        name: 'date_baoduong',
        type: 'date',
        class: 'col-6',
      },
      {
        id: 'date_dukien',
        label: 'Ngày xong dự kiến',
        name: 'date_dukien',
        type: 'date',
        class: 'col-6',
      },
      {
        id: 'nguoi_nhan',
        label: 'Nhân viên tiếp nhận',
        name: 'nguoi_nhan',
        type: 'text',
        class: 'col-6',
      },
      {
        id: 'nguoi_sua',
        label: 'Nhân viên bảo dưỡng',
        name: 'nguoi_sua',
        type: 'text',
        class: 'col-6',
      },
      {
        id: 'trang_thai',
        label: 'Trạng thái',
        name: 'trang_thai',
        type: 'selected',
        class: 'col-6',
        data: [],
      },
      {
        id: 'hang_hoa',
        label: 'Tên hàng hóa',
        name: 'hang_hoa',
        type: 'text',
        class: 'col-12',
      },
    ];
  }
  public get filter(): Array<FilterModel> {
    return [
      {
        type: 'selected',
        Text: 'Đơn vị xử lý',
        data: [],
      },
      {
        type: 'text',
        Text: 'ID',
        data: [],
      },
      {
        type: 'date',
        Text: 'Ngày tiếp nhận',
        data: [],
      },
      {
        type: 'date',
        Text: 'Ngày đến hạn',
        data: [],
      },
      {
        type: 'text',
        Text: 'Linh kiện',
        data: [],
      },
      {
        type: 'text',
        Text: 'Ngươi tạo',
        data: [],
      },
      {
        type: 'text',
        Text: 'Ngươi sửa',
        data: [],
      },
      {
        type: 'search',
        Text: '',
        data: [],
      },
    ];
  }
  public get btnActice(): Array<any> {
    return [
      {
        text: 'Thêm mới',
        class: 'btn-outline-success btn-add',
        type: 'create',
      },
    ];
  }
}
