import GetAllItemService from "../../services/ItemService/GetAllItem.systemadmin";
import { getAllItems, itemLoading } from "../../actions/ItemAction.systemadmin";

export const GetAllItemThunk = () => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const items = await GetAllItemService();
    if (items.result === "false") {
      console.error('Cannot connect to server')
      dispatch(itemLoading(false));
    } else {
      dispatch(getAllItems(items.data));
      dispatch(itemLoading(false));
    }
  };
};
