const events = require("events");
var EventEmitter = new events.EventEmitter();
const dog = require("./dog");

var dog1 = new dog.Dog("taidi", 4);
var dog2 = new dog.Dog("zangao", 8);
dog1.on("bark", () => {
    if (dog1.energy >= 0) {
        console.log(dog1.name + " barked! energy:" + dog1.energy);
        dog1.energy--;
    } else {
        process.exit();
    }
});
dog2.on("bark", () => {
    if (dog2.energy >= 0) {
        console.log(dog2.name + " barked! energy:" + dog2.energy);
        dog2.energy--;
    } else {
        process.exit();
    }
});