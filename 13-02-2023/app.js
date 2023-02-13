const express = require("express");
const session = require("cookie-session");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "la mia sessione" }));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("/signup", {
      error: "Entrambi i campi devono essere compilati",
    });
  } else {
    let name = "Claudio";
    let password = "2791";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/secure");
    } else {
      res.redirect("/errore");
    }
  }
});

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/error");
  }
}

app.get("/secure", checkPage, (req, res) => {
  res.render("secure");
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.get("/disconnect", (req, res) => {
  req.session = null;
  res.redirect("/login");
});

app.listen(3030);
