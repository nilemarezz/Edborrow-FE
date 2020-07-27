import * as R from 'ramda'
import { GET_APPLICATION_LIST, LOADING_APPLICATION_LIST } from '../actions/ApplicationList'

const initialState = {
  applicationList: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_LIST:
      return R.assocPath(["applicationList"], action.payload)(state);
    case LOADING_APPLICATION_LIST:
      return R.assocPath(["loading"], action.payload)(state);
    default:
      return state
  }
}