export const CartItem = (item) => {
  let data = {
    itemId: item[0],
    itemName: item[1],
    itemImage: item[2],
    departmentId: item[3],
  };
  return data
}