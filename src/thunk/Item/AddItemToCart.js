
import { addItemToCart, itemLoading } from "../../actions/ItemAction";
import DisabledDate from '../../__mock__/DisabledDate.json'
import { RefactorDate } from '../../utilities/data/refactorDate'
import AddItemToCartService from '../../services/ItemService/AddItemToCart'

export const AddItemToCart = (value) => {
  return async (dispatch, getState) => {
    const newValue = [...value]
    let disabled = []
    dispatch(itemLoading(true));
    for (let i = 0; i < newValue.length; i++) {
      const disabledRes = await AddItemToCartService(newValue[i].itemId);
      disabledRes.data.unAvailable.map((date) => {
        disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
      })
      newValue[i].dateUnavaliable = disabled
      disabled = []
    }
    dispatch({ type: 'SET_CART', payload: newValue })
    dispatch(itemLoading(false));
  };
};


 // const disabled = []
    // DisabledDate.data.unAvailable.map((date) => {
    //   disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
    // })