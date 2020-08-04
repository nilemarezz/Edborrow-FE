import { loadingSubmitForm, resetForm } from '../../actions/ApplicationFormAction'
import { clearCart } from '../../actions/ItemAction'
export const submitForm = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingSubmitForm(true));
    dispatch(resetForm())
    dispatch(clearCart())
    dispatch(loadingSubmitForm(false));
    return true
  };
};
