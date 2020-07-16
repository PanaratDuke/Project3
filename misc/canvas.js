

$(function () {

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
  console.log('line 72')
  // =====================================
  // Add submit function out put as array
  // =====================================

  var predict_btn = document.getElementById('predict_btn');
  
  console.log(predict_btn)

  // predict_btn.addEventListener('click', function() {
  //   console.log('test')
  // });
  predict_btn.addEventListener('click', submit_image);


  console.log('line 82')
  function submit_image() {
    console.log('test submit_image');
    image_array=context3.getImageData(0, 0, canvas3.width, canvas3.height);
    console.log(image_array);
  }

  // =====================================
  // Add submit function out put as array
  // =====================================
  // Set canvasImg image src to dataURL (png format 96 dpi by default)
  // Set canvasImg image src to dataURL
  // So it can be saved as an image
  // const canvas3 = document.getElementById('myCanvas');
  // const context3 = canvas3.getContext('2d');
  function submit_image() {
    console.log('function submit_image')
    var dataURL = canvas3.toDataURL();
    console.log(dataURL);
    // const imageNumber = document.getElementById('canvasImg').src = dataURL;
    // const imgNo = document.getElementById('canvasImg');
    // const width = 28;
    // const height = 28;
    // elem.width = width;
    // elem.height = height;
    // imgNo.addEventListener('load', e=>{
    //   context3.drawImage(dataURL, 0, 0);
  }

  function upload_img() {
    console.log('test');
  }



  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

});