export const CartItem = (item) => {
  let data = {
    itemId: item[0],
    itemName: item[1],
    itemImage: item[2],
    departmentId: item[3],
    ownerName: item[6],
    amount: item[5],
    amountSelect: 1,
    date: {
      from: null,
      to: null
    },
    dateUnavaliable: []
  };
  return data
}