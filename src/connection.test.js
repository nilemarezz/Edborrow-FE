import env from './env'
describe("Connection", () => {
  describe("Test connect api connection", () => {
    it("should return data", async () => {
      const response = await fetch(`https://edborrow.ga/api/items/`);
      const data = await response.json();
      expect(data.result).toEqual("success");
    });
  });
})
