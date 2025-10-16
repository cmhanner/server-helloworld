var http = require("http");
const port = process.env.PORT || 3002; //  this is our port

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Chance!");
  })
  .listen(port);