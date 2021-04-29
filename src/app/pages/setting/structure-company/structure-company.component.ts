import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-company',
  templateUrl: './structure-company.component.html',
  styleUrls: ['./structure-company.component.scss']
})
export class StructureCompanyComponent implements OnInit {
  listFilter = [
    {
      type: 'selected',
      Text: 'Đơn vị xử lý',
      data: {}
    },
    {
      type: 'text',
      Text: 'ID',
      data: {}
    },
    {
      type: 'date',
      Text: 'Ngày tiếp nhận',
      data: {}
    },
    {
      type: 'date',
      Text: 'Ngày đến hạn',
      data: {}
    },
    {
      type: 'text',
      Text: 'Linh kiện',
      data: {}
    },
    {
      type: 'text',
      Text: 'Ngươi tạo',
      data: {}
    },
    {
      type: 'text',
      Text: 'Ngươi sửa',
      data: {}
    },
    {
      type: 'search',
    }
  ]

  listlable = [
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
      id: 'lastest'
    },
    {
      name: 'Ngày xong dự kiến',
      width: 300,
      type: 'date',
      id: 'expected'
    },
    {
      name: 'Người sửa',
      width: 300,
      type: 'text',
      id: 'repairer'
    },
    {
      name: '',
      width: 200,
      type: 'setting',
    }
  ]

  listActive = [
    {
      text: 'Thêm mới',
      class: 'btn-outline-success btn-add'
    }
  ]


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
  constructor() { }

  ngOnInit(): void {
  }

}
