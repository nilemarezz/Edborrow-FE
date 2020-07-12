import Getallitem from "./GetAllItem";
import { MockAPISuccess, MockAPIFail } from '../../__test__/MockAPI'

describe("Test Item Service", () => {
  describe("GetAllItem service", () => {
    it("should return the item with lenght more than 1", async () => {
      MockAPISuccess({ result: "success" });
      const data = await Getallitem();
      expect(data.result).toBe("success");
    });
  });
});
