import * as User from "./UserAction";

describe("Test User Action Creators", () => {
  describe("GETALL_LOGIN_SUCCESS", () => {
    it("should create an action to login success", () => {
      const expectedAction = {
        type: User.LOGIN_SUCCESS,
        payload: {},
      };
      expect(User.userLoginSuccess({})).toEqual(expectedAction);
    });
  });
  describe("LOGIN_FAIL", () => {
    it("should create an action to login fail", () => {
      const expectedAction = {
        type: User.LOGIN_FAIL,
        payload: {},
      };
      expect(User.userLoginFail({})).toEqual(expectedAction);
    });
  });
  describe("LOGIN_LOADING", () => {
    it("should create an action to login fail", () => {
      const expectedAction = {
        type: User.LOGIN_LOADING,
        payload: false,
      };
      expect(User.loginLoading(false)).toEqual(expectedAction);
    });
  });
  describe("LOGIN_LOADING", () => {
    it("should create an action to loding login", () => {
      const expectedAction = {
        type: User.LOGIN_LOADING,
        payload: false,
      };
      expect(User.loginLoading(false)).toEqual(expectedAction);
    });
  });
  describe("LOGOUT_SUCCESS", () => {
    it("should create an action to logout success", () => {
      const expectedAction = {
        type: User.LOGOUT_SUCCESS,
      };
      expect(User.logoutSuccess()).toEqual(expectedAction);
    });
  });
  describe("REGISTER_SUCCESS", () => {
    it("should create an action to register success", () => {
      const expectedAction = {
        type: User.REGISTER_SUCCESS,
      };
      expect(User.registerSuccess()).toEqual(expectedAction);
    });
  });
  describe("REGISTER_FAIL", () => {
    it("should create an action to register fail", () => {
      const expectedAction = {
        type: User.REGISTER_FAIL,
      };
      expect(User.registerFail()).toEqual(expectedAction);
    });
  });
});
