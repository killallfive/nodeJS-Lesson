var loopit = setInterval(() => {
    loop();
}, 500);
function loop() {
    console.log("I will loop forever!");
}
setTimeout(() => {
    clearInterval(loopit);
    console.log("Game over");
}, 5000);