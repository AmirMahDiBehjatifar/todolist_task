const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const { NotFoundRoute, ErrorHandler } = require("./utils/errorHandler");
const bodyParser = require("body-parser");
const router = require("./router");

dotenv.config();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
require("./config/mongo.config")

app.use(router)
app.use(NotFoundRoute);
app.use(ErrorHandler)
app.listen(PORT, () => {
    console.log(`server run on https://localhost:${PORT}/`);
})