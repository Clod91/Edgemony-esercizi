const express = require("express");
const router = require("./router");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use("/", router);

app.listen(3030);
