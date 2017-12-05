var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    lastTimestamp,
    imageX = 0,
    imageY1 = 0;

const firstCarImage = "https://cdn.pixabay.com/photo/2015/09/23/10/20/car-953357_960_720.png";

canvas.width = window.innerWidth;
canvas.height = 80;

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
const  audio  = document.getElementById('audio');
var nightButton = document.getElementById('night');

startButton.addEventListener('click',startButtonClickedHandler);
pauseButton.addEventListener('click',pauseCarAnimationHandler);
stopButton.addEventListener('click',stopCarAnimationHandler);
nightButton.addEventListener('click',doNight);

var requestAnimFrameId;

function startButtonClickedHandler() {
    setTimeout(doNight(), 5000);
    startButton.disabled = true;
    startButton.textContent = 'Started';
    stopButton.textContent = 'Stop';
    pauseButton.textContent = 'Pause';
    playAudio();
    requestAnimFrameId = requestAnimationFrame(drawAll);
}

function pauseCarAnimationHandler() {
    startButton.disabled = false;
    pauseButton.textContent = 'Paused';
    startButton.textContent = 'Start';
    stopButton.textContent = 'Stop';
    pauseAudio();
    if(requestAnimFrameId){
        cancelAnimationFrame(requestAnimFrameId);
    }
}

function stopCarAnimationHandler(){
    startButton.disabled = false;
    stopButton.textContent = 'Stopped';
    startButton.textContent = 'Start';
    pauseButton.textContent = 'Pause';
    stopAudio();
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
    if (imageX >= window.innerWidth - 200) {
        stopCarAnimationHandler();
    }
}

function drawCar(carImage, carImagePosY){
  var now = Date.now(),
        timeDelta = (now - (lastTimestamp || now)) / 1000;  // in seconds
    imageX += timeDelta + Math.random() * 2;                // meaning: random px per second
    ctx.drawImage(carImage, imageX, carImagePosY, 200, 90 );
    lastTimestamp = now;
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.load();
}

function doNight() {
    pauseCarAnimationHandler();
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // canvas.style.opacity = '0.3';
}

