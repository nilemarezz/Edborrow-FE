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
    case "CHANGE_STATUS":
      console.log(action.payload)
      let newApplicationDetail = state.applicationDetail.requestItem
      let value = newApplicationDetail.findIndex(item => item.itemId = action.payload.itemId)
      newApplicationDetail[value].itemBorrowingStatusId = action.payload.itemBorrowingStatusId
      return R.assocPath(["applicationDetail", "requestItem"], newApplicationDetail)(state);
    case "CHANGE_APPROVE":
      let changenewapprove = state.applicationDetail.requestItem
      let newapprove = changenewapprove.findIndex(item => item.itemId = action.payload.itemId)
      changenewapprove[newapprove].itemApprove = action.payload.itemApprove
      return R.assocPath(["applicationDetail", "itemApprove"], changenewapprove)(state);
    default:
      return state
  }
}