import { ItemColumns } from './OptionTable'

describe("Utilities table option table", () => {
    it("should return array of the table options", () => {

        expect(ItemColumns().length).toEqual(7);
    });
});