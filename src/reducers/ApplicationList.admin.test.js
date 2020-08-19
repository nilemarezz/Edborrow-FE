import reducer from "./ApplicationList.admin";
import * as types from "../actions/ApplicationList.admin";
import {updateApproveStatus, updateBorrowingStatus} from "./ApplicationList.admin"

describe("reducers/Item", () => {
    describe("initial state", () => {
      it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            applicationList: [],
            loading: false
        });
      });
    });

    describe("updateApproveStatus", () => {
        it("should return the state with status that has been update", () => {
            const applicationList = [
                { itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatus: 4},
                { itemId: 2, requestId: 2, itemApprove: 4, itemBorrowingStatus: 4}
            ]
            const expectedList = [
                { itemId: 1, requestId: 2, itemApprove: 5, itemBorrowingStatus: 4},
                { itemId: 2, requestId: 2, itemApprove: 4, itemBorrowingStatus: 4}
            ]
            expect(updateApproveStatus({ itemId: 1, requestId: 2, value: 5 }, applicationList)).toEqual(expectedList)
        })

    })

    describe("updateBorrowingStatus", () => {
        it("should return the state with status that has been borrowing", () => {
            const applicationList = [
                { itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 4},
                { itemId: 2, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 4}
            ]
            const expectedList = [
                { itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 5},
                { itemId: 2, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 4}
            ]
            expect(updateBorrowingStatus({ itemId: 1, requestId: 2, value: 5 }, applicationList)).toEqual(expectedList)
        })

    })

    describe("ADMIN_GET_APPLICATION_LIST", () => {
        it("should return the state with admin get the application list", () => {
          expect(
            reducer(undefined, {
              type: types.ADMIN_GET_APPLICATION_LIST,
              payload: ["1", "2"],
            })
          ).toEqual({
            applicationList: ["1", "2"],
            loading: false
          });
        });
      });

      describe("ADMIN_LOADING_APPLICATION_LIST", () => {
        it("should return the state with admin loading the application list", () => {
          expect(
            reducer(undefined, {
              type: types.ADMIN_LOADING_APPLICATION_LIST,
              payload: true,
            })
          ).toEqual({
            applicationList: [],
            loading: true
          });
        });
      });

      describe("ADMIN_CHANGE_APPROVE_STATUS", () => {
        it("should return the state with admin change the approve status", () => {
          expect(
            reducer( {
              applicationList: [{ itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 4}],
              loading: false
            }, {
              type: types.ADMIN_CHANGE_APPROVE_STATUS,
              payload: { itemId : 1, requestId : 2, value : 5 },
            })
          ).toEqual({
            applicationList: [{ itemId: 1, requestId: 2, itemApprove: 5, itemBorrowingStatusId: 4}],
            loading: false
          });
        });
      });

      describe("ADMIN_CHANGE_BORROWING_STATUS", () => {
        it("should return the state with admin change the borrowing status", () => {
          expect(
            reducer({
              applicationList: [{ itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 4}],
              loading: false
            }, {
              type: types.ADMIN_CHANGE_BORROWING_STATUS,
              payload: { itemId : 1, requestId : 2, value : 5 },
            })
          ).toEqual({
            applicationList: [{ itemId: 1, requestId: 2, itemApprove: 4, itemBorrowingStatusId: 5}],
            loading: false
          });
        });
      });

})
