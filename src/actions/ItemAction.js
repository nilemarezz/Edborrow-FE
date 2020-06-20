export const GETALL_ITEM_SUCCESS = "GETALL_ITEM_SUCCESS";
export const GETALL_ITEM_FAIL = "GETALL_ITEM_FAIL";
export const ITEM_LOADING = "ITEM_LOADING"
export const getAllItemSuccess = (data) => {
  return { type: GETALL_ITEM_SUCCESS, payload: data };
};
export const getAllItemFail = (data) => {
  return { type: GETALL_ITEM_FAIL };
};
export const itemLoading = (data) => {
    return { type: ITEM_LOADING , payload:data };
  };
