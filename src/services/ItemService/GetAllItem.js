import env from '../../env'
const GetAllItem = async () => {
  const response = await fetch(`${env.url}items/`);
  const data = await response.json();
  return data;
};
export default GetAllItem;
