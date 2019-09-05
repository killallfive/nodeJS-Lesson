var Bomb = function() {
    this.message = "bomb!!!";
    this.explode = function() {
        console.log(this.message);
    }
}
var bomb = new Bomb();
// setTimeout(function() {
//     bomb.explode();
// }, 2000);
setTimeout(() => {
    bomb.explode();
}, 2000);