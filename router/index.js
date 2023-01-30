const Router = require("express").Router;
const calculationController = require("../controllers/calculation-controller");
const validationQueryMiddleware = require("../middlewares/validationQuery");

const router = new Router();

/* if we will have more routes would be better move all pathes (string) to constants */

router.get(
  "/get-letter",
  validationQueryMiddleware, // we can add more middlewares here if will be needed
  calculationController.getLetter
);

module.exports = router;
