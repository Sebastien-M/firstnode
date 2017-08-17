// import fs from "fs";
var result;
var http = require('http');
let database = require("./database");
let json = database.request(function callback(json) {
    // console.log(json);
    result = json;
});



http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    for (var index = 0; index < result.length; index++) {
        res.write("<p>Nom : " + result[index].name + "</p>");
        res.write("<p>Race : " + result[index].race + "</p>");
        res.write("<p>Date de naissance : " + result[index].birthdate + "</p></br></br>");
    }
    res.end();
}).listen(8081);
console.log("Server listening");


process.on('SIGINT', function () {
    console.log("Caught interrupt signal");
    process.exit();
});