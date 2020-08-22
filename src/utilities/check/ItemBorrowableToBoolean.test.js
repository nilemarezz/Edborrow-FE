import { BooleanToItemBorrowable, ItemBorrowableToBoolean } from "./ItemBorrowableToBoolean"

describe("ItemBorrowableToBoolean.js", () => {
  describe("ItemBorrowableToBoolean", () => {
    describe("if value = 1", () => {
      it("should return true", () => {
        expect(ItemBorrowableToBoolean(1)).toEqual(true)
      })
    })
    describe("if value != 1", () => {
      it("should return false", () => {
        expect(ItemBorrowableToBoolean(3)).toEqual(false)
      })
    })
  })

  describe("BooleanToItemBorrowable.js", () => {
    describe("if value = true", () => {
      it("should return 1", () => {
        expect(BooleanToItemBorrowable(true)).toEqual(1)
      })
    })
    describe("if value = false", () => {
      it("should return 0", () => {
        expect(BooleanToItemBorrowable(false)).toEqual(0)
      })
    })
  })

})
