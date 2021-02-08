const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const directory = require("./directory.json");

const indexRouter = require("./routes/index");
const directoryRouter = require("./routes/directory");
const pathRouter = require("./routes/path");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// main api route for the client
app.use("/path", pathRouter({ directory }));
// show all directories for developement purpose
app.use("/directory", directoryRouter({ directory }));

module.exports = app;
