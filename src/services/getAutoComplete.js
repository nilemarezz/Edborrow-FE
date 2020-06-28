import env from '../env'
const getAutoComplete = async (body) =>{
    const res = await fetch(`${env.url}items/getColumn`, {
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