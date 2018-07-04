//function pixelPainter (width, height) {
  var pixelPainterCanvas = document.createElement('div');
  var colorSwatchesCanvas = document.createElement('div');
  var pixelPainter = document.createElement('div');
  var whenClicked = null;
  var color = ['262c04', 'ffc0cb', 'f2df4f', 'eeeeee', 'c6e2ff', '4169e1', '3b411d', 'f10714', '0d8163', '255083', '5f4236', '3496fa', 'fa02d4', '3ff206', '560e3f', '00fa9a', 'violet', '8b0000', 'ff6666', 'c6e2ff', 'd3ffce', '7ffd4', 'b0e0e6', 'b6bb54', 'aa3b4e', 'b08125', 'orange', 'blue', 'purple', 'gray', 'black', 'teal', 'turquoise'];

  pixelPainter.id = 'palette';
  document.body.appendChild(pixelPainter);

  pixelPainterCanvas.className = 'ppCanvas';
  pixelPainter.appendChild(pixelPainterCanvas);

  colorSwatchesCanvas.className = 'colorCanvas';
  pixelPainter.appendChild(colorSwatchesCanvas);

  //Swatch Canvas
  function swCanvas(pixelSize) {
    for (var x = 0; x < pixelSize; x++) {
      var swatchCanvasPixel = document.createElement('div');
      swatchCanvasPixel.className = 'swatchCanvasPixel';
      colorSwatchesCanvas.appendChild(swatchCanvasPixel);
      swatchCanvasPixel.style.backgroundColor = color[x];
      swatchCanvasPixel.addEventListener('click', storeColorPicker);
    }
  }

  //Pixel Painter Canvas
  function ppCanvas(pixelSize) {
    for (var x = 0; x < pixelSize; x++) {
      var canvasPixel = document.createElement('div');
      canvasPixel.className = 'canvasPixelCell';
      pixelPainterCanvas.appendChild(canvasPixel);
      // --------- EVENTLISTENERS -----------
      canvasPixel.addEventListener('click', insertColorPicker);
      canvasPixel.addEventListener('mousedown', function(event) {mouseDown(event);
      });
      canvasPixel.addEventListener('mouseover', function(event) {mouseOver(event);
      });
      canvasPixel.addEventListener('mouseup', function(event) {mouseUp(event);
      });
    }
  }

  // colorPick is supposed to click the color from the swatches and store that vaule
  function storeColorPicker(event) {
    currentColor = event.target.style.backgroundColor;
    console.log(event);
  }

ppCanvas(2500);
swCanvas(33);

function storeColorPicker(event) {
  currentColor = event.target.style.backgroundColor;
  console.log(event);
}

function insertColorPicker(event) {
  if (event.target.style.backgroundColor === 'white') {
    event.target.style.backgroundColor = currentColor;
  } else if (event.target.style.backgroundColor !== 'white') {
    event.target.style.backgroundColor = currentColor;
  }
}

function mouseDown(event) {
  whenClicked = true;
  if (whenClicked === true) {
    event.target.style.backgroundColor = currentColor;
  }
}

function mouseOver(event) {
  if (whenClicked === true) {
    event.target.style.backgroundColor = currentColor;
  }
}

function mouseUp(event) {
  whenClicked = false;
  if (whenClicked === false) {
    event.target.style.backgroundColor = currentColor;
  }
}

function colorContinous(){
  if('mouseDown'){
    event.target.style.backgroundColor = currentColor;
  }
}

var eraseButton = document.createElement('button');
eraseButton.className = 'buttons';
eraseButton.innerHTML = "Erase";
pixelPainter.appendChild(eraseButton);
eraseButton.addEventListener('click', erase);

var clearButton = document.createElement('button');
clearButton.className = 'buttons';
clearButton.innerHTML = "Clear";
pixelPainter.appendChild(clearButton);
clearButton.addEventListener('click', clear);

function erase(event) {
  currentColor = 'white';
}

function clear(event) {
  for(var i = 0; i < document.querySelectorAll('.canvasPixelCell').length; i++) {
    document.querySelectorAll('.canvasPixelCell')[i].style.backgroundColor = 'white';
  }
}
