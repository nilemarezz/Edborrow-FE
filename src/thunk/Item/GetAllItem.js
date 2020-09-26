import GetAllItemService from "../../services/ItemService/GetAllItem";
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
      setTimeout(
        () => {
          dispatch(itemLoading(false));
          dispatch(getAllItemFail());
        }, 1500)
    } else {
      setTimeout(
        () => {
          dispatch(getAllItemSuccess(items.data));
          dispatch(itemLoading(false));
        },
        1500
      );

    }
  };
};
