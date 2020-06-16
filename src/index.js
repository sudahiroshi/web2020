var http = require("http");
var fs = require("fs");

//create a server object:
http
  .createServer(function(req, res) {
    console.log("URL = " + req["url"]);
    try {
      fs.statSync("." + req["url"]);
      let text = fs.readFileSync("." + req["url"]);
      res.write(text); //write a response to the client
    } catch (err) {
      let pattern = /\/$/;
      if (req["url"].match(pattern)) console.log("マッチ");
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
    }
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
