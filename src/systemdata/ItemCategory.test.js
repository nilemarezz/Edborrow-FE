import { ItemCategory } from './ItemCategory'

describe("get item category correct", () => {
    it("should return the set of item category", () => {
        const expectedItemCategory = [
            { id: 1, label: "Electronic" },
            { id: 2, label: "General" }
        ]
        expect(ItemCategory()).toEqual(expectedItemCategory);
    })
})
