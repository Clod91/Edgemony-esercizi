const express = require("express");
const app = express();
const articoli = require("./articoli.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/articoli", (req, res) => {
  const { title, body, tags } = req.body;

  if (!title || !body || !tags) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(201)
    .json({ success: true, person: { title: title, body: body, tags: tags } });
});

app.put("/api/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const articolo = articoli.find((articolo) => articolo.id === Number(id));

  if (!articolo) {
    return res.status(400).json({
      success: false,
      msg: `non c'è nessun articolo a questo id: ${id}`,
    });
  }

  const nuoviArticoli = articoli.map((articolo) => {
    if (articolo.id === Number(id)) {
      (articolo.title = title), (articolo.body = body);
    }
    return articolo;
  });
  res.status(201).json({ success: true, data: nuoviArticoli });
});

app.delete("/api/articoli/:id", (req, res) => {
  const articolo = articoli.find(
    (articolo) => articolo.id === Number(req.params.id)
  );
  if (!articolo) {
    return res.status(400).json({
      success: false,
      msg: `non c'è nessun articolo a questo id: ${req.params.id}`,
    });
  }
  const nuoviArticoli = articoli.filter(
    (articolo) => articolo.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: nuoviArticoli });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto/a ${name}`);
  } else {
    return res.status(400).send("l'username inserito è sbagliato");
  }
});

app.listen(3032);
