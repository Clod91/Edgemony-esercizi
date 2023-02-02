const http = require("http");
const fs = require("fs");
const libri = require("./libri.json");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("home.html");
    res.end(html);
  } else if (req.url === "/about_me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    html = fs.readFileSync("about_me.html");
    res.end(html);
  } else if (req.url === "/libri") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(libri));
  } else {
    res.writeHead(404);
    res.end("sorry not found");
  }
});

server.listen(8081);
