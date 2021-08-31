var http = require("http");

var server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text");
  res.end("Hello World!!!");
});

server.listen(8080);

console.log(`Node server started successfully on... ${server.address().port}`);
