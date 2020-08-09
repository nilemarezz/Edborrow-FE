import { ItemColumns, OptionItemTable } from './OptionTable'
import { ItemTable } from '../../systemdata/Item'
describe("OptionTable.js", () => {
  describe("ItemColumns()", () => {
    it("should return 7 row", () => {
      expect(ItemColumns().length).toEqual(7);
    });
    describe("first row is itemId", () => {
      it("should return itemId", () => {
        expect(ItemColumns()[0]['name']).toEqual(ItemTable.itemId.name);
      })
    })
    describe("second row is itemName", () => {
      it("should return itemName", () => {
        expect(ItemColumns()[1]['name']).toEqual(ItemTable.itemName.name);
      })
    })
    describe("first row is itemImage", () => {
      it("should return itemImage", () => {
        expect(ItemColumns()[2]['name']).toEqual(ItemTable.itemImage.name);
      })
    })
    describe("first row is departmentName", () => {
      it("should return departmentName", () => {
        expect(ItemColumns()[3]['name']).toEqual(ItemTable.departmentName.name);
      })
    })
    describe("first row is itemAvailability", () => {
      it("should return itemAvailability", () => {
        expect(ItemColumns()[4]['name']).toEqual(ItemTable.itemAvailability.name);
      })
    })
    describe("first row is itemId", () => {
      it("should return itemId", () => {
        expect(ItemColumns()[5]['name']).toEqual(ItemTable.itemId.name);
      })
    })
    describe("first row is ownerName", () => {
      it("should return ownerName", () => {
        expect(ItemColumns()[6]['name']).toEqual(ItemTable.ownerName.name);
      })
    })
  })

  describe("OptionItemTable", () => {
    const expectTableOption = {
      selectableRows: false,
      filterType: "textField",
      selectableRowsOnClick: true,
      responsive: "scrollMaxHeight",
      download: false,
      print: false,
    }
    expect(OptionItemTable).toEqual(expectTableOption);
  })
});