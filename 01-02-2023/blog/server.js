const http = require("http");
const PORT = 3001;

const pagUtenti = `<!doctype html>
<html>
<head>
</head>
<body>
Questa è la pagina degli utenti
</body>
</html>`;

const prodotti = `<!doctype html>
<html>
<head>
</head>
<body>
Questa è la pagina dei Prodotti
</body>
</html>`;

const articoli = `<!doctype html>
<html>
<head>
</head>
<body>
Questa è la pagina degli Articoli
</body>
</html>`;

const server = http.createServer((req, res) => {
  console.log(`Server connesso alla porta ${PORT}`);
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/utenti") res.end(pagUtenti);
  else if (req.url === "/prodotti") res.end(prodotti);
  else if (req.url === "/articoli") res.end(articoli);
  else {
    res.writeHead(404);
    res.end("sorry not found");
  }
});

server.listen(PORT);
