const { NUMBER } = require("../constants/queryParamsKeys");
const { calculateMultipleNumber } = require("../services");

class CalculationController {
  async getLetter(req, res, next) {
    const { query } = req;
    try {
      const result = calculateMultipleNumber(query[NUMBER]);

      res.send(result);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
}

module.exports = new CalculationController();
