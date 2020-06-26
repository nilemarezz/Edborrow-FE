import UserDetail from "./UserDetail";
import {MockAPISuccess,MockAPIFail} from '../../__test__/MockAPI'
const mockToken = "123";
describe("Test User Service", () => {
  describe("UserDetail service fail", () => {
    it("should return false when login with mockUser ", async () => {
      MockAPIFail()
      const res = await UserDetail();
      expect(res).toEqual(false);
    });
  });
  describe("UserDetail service success", () => {
    it("should return success when login with mockUser ", async () => {
      MockAPISuccess({result:"success"})
      const res = await UserDetail(mockToken);
      expect(res.result).toEqual("success");
    });
  });
});
