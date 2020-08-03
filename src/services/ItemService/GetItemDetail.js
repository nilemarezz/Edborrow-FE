import env from '../../env'
import ItemDetail from '../../__mock__/ItemDetail.json'
const GetItemDetail = async (value) => {
  const response = await fetch(`${env.url}items/${value}`);
  const data = await response.json();
  return data.data[0];
}
export default GetItemDetail