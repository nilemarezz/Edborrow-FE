import * as ApplicationListAdmin from "./ApplicationList.admin";

describe("Test Application List Creator", () => {
    describe("getApplicationList", () => {
        it("should create an action to get application list", () => {
          const expectedAction = {
            type: ApplicationListAdmin.ADMIN_GET_APPLICATION_LIST, 
            payload: []
          };
          expect(ApplicationListAdmin.getApplicationList([])).toEqual(expectedAction);
        });
      });
      describe("loadingApplicationList", () => {
        it("should create an action to loading application list", () => {
          const expectedAction = {
            type: ApplicationListAdmin.ADMIN_LOADING_APPLICATION_LIST, 
            payload: []
          };
          expect(ApplicationListAdmin.loadingApplicationList([])).toEqual(expectedAction);
        });
      });
      describe("changeApproveStatus", () => {
        it("should create an action to change approve status", () => {
          const expectedAction = {
            type: ApplicationListAdmin.ADMIN_CHANGE_APPROVE_STATUS, 
            payload: []
          };
          expect(ApplicationListAdmin.changeApproveStatus([])).toEqual(expectedAction);
        });
      });
      describe("changeBorrowingStatus", () => {
        it("should create an action to change borrowing status", () => {
          const expectedAction = {
            type: ApplicationListAdmin.ADMIN_CHANGE_BORROWING_STATUS, 
            payload: []
          };
          expect(ApplicationListAdmin.changeBorrowingStatus([])).toEqual(expectedAction);
        });
      });
});
