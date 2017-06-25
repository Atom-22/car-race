var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    lastTimestamp,
    imageX = 0,
    imageY1 = 0;

const firstCarImage = "http://img.clipartall.com/car-png-car-clipart-png-600_258.png";

canvas.width = 1000;
canvas.height = 200;

var firstImage = new Image();
firstImage.onload = function () {
    drawCar(firstImage, imageY1);
};

firstImage.src = firstCarImage;

function clearContext(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pouseButton");
var stopButton = document.getElementById("stopButton");

startButton.addEventListener('click',startButtonClickedHandler);
pauseButton.addEventListener('click',pauseCarAnimationHandler);
stopButton.addEventListener('click',stopCarAnimationHandler);
//

var requestAnimFrameId;

function startButtonClickedHandler() {
    startButton.disabled = true;
    startButton.textContent = 'Started';
    stopButton.textContent = 'Stop';
    pauseButton.textContent = 'Pause';
    requestAnimFrameId = requestAnimationFrame(drawAll);
}

function pauseCarAnimationHandler() {
    startButton.disabled = false;
    pauseButton.textContent = 'Paused';
    startButton.textContent = 'Start';
    stopButton.textContent = 'Stop';
    if(requestAnimFrameId){
        cancelAnimationFrame(requestAnimFrameId);
    }
}

function stopCarAnimationHandler(){
    startButton.disabled = false;
    stopButton.textContent = 'Stopped';
    startButton.textContent = 'Start';
    pauseButton.textContent = 'Pause';
    if(requestAnimFrameId !== undefined) {
        cancelAnimationFrame(requestAnimFrameId);
        imageX = 0;
        clearContext();
        drawCar(firstImage, imageY1);
    }
}

 function drawAll(){
        clearContext();
        drawCar(firstImage, imageY1);
        requestAnimFrameId = requestAnimationFrame(drawAll);
        stopCarOnTheEnd();
       }

function stopCarOnTheEnd() {
    if (imageX >= 800) {
        stopCarAnimationHandler();
    }
}

function drawCar(carImage, carImagePosY){
  var now = Date.now(),
        timeDelta = (now - (lastTimestamp || now)) / 1000;  // in seconds
    imageX += timeDelta + Math.random() * 2;                // meaning: random px per second
    ctx.drawImage(carImage, imageX, carImagePosY, 200, 80 );
    lastTimestamp = now;
}