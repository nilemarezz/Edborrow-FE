import DeleteItemService from "../../services/ItemService/DeleteItem";
import { deleteItem, itemLoading } from "../../actions/ItemAction.admin";

export const DeleteItemThunk = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const deleteSuccess = await DeleteItemService(value);
    if (deleteSuccess === false) {
      setTimeout(
        () => {
          dispatch(itemLoading(false));

        }, 1500)
      return false

    } else {
      setTimeout(
        () => {
          dispatch(deleteItem(value));
          dispatch(itemLoading(false));

        }, 1500)
      return true

    }
  };
};
