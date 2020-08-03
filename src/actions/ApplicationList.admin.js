export const ADMIN_GET_APPLICATION_LIST = "ADMIN_GET_APPLICATION_LIST"
export const ADMIN_LOADING_APPLICATION_LIST = "ADMIN_LOADING_APPLICATION_LIST"
export const ADMIN_CHANGE_APPROVE_STATUS = "ADMIN_CHANGE_APPROVE_STATUS"
export const ADMIN_CHANGE_BORROWING_STATUS = "ADMIN_CHANGE_BORROWING_STATUS"

export const getApplicationList = (data) => {
  return { type: ADMIN_GET_APPLICATION_LIST, payload: data };
};

export const loadingApplicationList = (data) => {
  return { type: ADMIN_LOADING_APPLICATION_LIST, payload: data };
};

export const changeApproveStatus = (data) => {
  return { type: ADMIN_CHANGE_APPROVE_STATUS, payload: data }
}


export const changeBorrowingStatus = (data) => {
  return { type: ADMIN_CHANGE_BORROWING_STATUS, payload: data }
}