export enum Routes {
  LOGIN = '/login',
  HOME = 'home',
  REPORT = 'report',
  MAINTENANCE = 'maintenance',
  SETTING = 'setting',
  ACCESSORIES = 'asset',
  GOODS = 'asset/goods',
  DEVICE = 'asset/device',
  SITE = 'maintenance/site',
  REASON = 'maintenance/reason'
}

export const RoutesLink = [
  {
    path: Routes.HOME,
    name: 'Trang chủ',
    icon: 'assets/svg/home-icon.svg',
    subs: [],
  },
  {
    path: Routes.ACCESSORIES,
    name: 'Xuất nhập kho',
    icon: 'assets/svg/warehouse.png',
    subs: [
      { name: 'Nhập kho', path: Routes.ACCESSORIES },
      { name: 'Xuất kho', path: Routes.GOODS },
    ],
  },
  {
    path:'chietnap',
    name: 'Chiết nạp',
    icon: 'assets/svg/output.png',
    subs: [

    ],
  },
  {
    path: Routes.MAINTENANCE,
    name: 'Bảo dưỡng',
    icon: 'assets/svg/global-settings.png',
    subs: [
      { name: 'Nhập bảo dưỡng', path: Routes.MAINTENANCE },
      { name: 'Chờ bảo dưỡng', path: Routes.MAINTENANCE },
      { name: 'Đang bảo duõng', path: Routes.MAINTENANCE },
      { name: 'Đang chờ linh kiện', path: Routes.MAINTENANCE },
      { name: 'Bảo dưỡng xong', path: Routes.MAINTENANCE },
      { name: 'Bảo dưỡng thất bại', path: Routes.MAINTENANCE }
    ],
  },
  {
    path: Routes.REPORT,
    name: 'Báo cáo',
    icon: 'assets/svg/report.png',
    subs: [],
  },
  {
    path: 'setting/struture',
    name: 'Cài đặt',
    icon: 'assets/svg/setting.svg',
    subs: [
      { name: 'Cơ cấu công ty', path: 'setting/structure' },
      { name: 'Nhóm người dùng', path: 'setting/group' },
      { name: 'Phân quyền người dùng', path: 'setting/permission' }
    ],
  },
];
