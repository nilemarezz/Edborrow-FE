import { ItemCategory } from './ItemCategory'

describe("get item category correct", () => {
  it("should return the set of item category", () => {
    const expectedItemCategory = [
      { id: 1, label: "Electronic" },
      { id: 2, label: "General" },
      { id: 3, label: "Office" },
      { id: 4, label: "Laboratory" },
      { id: 5, label: "Sport" },
      { id: 6, label: "Other" },
    ]
    expect(ItemCategory()).toEqual(expectedItemCategory);
  })
})
