export const ItemBorrowableToBoolean = (value) => {
  if (value === 1) {
    return true
  } else
    return false
}

export const BooleanToItemBorrowable = (value) => {
  if (value === true) {
    return 1
  } else
    return 0
}