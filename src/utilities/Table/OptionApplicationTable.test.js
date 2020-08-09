import {
  OptionApplicationTable,
  ApplicationColumn,
} from "./OptionApplicationTable";
import { ApplicationTable } from "../../systemdata/Application";

describe("OptionApplicationTable.js", () => {
  describe("ApplicationColumn()", () => {
    it("should return 4 row", () => {
      expect(ApplicationColumn().length).toEqual(4);
    });
    describe("first row is requestId", () => {
      it("should return requestId", () => {
        expect(ApplicationColumn()[0]["name"]).toEqual(
          ApplicationTable.requestId.name
        );
      });
    });
    describe("second row is transactionDate", () => {
      it("should return transactionDate", () => {
        expect(ApplicationColumn()[1]["name"]).toEqual(
          ApplicationTable.transactionDate.name
        );
      });
    });
    describe("third row is requestApprove", () => {
      it("should return requestApprove", () => {
        expect(ApplicationColumn()[2]["name"]).toEqual(
          ApplicationTable.requestApprove.name
        );
      });
    });
    describe("fourth row is requestId", () => {
      it("should return requestId", () => {
        expect(ApplicationColumn()[3]["name"]).toEqual(
          ApplicationTable.requestId.name
        );
      });
    });
  });

  describe("OptionApplicationTable", () => {
    const expectApplicationTableOption = {
      selectableRows: false,
      filterType: "textField",
      selectableRowsOnClick: true,
      responsive: "scrollMaxHeight",
      download: false,
      print: false,
    };
    expect(OptionApplicationTable).toEqual(expectApplicationTableOption);
  });
});
