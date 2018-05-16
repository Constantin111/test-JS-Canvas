
var colorTd = document.getElementsByTagName('td');
var result = document.getElementById('resultat');

////////////// смена цвета по клику
for (var i = 0; i < colorTd.length; i++) {
    colorTd[i].onclick = fcolTd;
}

function fcolTd () {
    this.classList.toggle("black");
    start();
}

////////////// смена цвета по клику - end

var time = new Date();

function reloadDate() {
 time.setHours(0);
 time.setMinutes(0);
 time.setSeconds(0);
}

reloadDate();

var timeContainer = document.getElementById('timer').textContent = time.toLocaleTimeString();

function showTimer() {
 time.setSeconds(time.getSeconds() + 1);
 document.getElementById('timer').textContent = time.toLocaleTimeString();
}

var interval;
function start() {
 if(interval != null) return;

 interval = setInterval(function() {
  showTimer(); 
 }, 1000);
}

function reloadTimer() {
 if(interval == null) return;

 clearInterval(interval);
 reloadDate();

 document.getElementById('timer').textContent = time.toLocaleTimeString();
 interval = null;

 start();
}
//colorTd.onclick = start();


// таймер   ////////

var totearnleft = document.getElementById('tearn-left');
var totearnright = document.getElementById('tearn-right');
var square = document.getElementById('squarel');
//var rot = getDegreeElementById(squarel);
    function getDegreeElementById(squarel){
    var element = document.getElementById('squarel');
    var style = window.getComputedStyle(element, null);
    // получаем значение стилей
    var valueStyle = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform");
    // если стилей нет, то угол 0 градусов
    if(valueStyle == 'none') return 0;
    // разбираем полученное значение
    console.log(valueStyle);
    var values = valueStyle.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    // получаем синус и косинус
    var cos = values[0];
    var sin = values[1];
    // вычисляем угол
    var degree = Math.round(Math.asin(sin) * (180/Math.PI));
    if(cos<0){
        addDegree = 90 - Math.round(Math.asin(sin) * (180/Math.PI));
        degree = 90 + addDegree;
    }
    if(degree < 0){
        degree = 360 + degree;
    }
    return degree;
};



totearnleft.onmousedown = function() {
  let rot = getDegreeElementById(squarel);
  var myInterval = setInterval(function() {
  square.style.WebkitTransform = "rotate("+rot+"deg)"; 
   // Code for IE9
  square.style.msTransform = "rotate("+rot+"deg)"; 
    // Standard syntax
  square.style.transform = "rotate("+rot+"deg)"; 
  rot--;}, 10);
  this.onmouseup = function(){ clearInterval(myInterval); }
  this.onmouseout = function(){ clearInterval(myInterval);
    }
}

totearnright.onmousedown = function () {
  let rot = getDegreeElementById(squarel);
  var myInterval = setInterval(function() {
  square.style.WebkitTransform = "rotate("+rot+"deg)"; 
   // Code for IE9
  square.style.msTransform = "rotate("+rot+"deg)"; 
    // Standard syntax
  square.style.transform = "rotate("+rot+"deg)"; 
  rot++;}, 10);
  this.onmouseup = function(){ clearInterval(myInterval);
    }
  this.onmouseout = function(){ clearInterval(myInterval);
    }
}

var piksel = document.getElementById('piksel');
var timeRes = document.getElementById('time-res');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



result.onclick = function canvasRect() {
    interval = clearInterval(interval);
    timeVal = document.getElementById('timer').innerHTML;
    timeRes.innerHTML = timeVal;
    let rot = getDegreeElementById(squarel);
    canvas.style.WebkitTransform = "rotate("+rot+"deg) scale(0.5)"; 
   // Code for IE9
  canvas.style.msTransform = "rotate("+rot+"deg) scale(0.5)"; 
    // Standard syntax
  canvas.style.transform = "rotate("+rot+"deg) scale(0.5)";
    for (var i = 0; i < colorTd.length; i++) {
        x = colorTd[i].offsetLeft;
        y = colorTd[i].offsetTop;
        h = 97;
        z = 99;
        bg =  window.getComputedStyle(colorTd[i]).backgroundColor;;
        ctx.beginPath();
        ctx.rect(x, y, h, z);
        ctx.fillStyle = bg;
        ctx.closePath();
        ctx.fill();
    }    
}


//totearn.onclick = function (){
//   square.style.cssText = 'transform:rotate('+rot+'deg);';
//    rot++;
//}

//totearn.onclick = function () {
//    // Code for Safari
//    square.style.WebkitTransform = "rotate("+rot+"deg)"; 
//    // Code for IE9
//    square.style.msTransform = "rotate("+rot+"deg)"; 
//    // Standard syntax
//    square.style.transform = "rotate("+rot+"deg)"; 
//    rot++;
//}

//totearn.onmousedown = function rotate() {
//while (totearn.onmousedown = true) {
//  // Code for Safari
//    square.style.WebkitTransform = "rotate("+rot+"deg)"; 
//    // Code for IE9
//    square.style.msTransform = "rotate("+rot+"deg)"; 
//    // Standard syntax
//    square.style.transform = "rotate("+rot+"deg)"; 
//    rot++;
//    setInterval(rotate(), 10);
//}
//    
//    }

//var time = document.getElementById("timer");
//var timerse = new Date();
//var timerm = timerse.setMinutes(1);
//var timers = timerse.setSeconds(1);
//    timerm = timerse.getMinutes();
//    timers = timerse.getSeconds();
//    timerm=((timerm < 10) ? "0" : "") + timerm;
//    timers =((timers < 10) ? "0" : "") + timers;
//
//function timerClock(){               
//        time.innerHTML = timerm + " : " + timers;
//        timerClock();
//      }

//setInterval(timerClock,1000);




