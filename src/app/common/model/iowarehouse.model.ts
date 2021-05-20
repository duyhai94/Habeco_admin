import { CollumsModel } from './base/collums.model';
import { CreateModel } from './base/create.model';
import { FilterModel } from './base/filter.model';

export class IoWarehouseModel {
  STT: number;
  Service: string;
  CSKH: string;
  Status: string;
  Tech: string;
  Date: string;
  public get collums(): Array<CollumsModel> {
    return [
      {
        name: 'Tên hàng hóa',
        width: 200,
        type: 'text',
        id: 'hang_hoa',
      },

      {
        name: 'Serial',
        width: 200,
        type: 'text',
        id: 'serial',
      },
      {
        name: 'Số lượng',
        width: 100,
        type: 'date',
        id: 'expected',
      },
      {
        name: 'Đơn vị xử lý',
        width: 300,
        type: 'text',
        id: 'repairer',
      },
      {
        name: 'Người tạo phiếu',
        width: 300,
        type: 'text',
        id: 'hang_hoa',
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
        type: 'text',
        class: 'col-6',
      },
      {
        id: 'nguoi_nhan',
        label: 'Người tạo phiếu',
        name: 'date_baoduong',
        type: 'text',
        class: 'col-6',
      },
      {
        id: 'num',
        label: 'Số lượng',
        name: 'date_baoduong',
        type: 'text',
        class: 'col-6',
      },
      {
        id: 'hang_hoa',
        label: 'Tên hàng hóa',
        name: 'date_baoduong',
        type: 'text',
        class: 'col-6',
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
        Text: 'Serial',
        data: [],
      },
      {
        type: 'text',
        Text: 'Người tạo phiếu',
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
