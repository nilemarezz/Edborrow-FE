import reducer from "./User";
import * as types from "../actions/UserAction";

describe("reducers/User", () => {
  describe("initial state", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: null,
        register: false,
      });
    });
  });

  describe("LOGIN_SUCCESS", () => {
    it("should return the state with info", () => {
      expect(reducer(undefined, { type: types.LOGIN_SUCCESS, payload: { userToken: "userToken", status: true, user: "user", admin: true } })).toEqual({
        userToken: "userToken",
        status: true,
        user: "user",
        admin: true,
        loading: null,
        register: false,
      });
    })
  })

  describe("LOGIN_FAIL", () => {
    it("should return the state with login fail", () => {
      expect(reducer(undefined, { type: types.LOGIN_FAIL, payload: false })).toEqual({
        userToken: null,
        status: false,
        user: null,
        admin: null,
        loading: null,
        register: false,
      });
    })
  })

  describe("LOGOUT_SUCCESS", () => {
    it("should return the state with logout success", () => {
      expect(reducer(undefined, { type: types.LOGOUT_SUCCESS })).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: null,
        register: false,
      });
    })
  })

  describe("LOGIN_LOADING", () => {
    it("should return the state with login loading", () => {
      expect(reducer(undefined, { type: types.LOGIN_LOADING, payload: true })).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: true,
        register: false,
      });
    })
  })

  describe("LOGIN_LOADING", () => {
    it("should return the state with login loading", () => {
      expect(reducer(undefined, { type: types.LOGIN_LOADING, payload: true })).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: true,
        register: false,
      });
    })
  })

  describe("REGISTER_SUCCESS", () => {
    it("should return the state with register success", () => {
      expect(reducer(undefined, { type: types.REGISTER_SUCCESS, payload: true })).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: null,
        register: true,
      });
    })
  })

  describe("REGISTER_FAIL", () => {
    it("should return the state with register fail", () => {
      expect(reducer(undefined, { type: types.REGISTER_FAIL, payload: false })).toEqual({
        userToken: null,
        status: null,
        user: null,
        admin: null,
        loading: null,
        register: false,
      });
    })
  })
});
