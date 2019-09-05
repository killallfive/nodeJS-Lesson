var i = 0;
var arr1 = ["Name", "Email", "QQ", "Mobile"];
var arr2 = [];
console.log(arr1[i] + ":");
process.stdin.on("data", function(data) {
    arr2[i] = data.toString();
    i++;
    if(i == 4) {
        var user = {
            Name : arr2[0],
            Email : arr2[1],
            QQ : arr2[2],
            Mobile : arr2[3]
        }
        console.log("%j", user);
        process.exit();
    } else {
        console.log(arr1[i] + ":");
    }
})