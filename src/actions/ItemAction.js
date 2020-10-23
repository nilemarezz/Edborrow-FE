export const GETALL_ITEM_SUCCESS = "GETALL_ITEM_SUCCESS";
export const GETALL_ITEM_FAIL = "GETALL_ITEM_FAIL";
export const ITEM_LOADING = "ITEM_LOADING";
export const CLEAR_ITEM_INCART = "CLEAR_ITEM_INCART";
export const DELETE_ITEM_INCART = "DELETE_ITEM_INCART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const SEARCH_ITEM_SUCCESS = "SEARCH_ITEM_SUCCESS ";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CLEAR_CART = "CLEAR_CART"
export const SET_FORM_DATE_CART = "SET_FORM_DATE_CART"
export const SET_TO_DATE_CART = "SET_TO_DATE_CART"
export const SET_AMOUNT = "SET_AMOUNT"
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

export const searchItem = (item) => {
  return { type: SEARCH_ITEM_SUCCESS, payload: item };
};

export const clearFilter = () => {
  return { type: CLEAR_FILTER }
}
export const setFormDateCart = (data) => {
  return { type: SET_FORM_DATE_CART, payload: data }
}
export const setToDateCart = (data) => {
  return { type: SET_TO_DATE_CART, payload: data }
}
export const clearCart = () => {
  return { type: CLEAR_CART }
}
export const setSelectAmount = (value) => {
  return { type: SET_AMOUNT, payload: value }
}