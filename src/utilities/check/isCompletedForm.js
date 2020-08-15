export const isCompletedForm = (step, field, cart) => {
  if (step === 0) {
    if (cart.length > 0) {
      return true
    } else {
      return false
    }
  } else {
    if (field.name === "" || field.surname === ""
      || field.email === "" || field.id === ""
      || field.telNo === "" || field.advisor === ""
      || field.purpose === "" || field.usePlace === "") {
      return false
    } else {
      return true
    }
  }

}