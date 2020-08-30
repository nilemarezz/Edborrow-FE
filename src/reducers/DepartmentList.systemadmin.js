import * as R from "ramda";
import {
  LOADING_DEPARTMENT_FORM, RESET_DEPARTMENT_FORM, SEND_DEPARTMENT_FORM, SET_DEPARTMENT_FORM_DEPARTMENTBUILDING
  , SET_DEPARTMENT_FORM_DEPARTMENTEMAIL, SET_DEPARTMENT_FORM_DEPARTMENTFLOOR, SET_DEPARTMENT_FORM_DEPARTMENTNAME, SET_DEPARTMENT_FORM_DEPARTMENTROOM, SET_DEPARTMENT_FORM_DEPARTMENTTEL
  , SET_DEPARTMENT_FORM_ID, SET_DEPARTMENT_FORM_NAME, SET_DEPARTMENT_FORM_PASSWORD, SET_DEPARTMENT_FORM_SURNAME,
  DELETE_DEPARTMENT_SYSTEMDATA, GET_DEPARTMENT_LIST_SYSTEMDATA, LOADING_DEPARTMENT_SYSTEMDATA
} from '../actions/AddDepartmantForm'
const initialState = {
  departmentList: [],
  userId: "",
  firstName: "",
  lastName: "",
  password: "",
  departmentName: "",
  departmentTelNo: "",
  departmentEmail: "",
  placeBuilding: "",
  placeFloor: "",
  placeRoom: "",
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DEPARTMENT_SYSTEMDATA:
      return R.assocPath(["loading"], action.payload)(state);
    case GET_DEPARTMENT_LIST_SYSTEMDATA:
      return R.assocPath(["departmentList"], action.payload)(state);
    case DELETE_DEPARTMENT_SYSTEMDATA:
      return R.assocPath(
        ["departmentList"],
        R.reject(R.propEq('departmentId', action.payload))(state.departmentList)
      )(state);
    case SET_DEPARTMENT_FORM_ID:
      return R.assocPath(["userId"], action.payload)(state);
    case SET_DEPARTMENT_FORM_NAME:
      return R.assocPath(["firstName"], action.payload)(state);
    case SET_DEPARTMENT_FORM_SURNAME:
      return R.assocPath(["lastName"], action.payload)(state);
    case SET_DEPARTMENT_FORM_PASSWORD:
      return R.assocPath(["password"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTNAME:
      return R.assocPath(["departmentName"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTTEL:
      return R.assocPath(["departmentTelNo"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTEMAIL:
      return R.assocPath(["departmentEmail"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTBUILDING:
      return R.assocPath(["placeBuilding"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTFLOOR:
      return R.assocPath(["placeFloor"], action.payload)(state);
    case SET_DEPARTMENT_FORM_DEPARTMENTROOM:
      return R.assocPath(["placeRoom"], action.payload)(state);
    case LOADING_DEPARTMENT_FORM:
      return R.assocPath(["loading"], action.payload)(state);
    case RESET_DEPARTMENT_FORM:
      return initialState
    case SEND_DEPARTMENT_FORM:
      return state
    default:
      return state
  }
}