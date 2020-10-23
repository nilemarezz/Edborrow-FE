import * as R from 'ramda'
import {
  ADMIN_GET_APPLICATION_LIST, ADMIN_LOADING_APPLICATION_LIST,
  ADMIN_CHANGE_BORROWING_STATUS,
  ADMIN_CHANGE_APPROVE_STATUS
} from '../actions/ApplicationList.admin'

const initialState = {
  applicationList: [],
  loading: false
}

export function updateApproveStatus({ itemId, requestId, value }, list) {
  const newList = [...list];
  newList.forEach(item => {
    if (item.requestId === requestId && item.itemId === itemId) {

      item.itemApprove = value
    }

  });
  return newList
}
export function updateBorrowingStatus({ itemId, requestId, value }, list) {
  const newList = [...list];
  newList.forEach(item => {
    if (item.requestId === requestId && item.itemId === itemId) {

      item.itemBorrowingStatusId = value
    }

  });
  return newList
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_GET_APPLICATION_LIST:
      return R.assocPath(["applicationList"], action.payload)(state);
    case ADMIN_LOADING_APPLICATION_LIST:
      return R.assocPath(["loading"], action.payload)(state);
    case ADMIN_CHANGE_APPROVE_STATUS:
      return R.assocPath(["applicationList"], updateApproveStatus(action.payload, state.applicationList))(state);
    case ADMIN_CHANGE_BORROWING_STATUS:
      return R.assocPath(["applicationList"], updateBorrowingStatus(action.payload, state.applicationList))(state);
    default:
      return state
  }
}