import * as Items from "./ItemAction";

describe("Test Item Action Creators", () => {
  describe("GETALL_ITEM_SUCCESS", () => {
    it("should create an action to get All Item success", () => {
      const expectedAction = {
        type: Items.GETALL_ITEM_SUCCESS,
        payload: [],
      };
      expect(Items.getAllItemSuccess([])).toEqual(expectedAction);
    });
  });
  describe("GETALL_ITEM_FAIL", () => {
    it("should create an action to get All Item fail", () => {
      const expectedAction = {
        type: Items.GETALL_ITEM_FAIL,
      };
      expect(Items.getAllItemFail()).toEqual(expectedAction);
    });
  });
  describe("ITEM_LOADING", () => {
    it("should create an action to load the item", () => {
      const expectedAction = {
        type: Items.ITEM_LOADING,
        payload: false,
      };
      expect(Items.itemLoading(false)).toEqual(expectedAction);
    });
  });
  describe("CLEAR_ITEM_INCART", () => {
    it("should create an action to load the item", () => {
      const expectedAction = {
        type: Items.CLEAR_ITEM_INCART,
      };
      expect(Items.clearItemInCart()).toEqual(expectedAction);
    });
  });
});
