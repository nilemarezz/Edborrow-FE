
import { addItemToCart, itemLoading } from "../../actions/ItemAction";
import DisabledDate from '../../__mock__/DisabledDate.json'
import { RefactorDate } from '../../utilities/data/refactorDate'
import AddItemToCartService from '../../services/ItemService/AddItemToCart'

export const AddItemToCart = (value) => {
  return async (dispatch, getState) => {
    const newValue = [...value]
    let disabled = []
    dispatch(itemLoading(true));
    // newValue.map(async item => {
    //   // const disabledRes = await AddItemToCartService(item.itemId);
    //   // if (disabledRes.result === "false") {
    //   //   console.log('false')
    //   //   dispatch(itemLoading(false));
    //   //   return false
    //   // } else {

    //   //   disabledRes.data.unAvailable.map((date) => {
    //   //     disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
    //   //   })
    //   //   item.dateUnavaliable = disabled
    //   //   dispatch(itemLoading(false));

    //     // await dispatch(addItemToCart(value))
    //     // dispatch(itemLoading(false));
    //     // return true

    // //   }
    //  })
    for (let i = 0; i < newValue.length; i++) {
      const disabledRes = await AddItemToCartService(newValue[i].itemId);
      disabledRes.data.unAvailable.map((date) => {
        disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
      })
      newValue[i].dateUnavaliable = disabled
      disabled = []
    }
    dispatch({ type: 'SET_CART', payload: newValue })
    console.log('...', newValue)
  };
};


 // const disabled = []
    // DisabledDate.data.unAvailable.map((date) => {
    //   disabled.push({ borrowDate: RefactorDate(date.borrowDate), returnDate: RefactorDate(date.returnDate) })
    // })