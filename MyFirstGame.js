var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    lastTimestamp,
    imageX = 0,
    imageY1 = 0,
    imageY2 = 120;

const firstCarImage = "http://img.clipartall.com/car-png-car-clipart-png-600_258.png";
const secondCarImage = "http://cliparting.com/wp-content/uploads/2016/05/Cartoon-car-clip-art-free-vector-for-free-download-about-free.jpg";

canvas.width = 700;
canvas.height = 200;

var firstImage = new Image();

firstImage.onload = function () {
    requestAnimationFrame(draw);
};

var secondImage = new Image();
secondImage.onload = function(){
    requestAnimationFrame(draw1);
};

firstImage.src = firstCarImage;
secondImage.src = secondCarImage;

function draw() {
    var now = Date.now(),
        timeDelta = (now - (lastTimestamp || now)) / 1000; // in seconds
    imageX += timeDelta + Math.random() * 2; // meaning: random px per second

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(firstImage, imageX,imageY1,200,80);

    lastTimestamp = now;
    requestAnimationFrame(draw);
}

function draw1() {
    var now = Date.now(),
        timeDelta = (now - (lastTimestamp || now)) / 1000; // in seconds
    imageX += timeDelta + Math.random() * 2; // meaning: random px per second

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(secondImage,imageX,imageY2,200,80);

    lastTimestamp = now;
    requestAnimationFrame(draw1);
}

// function callTwoFunctions(){
//     draw();
//     draw1();
// }


//
// var myCanvas = document.getElementById("myCanvas");
//
// var ctx=myCanvas.getContext("2d");
//
// const firstCarSrc= "http://img.clipartall.com/car-png-car-clipart-png-600_258.png";
//  const secondCarSrc = "http://cliparting.com/wp-content/uploads/2016/05/Cartoon-car-clip-art-free-vector-for-free-download-about-free.jpg";
//
//
// var imageObjFirstCar = new Image();
//
// imageObjFirstCar.onload = function() {
//
//     ctx.drawImage(imageObjFirstCar, 5, 5, 200, 80);
//     drawFirstCar(5,5);
// };
//
// imageObjFirstCar.src = firstCarSrc;
// debugger;
//
//
// function drawFirstCar(x, y){
//
//    // ctx.drawImage(imageObjFirstCar, x, y, 200, 80);
//
//     ctx.clearRect(0,5,700,100);
//     ctx.fillRect (x, y, 200, 80);
//     ctx.fillStyle = 'white';
//     ctx.fillStyle = ctx.drawImage(imageObjFirstCar, x, y, 200, 80);
//     ctx.restore();
//     x += Math.random()*10;
//
//     //var loopTimer =  setTimeout(drawFirstCar(x, y), 50);
//
//     var loopTimer = setTimeout('drawFirstCar('+x+','+y+')',50);
//     //clearTimeout(loopTimer);
// }
//
// var imageObjSecondCar = new Image();
//
// imageObjSecondCar.onload = function() {
//     ctx.drawImage(imageObjSecondCar, 5, 120, 200, 80);
//     drawSecondCar(5,120);
// };
// imageObjSecondCar.src = secondCarSrc;
//
//
// function drawSecondCar(x1, y1){
//
//     //ctx.drawImage(imageObjFirstCar, x1, y1, 200, 80);
//
//     ctx.clearRect(5,100,700,100);
//     ctx.fillRect (x1, y1, 200, 80);
//     ctx.fillStyle = 'white';
//     ctx.fillStyle = ctx.drawImage(imageObjSecondCar, x1, y1, 200, 80);
//     ctx.restore();
//     x1 += Math.random()*10;
//     var loopTimer = setTimeout('drawSecondCar('+x1+','+y1+')',50);
// }
