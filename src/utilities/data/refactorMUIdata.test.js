import { CartItem } from './refactorMUIdata'

describe("refactor card item correct", () => {
    it("should return the card item in object", () => {
        const mockItem = ["item[0]", "item[1]", "item[2]", "item[3]",]
        const expectedInstruction = {
            itemId: "item[0]",
            itemName: "item[1]",
            itemImage: "item[2]",
            departmentId: "item[3]",
        };
        expect(CartItem(mockItem)).toEqual(expectedInstruction);
    });
});
