import * as R from 'ramda'
import { ADMIN_GET_APPLICATION_LIST, ADMIN_LOADING_APPLICATION_LIST, ADMIN_CHANGE_APPROVE_STATUS } from '../actions/ApplicationList.admin'

const initialState = {
  applicationList: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_GET_APPLICATION_LIST:
      return R.assocPath(["applicationList"], action.payload)(state);
    case ADMIN_LOADING_APPLICATION_LIST:
      return R.assocPath(["loading"], action.payload)(state);
    case ADMIN_CHANGE_APPROVE_STATUS:
      return state
    default:
      return state
  }
}