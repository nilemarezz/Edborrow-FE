import {
  ApplicationDetailColumn,
  OptionApplicationDetailTable,
} from "./OptionApplicationDetailItemTable";
import { ApplicationTable } from "../../systemdata/Application";

describe("OptionApplicationDetailItemTable.js", () => {
  describe("ApplicationDetailColumn()", () => {
    it("should return 6 row", () => {
      expect(ApplicationDetailColumn().length).toEqual(8);
    });
    describe("First row is item id", () => {
      it("should return itemId", () => {
        expect(ApplicationDetailColumn()[0]['name']).toEqual(ApplicationTable.itemId.name);
      });
    });
    describe("Second row is item name", () => {
      it("should return itemName", () => {
        expect(ApplicationDetailColumn()[1]['name']).toEqual(ApplicationTable.itemName.name);
      });
    });
    describe("Third row is item image", () => {
      it("should return itemImage", () => {
        expect(ApplicationDetailColumn()[2]['name']).toEqual(ApplicationTable.itemImage.name);
      });
    });
    describe("Fourth row is item approve", () => {
      it("should return itemApprove", () => {
        expect(ApplicationDetailColumn()[3]['name']).toEqual(ApplicationTable.itemApprove.name);
      });
    });
    describe("Fifth row is item borrowing status id", () => {
      it("should return itemBorrowingStatusId", () => {
        expect(ApplicationDetailColumn()[4]['name']).toEqual(ApplicationTable.itemBorrowingStatusId.name);
      });
    });
    describe("Sixth row is reject purpose", () => {
      it("should return rejectPurpose", () => {
        expect(ApplicationDetailColumn()[7]['name']).toEqual(ApplicationTable.rejectPurpose.name);
      });
    });
  });
  describe("OptionApplicationDetailTable", () => {
    const expectDetailTableOption = {
      filterType: "checkbox",
      selectableRows: false,
      selectableRowsOnClick: true,
      responsive: "scrollMaxHeight",
    }
    expect(OptionApplicationDetailTable).toEqual(expectDetailTableOption);
  })
});
