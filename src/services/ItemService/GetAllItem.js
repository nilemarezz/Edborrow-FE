const GetAllItem = async () => {
  const response = await fetch("https://edborrow.ga/api/items/");
  const data = await response.json();
  return data;
};
export default GetAllItem;
