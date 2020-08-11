import reducer from "./ApplicationList";
import * as types from "../actions/ApplicationList";

describe("reducers/ApplicationList", () => {
  describe("initial state", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        applicationList: [],
        loading: false,
        applicationDetail: []
      });
    })
  })

  describe("GET_APPLICATION_LIST", () => {
    it("should return the application list", () => {
      expect(reducer(undefined, { type: types.GET_APPLICATION_LIST, payload: ["1", "2"] })).toEqual({
        applicationList: ["1", "2"],
        loading: false,
        applicationDetail: []
      });
    })
  })

  describe("GET_APPLICATION_DETAIL", () => {
    it("should return the application detail", () => {
      expect(reducer(undefined, { type: types.GET_APPLICATION_DETAIL, payload: { itemId: 1 } })).toEqual({
        applicationList: [],
        loading: false,
        applicationDetail: { itemId: 1 }
      });
    })
  })

  describe("LOADING_APPLICATION_LIST", () => {
    it("should return the loading with true", () => {
      expect(reducer(undefined, { type: types.LOADING_APPLICATION_LIST, payload: true })).toEqual({
        applicationList: [],
        loading: true,
        applicationDetail: []
      });
    })
  })
})