const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/store", (req, res) => {
  res.sendFile(__dirname + "/public/store.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/error.html");
});

app.listen(8082);
