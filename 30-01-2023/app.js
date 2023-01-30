const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/home")
    res.end("benvenuto nella pagina iniziale del coding bootcamp");
  else if (req.url === "/studenti")
    res.end("siamo 27 studenti da tutta Italia");
  else if (req.url === "/corso")
    res.end("il corso è un percorso di formazione che durerà fino ad Aprile");
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});
server.listen(3000);

// per raggiungere le tre pagine bisognerà digitare l'indirizzo localhost:3000/home per la prima, localhost:3000/studenti per la seconda e localhost:3000/corso per la terza.
