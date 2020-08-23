import Getallitem from "./GetAllItem";
import Item from '../../__mock__/Item.json'

describe("Test Item Service", () => {
  describe("GetAllItem service", () => {
    it("should return the item with lenght more than 1", async () => {

      const data = await Getallitem();
      console.log(data)
      expect(data).toBe(Item);
    });
  });
});
