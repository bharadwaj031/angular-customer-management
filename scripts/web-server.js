var web_server_express = require("express");
var path = require("path");
var application = web_server_express();
var rootPath = path.normalize(__dirname + '/../');


application.use(web_server_express.static(rootPath + '/app'));

application.listen(9000);
console.log('Starting Server @ localhost:9000');