export const GET_APPLICATION_LIST = "GET_APPLICATION_LIST"
export const LOADING_APPLICATION_LIST = "LOADING_APPLICATION_LIST"

export const getApplicationList = (data) => {
  return { type: GET_APPLICATION_LIST, payload: data };
};

export const loadingApplicationList = (data) => {
  return { type: LOADING_APPLICATION_LIST, payload: data };
};