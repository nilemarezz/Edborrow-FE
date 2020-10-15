import * as R from 'ramda'
import { GET_APPLICATION_LIST, LOADING_APPLICATION_LIST, GET_APPLICATION_DETAIL } from '../actions/ApplicationList'

const initialState = {
  applicationList: [],
  loading: false,
  applicationDetail: []
}

export default function (state = initialState, action) {
  let requestItem = state.applicationDetail.requestItem
  switch (action.type) {
    case GET_APPLICATION_LIST:
      return R.assocPath(["applicationList"], action.payload)(state);
    case GET_APPLICATION_DETAIL:
      return R.assocPath(["applicationDetail"], action.payload)(state);
    case LOADING_APPLICATION_LIST:
      return R.assocPath(["loading"], action.payload)(state);
    case "CHANGE_STATUS":
      console.log(action.payload)
      let value = requestItem.findIndex(item => item.itemId = action.payload.itemId)
      requestItem[value].itemBorrowingStatusId = action.payload.itemBorrowingStatusId
      return R.assocPath(["applicationDetail", "requestItem"], requestItem)(state);
    case "CHANGE_APPROVE":
      let approveIndex = requestItem.findIndex(item => item.itemId = action.payload.itemId)
      requestItem[approveIndex].itemApprove = action.payload.itemApprove
      return R.assocPath(["applicationDetail", "itemApprove"], requestItem)(state);
    case "SET_PURPOSE_REJECT_ITEM":
      let pueposeIndex = requestItem.findIndex(item => item.itemId = action.payload.itemId)
      requestItem[pueposeIndex].rejectPurpose = action.payload.rejectPurpose
      return R.assocPath(["applicationDetail", "rejectPurpose"], requestItem)(state);
    default:
      return state
  }
}