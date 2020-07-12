import getAutoComplete from './getAutoComplete'
import { MockAPISuccess, MockAPIFail } from "../__test__/MockAPI";
describe("service getAutocomplete", () => {
    it("should return success", async () => {
        MockAPISuccess({ result: "success" });
        const res = await getAutoComplete();
        expect(res.result).toEqual("success");
    });
});