export const UPDATE_ITEM = "UPDATE_ITEM"
export const CHANGE_STATUS = "CHANGE_STATUS"
export const CHANGE_APPROVE = "CHANGE_APPROVE"
export const SET_PURPOSE_REJECT_ITEM = "SET_PURPOSE_REJECT_ITEM"
export const CHANGE_BORROW_REQUEST = "CHANGE_BORROW_REQUEST"
export const UPDATE_DATE = "UPDATE_DATE"
export const UPDATE_AMOUNT = "UPDATE_AMOUNT"
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
export const updateDate = (value) => {
  return { type: UPDATE_DATE, payload: value }
}
export const updateAmount = (value) => {
  return { type: UPDATE_AMOUNT, payload: value }
}