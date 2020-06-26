import Login from "./Login";
import { MockAPISuccess, MockAPIFail } from "../../__test__/MockAPI";
const mockUser = { username: "test", password: "test" };
describe("Test User Service", () => {
  describe("Login service success", () => {
    it("should return success ", async () => {
      MockAPISuccess({ result: "success" });
      const res = await Login(mockUser);
      expect(res.result).toEqual("success");
    });
  });

  describe("Login service Fail", () => {
    it("should return false ", async () => {
      MockAPIFail();
      const res = await Login(mockUser);

      expect(res).toEqual(false);
    });
  });
});
