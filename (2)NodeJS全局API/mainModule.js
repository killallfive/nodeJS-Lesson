var circleModule = require("./circleModule");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的周长为：" + circleObj.circumference().toFixed(1));
console.log("圆的面积为：" + circleObj.area().toFixed(1));