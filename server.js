const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// TODO require .dotenv

// TODO require database file

//want to parse incoming json data?
app.use(express.json());
//want to avoid those cors errors?
app.use(cors());
//want to know if morgan is running?
app.use(logger("dev"));

// TODO define your routes

// 6. Define and run the port at 3001
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express is running on port: ${port}`);
});
