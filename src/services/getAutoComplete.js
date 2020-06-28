const getAutoComplete = async (body) =>{
    const res = await fetch("https://edborrow.ga/api/items/getColumn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ command: body }),
      });
      const data = await res.json();
      return data
}

export default getAutoComplete