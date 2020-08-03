export const GET_APPLICATION_LIST = "GET_APPLICATION_LIST"
export const LOADING_APPLICATION_LIST = "LOADING_APPLICATION_LIST"
export const GET_APPLICATION_DETAIL = "GET_APPLICATION_DETAIL"

export const getApplicationList = (data) => {
  return { type: GET_APPLICATION_LIST, payload: data };
};

export const getApplicationDetail = (data) => {
  return { type: GET_APPLICATION_DETAIL, payload: data };
};

export const loadingApplicationList = (data) => {
  return { type: LOADING_APPLICATION_LIST, payload: data };
};