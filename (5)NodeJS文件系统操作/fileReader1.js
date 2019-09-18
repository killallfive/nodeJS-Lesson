const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req, res) {
    /**
     * fs.readFile() 是一个异步方法，执行到该句
     * 不会等待文件读取完成，就执行后面的语句
     * 回调函数是等到文件读取完成之后才执行
     */
    if(fileName == undefined) {
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
        var filePath = path.join(__dirname, fileName);
        if(fs.existsSync(filePath)) {
            fs.readFile(filePath, function(err, data) {
                if(err) {
                    res.end(err);
                } else {
                    res.end(data.toString());
                }
            })
        } else {
            res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"});
            res.end("该文件不存在");
            // res.end("this file doesn't exist");
        }

    }
}).listen(8081);
console.log("server is listening 8081");