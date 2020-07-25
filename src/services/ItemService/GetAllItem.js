import env from '../../env'
import Item from '../../__mock__/Item.json'
const GetAllItem = async () => {
  // const response = await fetch(`${env.url}items/`);
  // const data = await response.json();

  return Item;
};
export default GetAllItem;
