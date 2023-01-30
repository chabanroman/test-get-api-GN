const { calculateMultipleNumber } = require("../services");
const { NUMBER_3, NUMBER_5, NUMBER_15, NUMBER_8 } = require("./fixtures");

describe("calculateMultipleNumber functionality", () => {
  it("should return G", () => {
    const res = calculateMultipleNumber(NUMBER_3);

    expect(res).toBe("G");
  });

  it("should return N", () => {
    const res = calculateMultipleNumber(NUMBER_5);

    expect(res).toBe("N");
  });

  it("should return N", () => {
    const res = calculateMultipleNumber(NUMBER_15);

    expect(res).toBe("GN");
  });

  it("should return enter number", () => {
    const res = calculateMultipleNumber(NUMBER_8);

    expect(res).toBe(NUMBER_8);
  });
});
