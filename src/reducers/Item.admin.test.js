import reducer from "./Item.admin";
import * as types from "../actions/ItemAction.admin";

describe("reducers/Item", () => {
    describe("initial state", () => {
      it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            Items: [],
            loading: false,
            Detail: {
              itemId: null,
              itemBrand: null,
              itemModel: null,
              itemDescription: null,
              itemName: null,
              itemImage: null,
            },
            activeEdit: false
        });
      });
    });

    describe("GET_ITEM_ADMIN", () => {
        it("should return the state with admin get an item", () => {
          expect(
            reducer(undefined, {
              type: types.GET_ITEM_ADMIN,
              payload: ["Computer", "Laptop"],
            })
          ).toEqual({
            Items: ["Computer", "Laptop"],
            loading: false,
            Detail: {
              itemId: null,
              itemBrand: null,
              itemModel: null,
              itemDescription: null,
              itemName: null,
              itemImage: null,
            },
            activeEdit: false
          });
        });
      });

      describe("ITEM_LOADING_ADMIN", () => {
        it("should return the state with admin loading an item", () => {
          expect(
            reducer(undefined, {
              type: types.ITEM_LOADING_ADMIN,
              payload: true,
            })
          ).toEqual({
            Items: [],
            loading: true,
            Detail: {
              itemId: null,
              itemBrand: null,
              itemModel: null,
              itemDescription: null,
              itemName: null,
              itemImage: null,
            },
            activeEdit: false
          });
        });
      });

      describe("GET_ITEM_DETAIL_ADMIN", () => {
        it("should return the state with admin loading an item", () => {
          expect(
            reducer(undefined, {
              type: types.GET_ITEM_DETAIL_ADMIN,
              payload: [{ itemId: "0001", itemBrand: "Asus", itemModel: "asus01", itemDescription: "for work", itemName: "Game", itemImage: "nb01"}]
            })
          ).toEqual({
            Items: [],
            loading: false,
            Detail: [{
              itemId: "0001",
              itemBrand: "Asus",
              itemModel: "asus01",
              itemDescription: "for work",
              itemName: "Game",
              itemImage: "nb01",
            }],
            activeEdit: false
          });
        });
      });

})