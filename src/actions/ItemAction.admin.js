export const GET_ITEM_ADMIN = "GET_ITEM_ADMIN"
export const ITEM_LOADING_ADMIN = "ITEM_LOADING_ADMIN";
export const GET_ITEM_DETAIL_ADMIN = "GET_ITEM_DETAIL_ADMIN"
export const DELETE_ITEM_ADMIN = "DELETE_ITEM_ADMIN"
export const getAllItems = (data) => {
  return { type: GET_ITEM_ADMIN, payload: data };
};

export const itemLoading = (data) => {
  return { type: ITEM_LOADING_ADMIN, payload: data };
};

export const getItemDetail = (data) => {
  return { type: GET_ITEM_DETAIL_ADMIN, payload: data };
}

export const deleteItem = (data) => {
  return { type: DELETE_ITEM_ADMIN, payload: data };
};
