import { setAmountLeft, setloadingAmount } from '../../actions/ItemAction'
import GetAmount from '../../services/ItemService/getAmount'
export const SetAmountThunk = (value) => {
  return async (dispatch, getState) => {
    console.log('call amount')
    dispatch(setloadingAmount({ itemId: value.itemId, loading: true }))
    try {
      console.log(value)
      const res = await GetAmount({ itemId: value.itemId, borrowDate: value.borrowData, returnDate: value.returnDate })
      let data = { itemId: res.itemId, amountLeft: res.amount, amount: 0 }
      if (data) {
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
