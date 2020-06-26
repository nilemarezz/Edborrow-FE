const UserDetail = async (token) => {
  try {
    const res = await fetch(`https://edborrow.ga/api/users/detail`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    return false;
  }
};

export default UserDetail;
