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
    name: 'Quản lý tài sản',
    icon: 'assets/svg/house.svg',
    subs: [
      { name: 'Danh sách linh kiện', path: Routes.ACCESSORIES },
      { name: 'Danh sách hàng hóa', path: Routes.GOODS },
      { name: 'Danh sách thiết bị', path: Routes.DEVICE }
    ],
  },
  {
    name: 'Bảo dưỡng',
    icon: 'assets/svg/global-settings.svg',
    subs: [
      { name: 'Nhập bảo dưỡng', path: Routes.MAINTENANCE },
      { name: 'Chờ bảo dưỡng', path: Routes.SITE },
      { name: 'Đang bảo duõng', path: Routes.REASON },
      { name: 'Đang chờ linh kiện', path: Routes.REASON },
      { name: 'Bảo dưỡng xong', path: Routes.REASON },
      { name: 'Bảo dưỡng thất bại', path: Routes.REASON }
    ],
  },
  {
    name: 'Kho hàng',
    icon: 'assets/svg/warehouse.svg',
    subs: [
      { name: 'Quản lý xuất nhập kho', path: '' },
      { name: 'Xuất nhập kho linh kiện', path: '' },
      { name: 'Xuất nhập kho hàng hóa', path: '' },
      { name: 'Xuất nhập kho thiết bị', path: '' },
      { name: 'Lịch sử xuất nhập kho', path: '' }
    ],
  },
  {
    path: Routes.REPORT,
    name: 'Báo cáo',
    icon: 'assets/svg/report.svg',
    subs: [],
  },
  {
    path: Routes.SETTING,
    name: 'Cài đặt',
    icon: 'assets/svg/setting.svg',
    subs: [
      { name: 'Cơ cấu công ty', path: '' },
      { name: 'Nhóm người dùng', path: '' },
      { name: 'Phân quyền người dùng', path: '' }
    ],
  },
];
