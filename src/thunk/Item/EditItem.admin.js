import EditItemService from "../../services/ItemService/EditItem";
import { itemLoading } from "../../actions/ItemAction.admin";

export const EditItemThunk = (value) => {
  return async (dispatch, getState) => {
    dispatch(itemLoading(true));
    const formData = new FormData();
    formData.append("itemId", value.itemId);
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
    try {
      const edit = await EditItemService(formData);
      if (edit === false) {
        dispatch(itemLoading(false));
        return false
      } else {
        dispatch(itemLoading(false));
        return true
      }
    } catch (err) {
      console.log(err)
      return false
    }
  }
};