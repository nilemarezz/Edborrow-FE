export const MockAPISuccess = (response) => {
  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return response;
        },
      });
    });
    return p;
  });
};

export const MockAPIFail = () => {
  global.fetch = jest.fn().mockImplementation(() => {
    throw new Error();
  });
};
