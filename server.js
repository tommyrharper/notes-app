
var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "./");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);


// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// })