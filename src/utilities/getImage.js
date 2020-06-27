
export const renderImage = (value) => {
    if (value === null) {
      return process.env.PUBLIC_URL + "/noimage.png";
    } else {
      return value;
    }
};

