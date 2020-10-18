export const UPDATE_ITEM = "UPDATE_ITEM"
export const CHANGE_STATUS = "CHANGE_STATUS"
export const CHANGE_APPROVE = "CHANGE_APPROVE"
export const SET_PURPOSE_REJECT_ITEM = "SET_PURPOSE_REJECT_ITEM"
export const CHANGE_BORROW_REQUEST = "CHANGE_BORROW_REQUEST"
export const updateItem = (value) => {
  return { type: UPDATE_ITEM, payload: value }
}
export const changeApplicationStatus = (value) => {
  return { type: CHANGE_STATUS, payload: value }
}
export const changeApproveStatus = (value) => {
  return { type: CHANGE_APPROVE, payload: value }
}
export const setRejectPurpose = (value) => {
  return { type: SET_PURPOSE_REJECT_ITEM, payload: value }
}
export const changeBorrowRequest = (value) => {
  return { type: CHANGE_BORROW_REQUEST, payload: value }
}