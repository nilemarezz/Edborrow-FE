import Register from "./Register";
import { MockAPIFail, MockAPISuccess } from "../../__test__/MockAPI";
describe("Test User Service", () => {
  describe("Register success", () => {
    it("should return result with success", async function () {
      MockAPISuccess({ result: "success" });
      const response = await Register();
      expect(response.result).toEqual("success");
    });
  });
  describe("Register fail", () => {
    it("should return false", async function () {
      MockAPIFail();

      const response = await Register();
      expect(response).toEqual(false);
    });
  });
});
