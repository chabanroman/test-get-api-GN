const {
  MULTIPLE_NUMBERS,
  RETURNED_VALUES_BASED_ON_NUMBER,
  NUMBER_0,
} = require("../constants/defaultValues");

module.exports = {
  calculateMultipleNumber: (number) => {
    let result = "";

    for (const [index, multipleNumber] of MULTIPLE_NUMBERS.entries()) {
      if (number % multipleNumber === NUMBER_0) {
        result = result + RETURNED_VALUES_BASED_ON_NUMBER[index];
      }
    }

    return result || number;
  },
};
