//function pixelPainter (width, height){
  var pixelPainter = document.getElementById('pallet');
  var pixelPainterCanvas = document.createElement('div');
  var colorSwatchesCanvas = document.createElement('div');

  var whenClicked = null;

  var color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white', 'gray'];

  var clearButton = document.createElement('button');
  var eraseButton = document.createElement('button');


  pixelPainterCanvas.className = 'ppCanvas';
  pixelPainter.appendChild(pixelPainterCanvas);

  colorSwatchesCanvas.className = 'colorCanvas';
  pixelPainter.appendChild(colorSwatchesCanvas);

  //Swatch Canvas
  function swCanvas(pixelSize){
    for (var x = 0; x < pixelSize; x++) {
      var swatchCanvasPixel = document.createElement('div');
      swatchCanvasPixel.className = 'swatchCanvasPixel';
      colorSwatchesCanvas.appendChild(swatchCanvasPixel);
      swatchCanvasPixel.style.backgroundColor = color[x];
      swatchCanvasPixel.addEventListener('click', storeColorPicker);
    }
     // pixelPainter.appendChild(swatchCanvasPixel);
  }

  //Pixel Painter Canvas
  function ppCanvas(pixelSize) {
    for (var x = 0; x < pixelSize; x++) {
      var canvasPixel = document.createElement('div');
      canvasPixel.className = 'canvasPixelCell';
      pixelPainterCanvas.appendChild(canvasPixel);
      // --------- EVENTLISTENERS -----------
      canvasPixel.addEventListener('click', function() {insertColorPicker(this);
      });
      // canvasPixel.addEventListener('mouseDown', function() {mouseDown(this);
      // });
      canvasPixel.addEventListener('mouseOver', function() {colorContinous(this);
      });
      // canvasPixel.addEventListener('mouseUp', function() {mouseUp(this);
      // });
    }
  }

  ppCanvas(2500);
  swCanvas(10);

  // // colorPick is supposed to click the color from the swatches and store that vaule
  function storeColorPicker(event){
    currentColor = event.target.style.backgroundColor;
    console.log(event);
  }

  function insertColorPicker(event){
    if (event.style.backgroundColor === 'white'){
      event.style.backgroundColor = currentColor;
    }else if(event.style.backgroundColor !== 'white') {
      event.style.backgroundColor = currentColor;
    }
  }

  function mouseDown(event){
    whenClicked = true;
    if (whenClicked === true){
      event.style.backgroundColor = currentColor;
    }
  }

  function mouseOver(event){
    if (whenClicked === true){
      event.style.backgroundColor = currentColor;
    }
  }

  function mouseUp(event){
    whenClicked = false;
    if (whenClicked === false){
      event.style.backgroundColor = currentColor;
    }
  }

  function colorContinous(){
    if('mouseDown'){
      event.target.style.backgroundColor = currentColor;
    }
  }






//}