export const SET_FORM_ID = "SET_FORM_ID"
export const SET_FORM_SURNAME = "SET_FORM_SURNAME"
export const SET_FORM_EMAIL = "SET_FORM_EMAIL"
export const SET_FORM_TELNO = "SET_FORM_TELNO"
export const SET_FORM_ADVISOR = "SET_FORM_ADVISOR"
export const SET_FORM_BORROWDATE = "SET_FORM_BORROWDATE"
export const SET_FORM_NAME = "SET_FORM_NAME"
export const SET_FORM_RETURNDATE = "SET_FORM_RETURNDATE"
export const SET_FORM_PURPOSE = "SET_FORM_PURPOSE"
export const SET_FORM_USEPLACE = "SET_FORM_USEPLACE"
export const RESET_FORM = "RESET_FORM"
export const LOADING_SUBMIT_FORM = "LOADING_SUBMIT_FORM"
export const SEND_FORM = "SEND_FORM"

export const setFormID = (data) => {
  return { type: SET_FORM_ID, payload: data };
};
export const setFormName = (data) => {
  return { type: SET_FORM_NAME, payload: data };
};
export const setFormSurname = (data) => {
  return { type: SET_FORM_SURNAME, payload: data };
};
export const setFormEmail = (data) => {
  return { type: SET_FORM_EMAIL, payload: data };
};
export const setFormTelNo = (data) => {
  return { type: SET_FORM_TELNO, payload: data };
};
export const setFormAdvisor = (data) => {
  return { type: SET_FORM_ADVISOR, payload: data };
};
export const setFormBorrowDate = (data) => {
  return { type: SET_FORM_BORROWDATE, payload: data };
};
export const setFormReturnDate = (data) => {
  return { type: SET_FORM_RETURNDATE, payload: data };
};
export const setFormPurpose = (data) => {
  return { type: SET_FORM_PURPOSE, payload: data };
};
export const setFormUsePlace = (data) => {
  return { type: SET_FORM_USEPLACE, payload: data };
};
export const resetForm = () => {
  return { type: RESET_FORM };
};
export const sendForm = () => {
  return { type: SEND_FORM };
};
export const loadingSubmitForm = (data) => {
  return { type: LOADING_SUBMIT_FORM, payload: data }
}