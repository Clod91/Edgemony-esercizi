const express = require("express");
const { libri } = require("./libri");
const login = require("./login");

app.use(express.static("public"));

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/libri", (req, res) => {
  res.json(libri);
});

app.get("/libri/query", login, (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let filteredBook = [...libri];

  if (search) {
    filteredBook = filteredBook.filter((libro) => {
      return libro.price > 12(search);
    });
  }

  res.status(200).json(filteredBook);
});

app.listen(3031);
