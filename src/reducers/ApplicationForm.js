import * as R from "ramda";
import {
  SET_FORM_ID, SET_FORM_NAME, SET_FORM_SURNAME,
  SET_FORM_EMAIL, SET_FORM_TELNO, SET_FORM_ADVISOR,
  SET_FORM_BORROWDATE, SET_FORM_RETURNDATE,
  SET_FORM_PURPOSE, RESET_FORM, LOADING_SUBMIT_FORM
} from '../actions/ApplicationFormAction'
const initialState = {
  loading: false,
  id: "",
  name: "",
  surname: "",
  email: "",
  telNo: "",
  advisor: "",
  borrowDate: new Date(),
  returnDate: new Date(),
  purpose: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_SUBMIT_FORM:
      return R.assocPath(["loading"], action.payload)(state);
    case SET_FORM_ID:
      return R.assocPath(["id"], action.payload)(state);
    case SET_FORM_NAME:
      return R.assocPath(["name"], action.payload)(state);
    case SET_FORM_SURNAME:
      return R.assocPath(["surname"], action.payload)(state);
    case SET_FORM_EMAIL:
      return R.assocPath(["email"], action.payload)(state);
    case SET_FORM_TELNO:
      return R.assocPath(["telNo"], action.payload)(state);
    case SET_FORM_ADVISOR:
      return R.assocPath(["advisor"], action.payload)(state);
    case SET_FORM_BORROWDATE:
      return R.assocPath(["borrowDate"], action.payload)(state);
    case SET_FORM_RETURNDATE:
      return R.assocPath(["returnDate"], action.payload)(state);
    case SET_FORM_PURPOSE:
      return R.assocPath(["purpose"], action.payload)(state);
    case RESET_FORM:
      return (
        R.pipe(R.assocPath(["id"], ""), R.assocPath(["name"], ""), R.assocPath(["surname"], ""),
          R.assocPath(["email"], ""), R.assocPath(["telNo"], ""), R.assocPath(["advisor"], ""),
          R.assocPath(["borrowDate"], new Date()), R.assocPath(["returnDate"], new Date()),
          R.assocPath(["purpose"], ""))(state)
      )
    default:
      return state
  }
}