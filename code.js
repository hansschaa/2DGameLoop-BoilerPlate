var canvas;
var context;
var oldTimeStamp = 0;


function init()
{
    canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');
    
    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp)
{
    // Calculate how much time has passed
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Pass the time to the update
    gameUpdate(secondsPassed);
    gameDraw();

    window.requestAnimationFrame(gameLoop);
}

function gameUpdate(secondsPassed)
{

}

function gameDraw(timeStamp)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Background canvas color
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function showFPS(secondsPassed)
{
    var fps = Math.round(1 / secondsPassed);

    //Draw number to the screen
    context.fillStyle = 'white';
    context.fillRect(0, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 10, 30);
}

