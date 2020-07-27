import env from '../../env'
import ItemDetail from '../../__mock__/ItemDetail.json'
const GetItemDetail = async (value) => {
  // const response = await fetch(`https://edborrow.ga/api/items/${value}`);
  // const data = await response.json();

  // return data.data;
  return ItemDetail.data
}
export default GetItemDetail