import env from '../../env'
import Item from '../../__mock__/Item.json'
const GetAllItem = async () => {
  console.log(process.env.REACT_APP_ENV)
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${env.url}items/`);
    const data = await response.json();
    return data;
  } else {
    console.log('dec')
    return Item
  }
};
export default GetAllItem;
