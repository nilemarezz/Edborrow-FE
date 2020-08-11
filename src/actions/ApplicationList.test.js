import * as ApplicationList from "./ApplicationList";

describe("Test Application List Creator", () => {
    describe("getApplicationList", () => {
        it("should create an action to get application list", () => {
          const expectedAction = {
            type: ApplicationList.GET_APPLICATION_LIST, 
            payload: []
          };
          expect(ApplicationList.getApplicationList([])).toEqual(expectedAction);
        });
      });
      describe("getApplicationDetail", () => {
        it("should create an action to get application detail", () => {
          const expectedAction = {
            type: ApplicationList.GET_APPLICATION_DETAIL, 
            payload: []
          };
          expect(ApplicationList.getApplicationDetail([])).toEqual(expectedAction);
        });
      });
      describe("loadingApplicationList", () => {
        it("should create an action to loading application list", () => {
          const expectedAction = {
            type: ApplicationList.LOADING_APPLICATION_LIST, 
            payload: []
          };
          expect(ApplicationList.loadingApplicationList([])).toEqual(expectedAction);
        });
      });
});
