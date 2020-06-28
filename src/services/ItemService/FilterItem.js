import env from '../../env'
export const FilterItemService = async (value) => {
  let {
    name,
    category,
    department,
    avalibility,
    borrowDate,
    returnDate,
  } = value;
  const url = `${env.url}items/search?searchInput=${name}&searchCategory=${category}&searchDepartment=${department}&searchAvailability=${avalibility}&searchBorrowDate=${borrowDate}&searchReturnDate=${returnDate}`;
  console.log(url);
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
