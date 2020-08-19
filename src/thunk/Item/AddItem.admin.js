import AddItemService from "../../services/ItemService/AddItem";
import { itemLoading } from "../../actions/ItemAction.admin";

export const AddItemThunk = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const formData = new FormData();
    formData.append("image", value.itemImage);
    formData.append("itemName", value.itemName);
    formData.append("itemBrand", value.itemBrand === "" ? null : value.itemBrand);
    formData.append("itemModel", value.itemModel === "" ? null : value.itemModel);
    formData.append(
      "createDate",
      `${new Date()
        .toISOString()
        .slice(0, 10)} ${new Date().toISOString().slice(11, 19)}`
    );
    formData.append("categoryId", value.itemCategoryId === "" ? null : value.itemCategoryId);
    formData.append("itemDescription", value.itemDescription === "" ? null : value.itemDescription);
    const add = await AddItemService(formData);
    if (add === false) {
      console.error('Cannot connect to server')
      dispatch(itemLoading(false));
      return false
    } else {
      dispatch(itemLoading(false));
      return true
    }
  };
};
