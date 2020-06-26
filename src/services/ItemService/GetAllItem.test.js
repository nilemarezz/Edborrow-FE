import Getallitem from "./GetAllItem";

describe("Test Item Service", () => {
  describe("GetAllItem service", () => {
    it("should return the item with lenght more than 1", async () => {
      const data = await Getallitem();
      expect(data.data.length).toBeGreaterThan(0);
    });
  });
});
