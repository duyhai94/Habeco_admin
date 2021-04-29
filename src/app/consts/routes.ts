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
    path: '/pages/setting',
    name: 'Cài đặt',
    icon: 'assets/svg/setting.svg',
    subs: [
      { name: 'Cơ cấu công ty', path: '/pages/setting/structure' },
      { name: 'Nhóm người dùng', path: '/pages/setting/group' },
      { name: 'Phân quyền người dùng', path: '/pages/setting/permission' }
    ],
  },
];
