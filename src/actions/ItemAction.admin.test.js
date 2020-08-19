import * as Items from "./ItemAction.admin";

describe("Test Item Action Admin", () => {
    describe("GET_ITEM_ADMIN", () => {
        it("should create an action for admin to get an item", () => {
            const expectedAction = {
              type: Items.GET_ITEM_ADMIN,
              payload: [],
            };
            expect(Items.getAllItems([])).toEqual(expectedAction);
          });
    })

    describe("ITEM_LOADING_ADMIN", () => {
        it("should create an action for admin to loading an item", () => {
            const expectedAction = {
              type: Items.ITEM_LOADING_ADMIN,
              payload: [],
            };
            expect(Items.itemLoading([])).toEqual(expectedAction);
          });
    })

    describe("GET_ITEM_DETAIL_ADMIN", () => {
        it("should create an action for admin to get an item detail", () => {
            const expectedAction = {
              type: Items.GET_ITEM_DETAIL_ADMIN,
              payload: [],
            };
            expect(Items.getItemDetail([])).toEqual(expectedAction);
          });
    })

})