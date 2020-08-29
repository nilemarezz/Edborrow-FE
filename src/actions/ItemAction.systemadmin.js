export const GET_ITEM_SYSTEMADMIN = "GET_ITEM_SYSTEMADMIN"
export const ITEM_LOADING_SYSTEMADMIN = "ITEM_LOADING_SYSTEMADMIN";
export const DELETE_ITEM_SYSTEMADMIN = "DELETE_ITEM_SYSTEMADMIN"

export const getAllItems = (data) => {
  return { type: GET_ITEM_SYSTEMADMIN, payload: data };
};

export const itemLoading = (data) => {
  return { type: ITEM_LOADING_SYSTEMADMIN, payload: data };
};

export const deleteItem = (data) => {
  return { type: DELETE_ITEM_SYSTEMADMIN, payload: data };
};

