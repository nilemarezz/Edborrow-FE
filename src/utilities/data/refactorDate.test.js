import {RefactorDate} from './refactorDate'

describe("refactorDate.js", () => {
    describe("refactorDate()", () => {
        it("should convert date to string and format correctly.", () => {
            expect(RefactorDate("2020-08-20T00:00:00.000Z")).toEqual("2020-08-20 00:00:00")
        })
    })
});
