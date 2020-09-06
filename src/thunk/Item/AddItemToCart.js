
import { addItemToCart, itemLoading } from "../../actions/ItemAction";
import DisabledDate from '../../__mock__/DisabledDate.json'
export const AddItemToCart = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const unavaliable = DisabledDate.data.unAvaliable
    if (unavaliable === false) {
      dispatch(itemLoading(false));
      return false
    } else {
      value.dateUnavaliable = unavaliable
      await dispatch(addItemToCart(value))
      dispatch(itemLoading(false));
      return true
    }
  };
};
