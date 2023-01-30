const errorMessages = require("../constants/errorMessages");
const validationQueryMiddlewares = require("../middlewares/validationQuery");
const { NUMBER_3, NUMBER_5, NUMBER_15, NUMBER_8 } = require("./fixtures");

describe("validationQueryMiddlewares functionality", () => {
  const mockRes = (message) => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(message);
    return res;
  };

  it("should return 'not found' message", () => {
    const mockedRes = mockRes(errorMessages.NOT_FOUND);
    const result = validationQueryMiddlewares({ query: {} }, mockedRes);

    expect(result).toBe(errorMessages.NOT_FOUND);
    expect(mockedRes.json).toHaveBeenCalled();
  });

  it("should return 'must be a number' message", () => {
    const mockedRes = mockRes(errorMessages.MUST_BE_A_NUMBER);
    const result = validationQueryMiddlewares(
      { query: { number: "test" } },
      mockedRes
    );

    expect(result).toBe(errorMessages.MUST_BE_A_NUMBER);
    expect(mockedRes.json).toHaveBeenCalled();
  });
});
