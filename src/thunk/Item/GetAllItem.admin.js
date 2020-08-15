import GetAllItemService from "../../services/ItemService/GetAllItem.admin";
import {
  getAllItemFail,
  getAllItemSuccess,
  itemLoading,
} from "../../actions/ItemAction";

export const GetAllItemThunk = () => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const items = await GetAllItemService();
    if (items.result === "false") {
      dispatch(itemLoading(false));
      dispatch(getAllItemFail());
    } else {
      dispatch(getAllItemSuccess(items.data));
      dispatch(itemLoading(false));
    }
  };
};
