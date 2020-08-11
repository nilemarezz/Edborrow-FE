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
  describe("DELETE_ITEM_INCART", () => {
    it("should dcreate action delete item in cart", () => {
      const expectedAction = {
        type: Items.DELETE_ITEM_INCART,
      };
      expect(Items.deleteItemInCart()).toEqual(expectedAction);
    });
  });
  describe("ADD_ITEM_TO_CART", () => {
    it("should create action add item to cart", () => {
      const expectedAction = {
        type: Items.ADD_ITEM_TO_CART,
      };
      expect(Items.addItemToCart()).toEqual(expectedAction);
    });
  });
  describe("SEARCH_ITEM_SUCCESS", () => {
    it("should create action search item in cart", () => {
      const expectedAction = {
        type: Items.SEARCH_ITEM_SUCCESS,
      };
      expect(Items.searchItem()).toEqual(expectedAction);
    });
  });
  describe("clearFilter", () => {
    it("should create action clear item in cart", () => {
      const expectedAction = {
        type: Items.CLEAR_FILTER,
      };
      expect(Items.clearFilter()).toEqual(expectedAction);
    });
  });
  describe("clearCart", () => {
    it("should create action clear item in cart", () => {
      const expectedAction = {
        type: Items.CLEAR_CART,
      };
      expect(Items.clearCart()).toEqual(expectedAction);
    });
  });
});
