import {
  ApplicationColumn,
  ApplicationOptions,
} from "./OptionApplicationTable.admin";
import { ApplicationTable } from "../../systemdata/Application";

describe("OptionApplicationTable.admin.js", () => {
  describe("ApplicationColumn()", () => {
    it("should return 11 row", () => {
      expect(ApplicationColumn().length).toEqual(11);
    });
    describe("first row is requestId", () => {
      it("should return requestId", () => {
        expect(ApplicationColumn()[0]["name"]).toEqual(
          ApplicationTable.requestId.name
        );
      });
    });
    describe("second row is itemId", () => {
      it("should return itemId", () => {
        expect(ApplicationColumn()[1]["name"]).toEqual(
          ApplicationTable.itemId.name
        );
      });
    });
    describe("third row is itemName", () => {
      it("should return itemName", () => {
        expect(ApplicationColumn()[2]["name"]).toEqual(
          ApplicationTable.itemName.name
        );
      });
    });
    describe("fourth row is transactionDate", () => {
      it("should return transactionDate", () => {
        expect(ApplicationColumn()[3]["name"]).toEqual(
          ApplicationTable.transactionDate.name
        );
      });
    });
    describe("fifth row is itemApprove", () => {
      it("should return itemApprove", () => {
        expect(ApplicationColumn()[4]["name"]).toEqual(
          ApplicationTable.itemApprove.name
        );
      });
    });
    describe("sixth row is itemBorrowingStatusId", () => {
      it("should return itemBorrowingStatusId", () => {
        expect(ApplicationColumn()[5]["name"]).toEqual(
          ApplicationTable.itemBorrowingStatusId.name
        );
      });
    });
    describe("seventh row is userId", () => {
      it("should return userId", () => {
        expect(ApplicationColumn()[6]["name"]).toEqual(
          ApplicationTable.userId.name
        );
      });
    });
    describe("eighth row is usePlace", () => {
      it("should return usePlace", () => {
        expect(ApplicationColumn()[7]["name"]).toEqual(
          ApplicationTable.usePlace.name
        );
      });
    });
    describe("ninth row is borrowPurpose", () => {
      it("should return borrowPurpose", () => {
        expect(ApplicationColumn()[8]["name"]).toEqual(
          ApplicationTable.borrowPurpose.name
        );
      });
    });
    describe("tenth row is borrowDate", () => {
      it("should return borrowDate", () => {
        expect(ApplicationColumn()[9]["name"]).toEqual(
          ApplicationTable.borrowDate.name
        );
      });
    });
    describe("eleventh row is returnDate", () => {
      it("should return returnDate", () => {
        expect(ApplicationColumn()[10]["name"]).toEqual(
          ApplicationTable.returnDate.name
        );
      });
    });
  });
});
