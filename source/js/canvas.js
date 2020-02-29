var x = 200;
var y = 200;
var inverseX = false;
var inverseY = false;
var velocity = 3;
var shape = 0;


// set canvas element to a variable
var canvas = document.getElementById("canvas");

// set canvas width and height
canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

// set canvas drawing context
var ctx = canvas.getContext('2d');

// // Rectangles

// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = 'rgba(0, 0, 255, .5)';
// ctx.fillRect(300, 200, 100, 100);

// // Lines

// ctx.beginPath();
// ctx.moveTo(600, 300);
// ctx.lineTo(650, 330);
// ctx.lineTo(680, 270);
// ctx.lineTo(600, 300);
// ctx.strokeStyle = "#fa334d";
// ctx.stroke();

// // Arcs
function circle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.stroke(); 
}
function square(x, y){
    ctx.fillRect(x - 30, y - 30, 60, 60);
}

function triangle(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y + 30);
    ctx.lineTo(x - 15, y + 30 + (Math.sqrt(675)));
    ctx.lineTo(x + 15, y + 30 + (Math.sqrt(675)));
    ctx.lineTo(x, y + 30);
    ctx.strokeStyle = "#fa334d";
    ctx.stroke();
}
// ctx.beginPath();
// ctx.arc(350, 500, 30, 0, Math.PI * 2, false);
// ctx.stroke();


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    setPosition();
    showText();
}

function setPosition(){
    drawShape(x, y);
    if(inverseX){
        x -= velocity;
    }
    else{
        x += velocity;
    }
    if(inverseY){
        y -= velocity;
    }else{
        y += velocity;
    }

    if(x >= canvas.width - 30){
        inverseX = true;
        shape += 1;
    }
    if(x <= 30){
        inverseX = false;
        shape += 1;
    }
    if(y >= canvas.height - 30){
        inverseY = true;
        shape += 1;
    }
    if(y <= 30){
        inverseY = false;
        shape += 1;
    }
    if(shape == 3){
        shape = 0;
    }
}

function drawShape(x, y) {
    ctx.beginPath();
    switch(shape){
        case 0:
            circle(x, y);
            break;
        case 1:
            square(x, y);
            break;
        case 2:
            triangle(x, y);
            break;
    }
}

function showText(){
    ctx.font = "30px Arial";
    ctx.fillText("Animation Example", 10, 50);
}


animate();