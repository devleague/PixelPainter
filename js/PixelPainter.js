var pixelPainter = document.createElement('div');
pixelPainter.id = 'palette';
document.body.appendChild(pixelPainter);

var pixelPainterCanvas = document.createElement('div');
var colorSwatchesCanvas = document.createElement('div');

var whenClicked = null;

var color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'brown', 'gray'];

pixelPainterCanvas.className = 'ppCanvas';
pixelPainter.appendChild(pixelPainterCanvas);

colorSwatchesCanvas.className = 'colorCanvas';
pixelPainter.appendChild(colorSwatchesCanvas);

function swCanvas(pixelSize) {
  for (var x = 0; x < pixelSize; x++) {
    var swatchCanvasPixel = document.createElement('div');
    swatchCanvasPixel.className = 'swatchCanvasPixel';
    colorSwatchesCanvas.appendChild(swatchCanvasPixel);
    swatchCanvasPixel.style.backgroundColor = color[x];
    swatchCanvasPixel.addEventListener('click', storeColorPicker);
  }
}

function ppCanvas(pixelSize) {
  for (var x = 0; x < pixelSize; x++) {
    var canvasPixel = document.createElement('div');
    canvasPixel.className = 'canvasPixelCell';
    pixelPainterCanvas.appendChild(canvasPixel);
    canvasPixel.addEventListener('click', insertColorPicker);
    canvasPixel.addEventListener('mousedown', function(event) {mouseDown(event);
    });
    canvasPixel.addEventListener('mouseover', function(event) {mouseOver(event);
    });
    canvasPixel.addEventListener('mouseup', function(event) {mouseUp(event);
    });
  }
}

ppCanvas(2500);
swCanvas(10);

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
