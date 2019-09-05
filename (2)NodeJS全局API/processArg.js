var arg1 = process.argv[2];
if(arg1 == undefined || arg1 == "-h") {
    console.log("请输入一个数学运算式");
} else {
    console.log(arg1 + "=" + eval(arg1));
}