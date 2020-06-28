import { FilterItemService } from "../../services/ItemService/FilterItem";
import {
  searchItem as searchAction,
  itemLoading,
} from "../../actions/ItemAction";
export const searchItem = (value) => {
  return async (dispatch, getState) => {
    console.log(value)
    dispatch(itemLoading(true));
    const item = await FilterItemService(value);
    if (item.result === "false") {
        dispatch(itemLoading(false));
        dispatch({type : 'SEARCH_FALI'})
    }else{
        dispatch(itemLoading(false));
        dispatch(searchAction(item.data));
    }
  };
};
