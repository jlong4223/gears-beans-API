const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();
require("./config/database");
require('./config/nodemailer');

const allRoutes = require("./routes/allRoutes");

//want to parse incoming json data?
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use(
  "/",
  allRoutes.map((eachRoute) => eachRoute)
);

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express is running on port: ${port}`);
});
