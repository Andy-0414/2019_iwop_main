//animation
var I = document.getElementsByClassName("I")[0];
var W = document.getElementsByClassName("W")[0];
var O = document.getElementsByClassName("O")[0];
var P = document.getElementsByClassName("P")[0];

var IWOP = [I, W, O, P]
for (i in IWOP) {
    (function(i){
        setTimeout((x) => {
            IWOP[i].style.animation = 'textWave 5s infinite'
        }, i * 400)
    })(i)
}