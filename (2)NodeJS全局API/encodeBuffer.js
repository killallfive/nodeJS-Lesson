var username = process.argv[2];
var password = process.argv[3];
console.log("用户名:" + username + " 密码:" + password);

if(username != undefined && password != undefined) {
    var loginStr = username + ": " + password;
    var buf = Buffer.from(loginStr, "utf-8");
    var loginBase64 = buf.toString("base64");
    console.log("base64加密：" + loginBase64);
} else {
    console.log(用户名和密码不能为空);
}