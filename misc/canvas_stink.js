
$(function(){
  
// Canvas for Image


// ================================================
// myCanvas Note Pad 1

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const canvas3 = document.getElementById('myCanvas');
const context3 = canvas3.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas3.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas3.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context3, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context3, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context3, x1, y1, x2, y2) {
  context3.beginPath();
  context3.strokeStyle = 'black';
  context3.lineWidth = 5;
  context.lineJoin = "round";
  context3.moveTo(x1, y1);
  context3.lineTo(x2, y2);
  context3.stroke();
  context3.closePath();
}

// Add submit function
var submit_btn = document.getElementById('submit_btn');
// submit_btn.addEventListener('click', function() {console.log('test')});
submit_btn.addEventListener('click', submit_image);
function submit_image() {
  console.log('test');
  image_array=context3.getImageData(0, 0, canvas3.width, canvas3.height);
  console.log(image_array);
  // model.predict(image_array);
}



// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


});