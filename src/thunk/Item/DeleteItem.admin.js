import DeleteItemService from "../../services/ItemService/DeleteItem";
import { deleteItem, itemLoading } from "../../actions/ItemAction.admin";

export const DeleteItemThunk = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const deleteSuccess = await DeleteItemService(value);
    if (deleteSuccess === false) {
      console.error('error')
      dispatch(itemLoading(false));
      return false
    } else {
      dispatch(deleteItem(value));
      dispatch(itemLoading(false));
      return true
    }
  };
};
