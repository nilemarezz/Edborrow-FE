export const ADMIN_GET_APPLICATION_LIST = "ADMIN_GET_APPLICATION_LIST"
export const ADMIN_LOADING_APPLICATION_LIST = "ADMIN_LOADING_APPLICATION_LIST"

export const getApplicationList = (data) => {
  return { type: ADMIN_GET_APPLICATION_LIST, payload: data };
};

export const loadingApplicationList = (data) => {
  return { type: ADMIN_LOADING_APPLICATION_LIST, payload: data };
};