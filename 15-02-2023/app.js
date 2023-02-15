const MongoClient = require("mongodb").MongoClient;
let url = "mongodb+srv://never91:clalor2791@cluster0.yyjysxs.mongodb.net/test";

MongoClient.connect(url).then((db) => {
  accountsDb = db;
  collection = accountsDb.db("school");
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("students", function (err, res) {
    if (err) throw err;
    db.close();
  });
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("courses", function (err, res) {
    if (err) throw err;
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let studentsObj = [
    {
      nome: "franco",
      cognome: "rosi",
      corsi: ["informatica", "elettronica"],
      esami: ["javascript", "logica"],
      matricola: "1a56d0",
    },
    {
      nome: "carla",
      cognome: "lerino",
      corsi: ["lettere", "storia"],
      esami: [
        "diritto dei beni culturali",
        "letteratura greca",
        "storia delle religioni",
      ],
      matricola: "2d41d3",
    },
    {
      nome: "giulio",
      cognome: "conti",
      corsi: ["informatica", "matematica"],
      esami: ["node.js", "analisi2"],
      matricola: "4a78a0",
    },
    {
      nome: "andrea",
      cognome: "pinti",
      corsi: ["storia", "elettronica"],
      esami: ["storia romana", "analisi"],
      matricola: "5s21e2",
    },
    {
      nome: "sara",
      cognome: "lee",
      corsi: ["diritto", "lettere"],
      esami: ["storia romana", "diritto privato"],
      matricola: "2q12x5",
    },
    {
      nome: "dario",
      cognome: "curso",
      corsi: ["informatica", "matematica"],
      esami: ["analisi", "integrali"],
      matricola: "8w95a2",
    },
    {
      nome: "giulia",
      cognome: "rosi",
      corsi: ["matematica", "elettronica"],
      esami: ["resistenze", "analisi2"],
      matricola: "8s95w7",
    },
    {
      nome: "marco",
      cognome: "lurco",
      corsi: ["storia", "informatica"],
      esami: ["storia romana", "java"],
      matricola: "5s21e2",
    },
  ];

  dbase.collection("students").insertMany(studentsObj, (err, res) => {
    if (err) throw err;
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let coursesObj = [
    {
      nome: "storia",
      materie: ["storia", "lettere antiche", "geopolitica"],
      docenti: ["frassi", "gorlo", "palombo"],
    },
    {
      nome: "lettere",
      materie: ["letteratura moderna", "lettere antichw", "inglese"],
      docenti: ["bernino", "gorlo", "lucioni"],
    },
    {
      nome: "diritto",
      materie: ["diritto privato", "diritto civile"],
      docenti: ["berni", "soriano"],
    },
    {
      nome: "informatica",
      materie: ["fronthand", "backhand"],
      docenti: ["pelle", "chiesa"],
    },
    {
      nome: "matematica",
      materie: ["logica", "integrali", "dimostrazioni"],
      docenti: ["poli", "gatti", "calabria"],
    },
    {
      nome: "elettronica",
      materie: ["logica", "sistemi"],
      docenti: ["poli", "verre"],
    },
  ];

  dbase.collection("courses").insertMany(coursesObj, (err, res) => {
    if (err) throw err;
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.collection("students").findOne({}, (err, res) => {
    if (err) throw err;
    console.log(res.nome);
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { cognome: "rosi" };
  dbase
    .collection("students")
    .find(query)
    .toArray(function (err, res) {
      if (err) throw err;
      db.close();
    });
});
// Elimina uno
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school");

//     let query = {nome:"franco"}
//     dbase.collection("students").deleteOne(query, function(err, obj) {
//         if (err) throw err;
//         db.close();
//     })
// })

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let query = { nome: "marco" };
  let newValue = { $set: { cognome: "amiro", matricola: "0w25s1" } };
  dbase.collection("utenti").updateOne(query, newValue, function (err, res) {
    if (err) throw err;
    db.close();
  });
});
