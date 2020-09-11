
import { addItemToCart, itemLoading } from "../../actions/ItemAction";
import DisabledDate from '../../__mock__/DisabledDate.json'
import { RefactorDate } from '../../utilities/data/refactorDate'

export const AddItemToCart = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const disabled = []
    const disabledRes = DisabledDate;
    if (disabledRes.result === "false") {
      dispatch(itemLoading(false));
      return false
    } else {
      DisabledDate.data.unAvailable.map((date) => {
        disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
      })
      value.dateUnavaliable = disabled
      await dispatch(addItemToCart(value))
      dispatch(itemLoading(false));
      return true
    }
  };
};


 // const disabled = []
    // DisabledDate.data.unAvailable.map((date) => {
    //   disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
    // })