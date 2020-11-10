export const isCompletedForm = (step, field, cart) => {
  if (step === 0) {
    if (cart.length > 0) {
      let complete = true;
      cart.map(item => {
        if (item.date.from === null || item.date.to === null) {
          console.log('return')
          complete = false
        }
      })
      return complete
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

export const checkDateInput = (cart) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].date.from === null || cart[i].date.to === null) {
      return false
    }
  }
  return true
}