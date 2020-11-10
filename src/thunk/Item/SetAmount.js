import { setAmountLeft, setloadingAmount } from '../../actions/ItemAction'

export const SetAmountThunk = (value) => {
  return async (dispatch, getState) => {
    console.log('call amount')
    dispatch(setloadingAmount({ itemId: value.itemId, loading: true }))
    try {

      let data = { itemId: value.itemId, amountLeft: 5 }
      if (data) {
        data.amount = 1
        dispatch(setAmountLeft(data))
        dispatch(setloadingAmount({ itemId: value.itemId, loading: false }))
        return true
      } else {
        dispatch(setloadingAmount({ itemId: value.itemId, loading: false }))
        return false
      }


    } catch (err) {
      dispatch(setloadingAmount({ itemId: value.itemId, loading: false }))
      return false
    }
  }
};
