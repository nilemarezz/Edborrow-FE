import { renderCategory } from "./getCategory"

describe("getCategory.js", () => {
    describe("renderCategory()", () => {
        it("should be general if value equals 1.", () => {
            expect(renderCategory(1)).toEqual("General")
        })
        it("should be eletronic if value not equals 1.", () => {
            expect(renderCategory(2)).toEqual("Electronic")
        })
    })
})
