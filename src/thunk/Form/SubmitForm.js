import { loadingSubmitForm, resetForm } from '../../actions/ApplicationFormAction'
export const submitForm = (value) => {
    return async (dispatch, getState) => {
        console.log(value)
        dispatch(loadingSubmitForm(true));
        dispatch(resetForm())
        dispatch(loadingSubmitForm(false));
        return true
    };
};
