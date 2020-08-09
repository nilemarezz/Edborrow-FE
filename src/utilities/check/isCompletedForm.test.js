import { isCompletedForm } from "./isCompletedForm"

const emptyField = {
  name: "",
  surname: ""
}

const notEmptyField = {
  name: "a",
  surname: "a",
  email: "a",
  id: "a",
  telNo: "a",
  advisor: "a",
  purpose: "a"
}

describe("isCompletedForm.js", () => {
  describe("isCompleteForm", () => {
    describe("when step = 0 and cart.length > 0", () => {
      it("should return true", () => {
        expect(isCompletedForm(0, {}, ["1", "2"])).toEqual(true)
      })
    })
    describe("when step = 0 and cart.length <= 0", () => {
      it("should return false", () => {
        expect(isCompletedForm(0, {}, [])).toEqual(false)
      })
    })
    describe("when step != 0 and has enter field", () => {
      it("should return true", () => {
        expect(isCompletedForm(1, notEmptyField, [])).toEqual(true)
      })
    })
    describe("when step != 0 and has not enter field", () => {
      it("should return false", () => {
        expect(isCompletedForm(1, emptyField, [])).toEqual(false)
      })
    })
  })
})
