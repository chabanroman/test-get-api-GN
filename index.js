require("dotenv").config();
const express = require("express");
const DEFAULT_VALUES = require("./constants/defaultValues");
const router = require("./router");

const PORT = process.env.PORT || DEFAULT_VALUES.PORT;
const app = express();

app.use(express.json());
app.use("/api", router);

/* here we can add more configs. E.g. cors or cookieParser, connection to db ... */

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
