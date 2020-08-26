export const SET_DEPARTMENT_FORM_ID = "SET_FORM_ID"
export const SET_DEPARTMENT_FORM_NAME = "SET_FORM_NAME"
export const SET_DEPARTMENT_FORM_SURNAME = "SET_FORM_SURNAME"
export const SET_DEPARTMENT_FORM_PASSWORD = "SET_FORM_PASSWORD"
export const SET_DEPARTMENT_FORM_DEPARTMENTNAME = "SET_DEPARTMENT_FORM_DEPARTMENTNAME"
export const SET_DEPARTMENT_FORM_DEPARTMENTTEL = "SET_DEPARTMENT_FORM_DEPARTMENTTEL"
export const SET_DEPARTMENT_FORM_DEPARTMENTEMAIL = "SET_DEPARTMENT_FORM_DEPARTMENTEMAIL"
export const SET_DEPARTMENT_FORM_DEPARTMENTBUILDING = "SET_DEPARTMENT_FORM_DEPARTMENTBUILDING"
export const SET_DEPARTMENT_FORM_DEPARTMENTFLOOR = "SET_DEPARTMENT_FORM_DEPARTMENTFLOOR"
export const SET_DEPARTMENT_FORM_DEPARTMENTROOM = "SET_DEPARTMENT_FORM_DEPARTMENTROOM"
export const SEND_DEPARTMENT_FORM = "SEND_DEPARTMENT_FORM"
export const RESET_DEPARTMENT_FORM = "RESET_DEPARTMENT_FORM"
export const LOADING_DEPARTMENT_FORM = "LOADING_DEPARTMENT_FORM"

export const setFormID = (data) => {
  return { type: SET_DEPARTMENT_FORM_ID, payload: data };
};
export const setFormName = (data) => {
  return { type: SET_DEPARTMENT_FORM_NAME, payload: data };
};
export const setFormSurname = (data) => {
  return { type: SET_DEPARTMENT_FORM_SURNAME, payload: data };
};
export const setFormPassword = (data) => {
  return { type: SET_DEPARTMENT_FORM_PASSWORD, payload: data };
};
export const setFormDepartmentName = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTNAME, payload: data };
};
export const setFormDepartmentTel = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTTEL, payload: data };
};
export const setFormDepartmentEmail = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTEMAIL, payload: data };
};
export const setFormDepartmentBuilding = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTBUILDING, payload: data };
};
export const setFormDepartmentFloor = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTFLOOR, payload: data };
};
export const setFormDepartmentRoom = (data) => {
  return { type: SET_DEPARTMENT_FORM_DEPARTMENTROOM, payload: data };
};
export const resetForm = () => {
  return { type: RESET_DEPARTMENT_FORM };
};
export const sendDepartmentForm = () => {
  return { type: SEND_DEPARTMENT_FORM };
};
export const loadingSubmitForm = (data) => {
  return { type: LOADING_DEPARTMENT_FORM, payload: data }
}