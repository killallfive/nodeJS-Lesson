const http = require("http");
const fs = require("fs");
const path = require("path");
// var filePath = path.join(__dirname, "/file.txt");
http.createServer(function(req, res) {
    if(process.argv[2] == undefined) {
        fs.readFile(__filename, function(err, data) {
            if(err) {
                res.write(err);
                res.end();
            } else {
                res.write(data.toString());
                res.end();
            }
        })
    } else {
        var filePath = path.join(__dirname, "/" + process.argv[2])
        fs.readFile(filePath, function(err, data) {
            if(err) {
                res.write("The path doesn't exist");
                res.end();
            } else {
                res.write(data.toString());
                res.end();
            }
        })
    }
}).listen(8081);