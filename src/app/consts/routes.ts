export enum Routes {
  LOGIN = '/login',
  HOME = '/pages/home',
  REPORT = '/pages/report',
  MAINTENANCE = '/pages/maintenance',
  SETTING = '/pages/setting',
  ACCESSORIES = '/pages/asset/accessories',
  GOODS = '/pages/asset/goods',
  DEVICE = '/pages/asset/device',
  SITE = '/pages/maintenance/site',
  REASON = '/pages/maintenance/reason'
}

export const RoutesLink = [
  {
    path: Routes.HOME,
    name: 'Trang chủ',
    icon: 'assets/svg/home-icon.svg',
    subs: [],
  },
  {
    name: 'Xuất nhập kho',
    icon: 'assets/svg/warehouse.png',
    subs: [
      { name: 'Nhập kho', path: Routes.ACCESSORIES },
      { name: 'Xuất kho', path: Routes.GOODS },
    ],
  },
  {
    name: 'Chiết nạp',
    icon: 'assets/svg/output.png',
    subs: [
    ],
  },
  {
    name: 'Bảo dưỡng',
    icon: 'assets/svg/global-settings.png',
    subs: [
      { name: 'Nhập bảo dưỡng', path: '' },
      { name: 'Chờ bảo dưỡng', path: '' },
      { name: 'Đang bảo dưỡng', path: '' },
      { name: 'Đang chờ linh kiện', path: '' },
      { name: 'Bảo dưỡng xong', path: '' },
      { name: 'Bảo dưỡng thất bại', path: '' }
    ],
  },
  {
    path: Routes.REPORT,
    name: 'Báo cáo',
    icon: 'assets/svg/report.png',
    subs: [],
  },
  {
    path: '',
    name: 'Cài đặt',
    icon: 'assets/svg/setting.svg',
    subs: [
      { name: 'Cơ cấu công ty', path: Routes.SETTING },
      { name: 'Nhóm người dùng', path: '' },
      { name: 'Phân quyền người dùng', path: '' }
    ],
  },
];
