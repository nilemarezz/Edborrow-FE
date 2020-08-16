import GetItemDetailService from "../../services/ItemService/GetItemDetail";
import { itemLoading, getItemDetail } from "../../actions/ItemAction.admin";

export const GetItemDetail = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const items = await GetItemDetailService(value);
    if (items.result === "false") {
      console.error('Cannot connect to server')
      dispatch(itemLoading(false));
    } else {
      const reObject = {
        itemId: items.itemId,
        itemBrand: items.itemBrand === null ? "" : items.itemBrand,
        itemModel: items.itemModel === null ? "" : items.itemModel,
        itemDescription: items.itemDescription === null ? "" : items.itemDescription,
        itemName: items.itemName,
        itemBorrowable: items.itemBorrowable,
        itemCategoryId: items.categoryId,
        itemImage: items.itemImage,
      }
      console.log(items)
      dispatch(getItemDetail(reObject));
      dispatch(itemLoading(false));
    }
  };
};
