const express = require("express");
let routerWork = express.Router();
const mongoose = require("mongoose");
const Work = mongoose.model("workModel");

routerWork.get("/works", (req, res) => {
  res.render("addupdateWork", {
    viewTitle: "Inserisci un lavoro",
  });
});

routerWork.post("/works", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let work = new Work();
  work.name = req.body.name;
  work.place = req.body.place;
  work.starting = req.body.starting;
  work.save((err, doc) => {
    if (!err) res.redirect("listWorks");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Work.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("listWorks");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

routerWork.get("/listWorks", (req, res) => {
  Work.find((err, docs) => {
    if (!err) {
      res.render("listWorks", {
        worklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

routerWork.get("/:id", (req, res) => {
  Work.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdateWork", {
        viewTitle: "Aggiornamento",
        work: doc,
      });
    }
  });
});

routerWork.get("/deleteWork/:id", (req, res) => {
  Work.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/listWorks");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = routerWork;
