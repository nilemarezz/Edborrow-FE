import reducer from "./Item";
import * as types from "../actions/ItemAction";

describe("reducers/Item", () => {
  describe("initial state", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: [],
      });
    });
  });

  describe("GETALL_ITEM_SUCCESS", () => {
    it("should return the state with all items", () => {
      expect(reducer(undefined, { type: types.GETALL_ITEM_SUCCESS, payload: ["Computer", "Laptop"] })).toEqual({
        Items: ["Computer", "Laptop"],
        Cart: [],
        loading: null,
        filter: [],
      });
    })
  })

  describe("GETALL_ITEM_FAIL", () => {
    it("should return the state with no items", () => {
      expect(reducer(undefined, { type: types.GETALL_ITEM_FAIL })).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: [],
      });
    })
  })

  describe("ITEM_LOADING", () => {
    it("should return the state with loading items", () => {
      expect(reducer(undefined, { type: types.ITEM_LOADING, payload: true })).toEqual({
        Items: [],
        Cart: [],
        loading: true,
        filter: [],
      });
    })
  })

  describe("CLEAR_ITEM_INCART", () => {
    it("should return the state with no item in cart", () => {
      expect(reducer(undefined, { type: types.CLEAR_ITEM_INCART})).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: [],
      });
    })
  })

  describe("DELETE_ITEM_INCART", () => {
    describe("if there are 2 items in cart and delete one item", () => {
    it("it should return the state with one item in cart", () => {
      expect(reducer({Items: [], Cart: [{itemId: 1}, {itemId: 2}], loading: null, filter: []}, { type: types.DELETE_ITEM_INCART, payload: 1 })).toEqual({
        Items: [],
        Cart: [{itemId: 2}],
        loading: null,
        filter: [],
      });
    })
  })

  describe("DELETE_ITEM_INCART", () => {
      describe("if there is only one item in cart and delete that item", () => {
        it("it should return the state with no item in array", () => {
      expect(reducer({Items: [], Cart: [{itemId: 2}], loading: null, filter: []}, { type: types.DELETE_ITEM_INCART, payload: 2 })).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: [],
      });
    })
    })
  })

  describe("DELETE_ITEM_INCART", () => {
    describe("if there are no item in cart and delete item", () => {
      it("it should return the state with no item in array", () => {
    expect(reducer({Items: [], Cart: [], loading: null, filter: []}, { type: types.DELETE_ITEM_INCART, payload: 2 })).toEqual({
      Items: [],
      Cart: [],
      loading: null,
      filter: [],
    });
  })
  })
})

describe("DELETE_ITEM_INCART", () => {
    describe("if there is one item in cart and delete iwrong itemId", () => {
      it("it should return the state with that item in array", () => {
    expect(reducer({Items: [], Cart: [{ itemId: 1 }], loading: null, filter: []}, { type: types.DELETE_ITEM_INCART, payload: 2 })).toEqual({
      Items: [],
      Cart: [{itemId: 1}],
      loading: null,
      filter: [],
    });
  })
  })
})

  describe("ADD_ITEM_TO_CART", () => {
    it("should return the state with items in cart", () => {
      expect(reducer(undefined, { type: types.ADD_ITEM_TO_CART, payload: ["aaa", "bbb"]})).toEqual({
        Items: [],
        Cart: ["aaa", "bbb"],
        loading: null,
        filter: [],
      });
    })
  })

  describe("SEARCH_ITEM_SUCCESS", () => {
    it("should return the state with items in filter", () => {
      expect(reducer(undefined, { type: types.SEARCH_ITEM_SUCCESS, payload: ["aaa", "bbb"]})).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: ["aaa", "bbb"],
      });
    })
  })

  describe("CLEAR_FILTER", () => {
    it("should return the state with no items in filter", () => {
      expect(reducer(undefined, { type: types.CLEAR_FILTER })).toEqual({
        Items: [],
        Cart: [],
        loading: null,
        filter: [],
      });
    })
  })
});
})
