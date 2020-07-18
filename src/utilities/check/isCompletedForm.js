export const isCompletedForm = (step, field, cart) => {
    console.log(step)
    console.log(field)

    console.log(cart)

    if (step === 0) {
        if (cart.length > 0) {
            return true
        } else {
            return true
        }
    } else {
        if (field.name === "" || field.surname === ""
            || field.email === "" || field.id === ""
            || field.telNo === "" || field.advisor === ""
            || field.purpose === "") {
            return false
        } else {
            return true
        }
    }

}