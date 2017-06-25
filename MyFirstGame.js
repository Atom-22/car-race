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
    drawCar(firstImage, imageY1);
};


var secondImage = new Image();
secondImage.onload = function(){
   drawCar(secondImage, imageY2);
};


firstImage.src = firstCarImage;
secondImage.src = secondCarImage;

function clearContext(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var startButton = document.getElementById("redBut");

startButton.addEventListener('click', startButtonClickedHandler);

function startButtonClickedHandler() {
     requestAnimationFrame(drawAll);
} 

 function drawAll(){
        clearContext();
        drawCar(firstImage, imageY1);
        drawCar(secondImage, imageY2);
        requestAnimationFrame(drawAll);
    }

function drawCar(carImage, carImagePosY){
  var now = Date.now(),
        timeDelta = (now - (lastTimestamp || now)) / 1000; // in seconds
    imageX += timeDelta + Math.random() * 2; // meaning: random px per second

    ctx.drawImage(carImage, imageX, carImagePosY, 200, 80 );

    lastTimestamp = now;
}

