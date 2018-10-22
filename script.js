"use strict"
//Pasiema mano html esanti canvas
let canvas = document.querySelector('#clock');

//pasakau kad gautu jo duomenys, kaip 2D formatu
let ctx = canvas.getContext('2d');
drow();
var number = 0;
function drow(){

if(number == 0){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);

}else if(number == 1){
ctx.fillStyle =  "black";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);

ctx.fillRect(60, 380, 170, 20);
}else if(number == 2){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "black";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 220, 20, 160);

ctx.fillRect(60, 380, 170, 20);
}else if(number == 3){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 4){
ctx.fillStyle =  "black";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 5){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "black";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 6){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "black";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 7){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 8){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);
}else if(number == 9){
ctx.fillStyle =  "red";
ctx.fillRect(60, 20, 170, 20);
ctx.fillStyle =  "red";
ctx.fillRect(230, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(40, 40, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 200, 170, 20);
ctx.fillStyle =  "red";

ctx.fillRect(230, 220, 20, 160);
ctx.fillStyle =  "black";
ctx.fillRect(40, 220, 20, 160);
ctx.fillStyle =  "red";
ctx.fillRect(60, 380, 170, 20);
}
setTimeout(() =>{
number++;
if(number == 10){
	number = 0;
}
drow();

},1000);

}

