import { FilterItemService } from "./FilterItem";
import { MockAPISuccess, MockAPIFail } from "../../__test__/MockAPI";

const mockValue = { id: 1 }
describe("Test Filter Item service", () => {
    describe("Filter success", () => {
        it("should return success ", async () => {
            MockAPISuccess({ result: "success" });
            const res = await FilterItemService(mockValue);
            expect(res.result).toEqual("success");
        });
    });

    describe("Filter success", () => {
        it("should return false ", async () => {
            MockAPIFail();
            const res = await FilterItemService(mockValue);
            expect(res).toEqual(false);
        });
    });
});
