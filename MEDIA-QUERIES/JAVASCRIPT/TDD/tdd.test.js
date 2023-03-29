import { rectangleArea, invalidParamType } from "./tdd";

describe("Test cases for a function that calculates the area of the rectangle", () => {
    //it will work the same way if we use it or test

    it("valid params", () => {
        expect(rectangleArea(5, 5)).toBe(25);
        expect(rectangleArea(23, 10)).toBe(230);
    });
    it("decimals", () => {
        expect(rectangleArea(1.2, 2.3)).toBe(2.76);
    });
    it("throw error", () => {
        expect(() => {
            rectangleArea("dsad", "dasda");
        }).toThrow(invalidParamType);
        // expect(rectangleArea(2, []));
    });
});
