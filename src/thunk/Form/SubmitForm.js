import { loadingSubmitForm, resetForm } from '../../actions/ApplicationFormAction'
import { clearCart } from '../../actions/ItemAction'
import { RefactorDateJS } from '../../utilities/data/RefactorDateJS'
import SendApplicationService from '../../services/ApplicationService/SendApplication'
export const submitForm = (form, cart) => {
  return async (dispatch, getState) => {
    dispatch(loadingSubmitForm(true));
    const item = [];
    cart.forEach((cartItem) => {
      item.push({ itemId: cartItem.itemId, borrowDate: cartItem.date.from, returnDate: cartItem.date.to, amount: cartItem.amountSelect });
    });
    const summaryForm = {
      items: item,
      personalInformation: {
        borrowDate: form.borrowDate,
        borrowPurpose: form.purpose,
        name: `${form.name} ${form.surname}`,
        returnDate: form.returnDate,
        transactionDate: new Date().toJSON().slice(0, 10).replace(/-/g, "-"),
        usePlace: form.usePlace,
        userId: form.id,
        advisorEmail: form.advisor
      }
    }
    const sendSuccess = await SendApplicationService(summaryForm);
    if (sendSuccess) {
      setTimeout(
        () => {
          dispatch(resetForm())
          dispatch(clearCart())
          dispatch(loadingSubmitForm(false));

        }, 1500)
      return true
    } else {
      setTimeout(
        () => {
          dispatch(loadingSubmitForm(false));

        }, 1500)
      return false
    }
  };
};
