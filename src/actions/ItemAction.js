export const GETALL_ITEM_SUCCESS = "GETALL_ITEM_SUCCESS";
export const GETALL_ITEM_FAIL = "GETALL_ITEM_FAIL";
export const ITEM_LOADING = "ITEM_LOADING";
export const CLEAR_ITEM_INCART = "CLEAR_ITEM_INCART";
export const DELETE_ITEM_INCART = "DELETE_ITEM_INCART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const getAllItemSuccess = (data) => {
  return { type: GETALL_ITEM_SUCCESS, payload: data };
};
export const getAllItemFail = () => {
  return { type: GETALL_ITEM_FAIL };
};
export const itemLoading = (data) => {
  return { type: ITEM_LOADING, payload: data };
};

export const clearItemInCart = () => {
  return { type: CLEAR_ITEM_INCART };
};

export const deleteItemInCart = (itemId) => {
  return { type: DELETE_ITEM_INCART, payload: itemId };
};

export const addItemToCart = (item) => {
  return { type: ADD_ITEM_TO_CART, payload: item };
};
