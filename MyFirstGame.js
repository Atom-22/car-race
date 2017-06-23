
var myCanvas = document.getElementById("myCanvas");

var ctx=myCanvas.getContext("2d");

const firstCarSrc= "http://img.clipartall.com/car-png-car-clipart-png-600_258.png";
const secondCarSrc = "http://cliparting.com/wp-content/uploads/2016/05/Cartoon-car-clip-art-free-vector-for-free-download-about-free.jpg";


var imageObjFirstCar = new Image();

imageObjFirstCar.onload = function() {

    ctx.drawImage(imageObjFirstCar, 5, 5, 200, 80);
    drawFirstCar(5,5);
};

imageObjFirstCar.src = firstCarSrc;
debugger;


function drawFirstCar(x, y){

   // ctx.drawImage(imageObjFirstCar, x, y, 200, 80);

    ctx.clearRect(0,5,700,100);

    ctx.fillRect (x, y, 200, 80);
    ctx.fillStyle = 'white';
    ctx.fillStyle = ctx.drawImage(imageObjFirstCar, x, y, 200, 80);
    ctx.restore();
    x += Math.random()*10;

    //var loopTimer =  setTimeout(drawFirstCar(x, y), 50);

    var loopTimer = setTimeout('drawFirstCar('+x+','+y+')',100);
    //clearTimeout(loopTimer);

}



var imageObjSecondCar = new Image();

imageObjSecondCar.onload = function() {
    ctx.drawImage(imageObjSecondCar, 5, 120, 200, 80);
    drawSecondCar(5,120);
};
imageObjSecondCar.src = secondCarSrc;


function drawSecondCar(x1, y1){

    //ctx.drawImage(imageObjFirstCar, x1, y1, 200, 80);

    ctx.clearRect(5,100,700,100);

    ctx.fillRect (x1, y1, 200, 80);
    ctx.fillStyle = 'white';
    ctx.fillStyle = ctx.drawImage(imageObjSecondCar, x1, y1, 200, 80);
    ctx.restore();
    x1 += Math.random()*10;
    var loopTimer = setTimeout('drawSecondCar('+x1+','+y1+')',50);
}




