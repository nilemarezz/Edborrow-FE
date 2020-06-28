import env from '../../env'
const RegisterService = async (value) => {
  try {
    const data = await fetch(`${env.url}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    
    return await data.json();
  } catch (err) {
    return false;
  }
};

export default RegisterService;
