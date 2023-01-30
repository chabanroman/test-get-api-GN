const errorMessages = require("../constants/errorMessages");
const { NUMBER } = require("../constants/queryParamsKeys");

module.exports = (req, res, next) => {
  const { query } = req;

  if (!Object.keys(query).length) {
    console.error(errorMessages.NOT_FOUND);
    return res.status(404).json({ message: errorMessages.NOT_FOUND });
  }

  if (isNaN(Number(query[NUMBER]))) {
    console.error(errorMessages.MUST_BE_A_NUMBER);
    return res.status(400).json({ message: errorMessages.MUST_BE_A_NUMBER });
  }

  next();
};
