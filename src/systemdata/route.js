export const route = {
  home: "/",
  user: {
    items: "/user/items",
    cart: "/user/cart",
    applicationList: '/user/applicationlist',
    itemDetail: '/user/itemdetail'
  },
  admin: {
    dashboard: "/admin/dashboard",
    applicationList: '/admin/applicationlist',
    items: '/admin/items',
    additem: '/admin/additem',
  },
  auth: {
    login: "/login",
    register: "/register"
  },
  detail: {
    itemDetail: "/detail/itemdetail",
    applicationDetail: "/detail/application"
  },
  adminDetail: {
    itemDetailAdmin: "/admin/detail/itemdetail"
  },
  systemadmin: {
    addItem: "/systemadmin/additem",
    addDepartment: "/systemadmin/adddepartment",
    items: "/systemadmin/items",
    departmentList: "/systemadmin/departmentlist"
  }
}