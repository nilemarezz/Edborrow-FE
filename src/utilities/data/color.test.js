import { color } from './color'

describe("get correct color", () => {
    it("should return the set of color", () => {
        const expectedColor = {
            primary: "primary",
            secondary: "secondary",
            green: '#689f38',
            red: "#d32f2f",
            white: "white",
            yellow: '#ffc107',
            blue: '#0097a7',
            grey: '#757575',
            darkgrey: '#616161'
        }
        expect(color).toEqual(expectedColor);
    });
});