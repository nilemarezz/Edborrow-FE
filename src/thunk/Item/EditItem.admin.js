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
    formData.append("itemStatusId", value.itemDescription === "" ? 1 : value.itemStatusId);
    try {
      const edit = await EditItemService(formData);
      if (edit === false) {
        setTimeout(
          () => {
            dispatch(itemLoading(false));

          }, 1500)
        return false
      } else {
        setTimeout(
          () => {
            dispatch(itemLoading(false));

          }, 1500)
        return true
      }
    } catch (err) {
      return false
    }
  }
};
