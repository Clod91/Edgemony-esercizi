const express = require("express");
const router = express.Router();

router.use(express.static("./public"));

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", {
    title: "Formazione",
  });
});

router.get("/webdesign", (req, res) => {
  res.render("web-design", {
    title: "Web Design",
  });
});

router.get("/*", (req, res) => {
  res.render("404");
});

module.exports = router;
