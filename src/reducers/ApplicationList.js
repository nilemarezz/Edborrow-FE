import * as R from 'ramda'
import { GET_APPLICATION_LIST, LOADING_APPLICATION_LIST, GET_APPLICATION_DETAIL } from '../actions/ApplicationList'

const initialState = {
  applicationList: [],
  loading: false,
  applicationDetail: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_LIST:
      return R.assocPath(["applicationList"], action.payload)(state);
    case GET_APPLICATION_DETAIL:
      return R.assocPath(["applicationDetail"], action.payload)(state);
    case LOADING_APPLICATION_LIST:
      return R.assocPath(["loading"], action.payload)(state);
    default:
      return state
  }
}