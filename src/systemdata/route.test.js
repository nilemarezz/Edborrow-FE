import { route } from './route'
describe("get instruction correct", () => {
  it("should return the set of instruction", () => {
    const expectedroute = {
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
        additem: '/admin/additem'

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
        departmentList: "/systemadmin/departmentlist",
        syetemLog: "/systemadmin/systemlog",
        systemos: "/systemadmin/osdata"
      }
    }
    expect(route).toEqual(expectedroute);
  });
});
