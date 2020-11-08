import Login from './Login'
import env from '../../env'
export const Auth = async (code) => {
  try {
    console.log('...', code)
    const url = 'https://gatewayservice.sit.kmutt.ac.th/api/oauth/token'
    const secret = '1vb7GiFApXLOVhCDN9UqajEK8'
    const clientId = "WNS8RCIb"
    const resFromSSO = await fetch(`${url}?client_secret=${secret}&client_id=${clientId}&code=${code}&redirect_uri=${process.env.REACT_APP_ENV === "develop" ? "http://localhost:3001/#/" : "https://edborrow.netlify.app/#/"}`)
    // const user = await Login(await resFromSSO.json())
    const resFromSSOData = await resFromSSO.json()
    console.log(resFromSSOData)
    const resFromAuthServer = await fetch(`${env.url}users/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(resFromSSOData),
    });
    const data = await resFromAuthServer.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    return false
  }
}

