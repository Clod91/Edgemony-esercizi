const express = require("express");
const hbs = require("hbs");

const app = express();

const myPreferences = {
  pet: "cane",
  color: "green",
  season: "estate",
};

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home", {
    titolo: "Home Page",
    myPreferences: myPreferences,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "Corso di Node.js",
  });
});

app.listen(3031);
