function grid() {
  //some line of code

//Creating the Canvas to Paint On
var canvas = document.createElement('canvas');
canvas.id = 'grid';
canvas.height = 600;
canvas.width = 600;
canvas.style.border = '1px solid';
pixelPainter.appendChild(canvas);
}

grid();

