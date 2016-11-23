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
      canvasPixel.addEventListener('click', insertColorPicker);
      canvasPixel.addEventListener('mouseDown', mouseDown);
      // canvasPixel.addEventListener('mouseOver', mouseOver);
      // canvasPixel.addEventListener('mouseUp', mouseUp);
    }
   }


  ppCanvas(2500);
  swCanvas(10);


  // // colorPick is supposed to click the color from the swatches and store that vaule
  function storeColorPicker(event){
    currentColor = event.target.style.backgroundColor;
    // console.log('hit');
    console.log(event);
  }

  function insertColorPicker(event){
    if (event.target.style.backgroundColor === 'white'){
      event.target.style.backgroundColor = currentColor;
    }else if(event.target.style.backgroundColor !== 'white') {
      event.target.style.backgroundColor = currentColor;
    }
  }

  function mouseDown(){
    whenClicked = true;
    if (whenClicked === true){
      this.style.backgroundColor = currentColor;
    }
  }

  function mouseOver(){
    if (whenClicked === true){
      this.style.backgroundColor = currentColor;
    }

  function mouseUp(){
    whenClicked = false;
    if (whenClicked === false){
      this.style.backgroundColor = currentColor;
    }
  }

  }





//}