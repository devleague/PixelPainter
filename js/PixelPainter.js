function grid() {
  //some line of code

//Creating the Canvas to Paint On
var canvas = document.createElement('canvas');
canvas.id = 'grid';
canvas.height = 600;
canvas.width = 600;
canvas.style.border = '1px solid';
pixelPainter.appendChild(canvas);
var outline = document.getElementById('grid');

	if(outline.getContext){
		var ctx = outline.getContext('2d');

		ctx.strokeRect(0,25,25,25);
	}

//Create a function to draw on the canvas

	var pallette = document.createElement('canvas');
	pallette.id = 'colors';
	pallette.height = 200;
	pallette.width = 150;
	pallette.style.border = '1px solid';
	pixelPainter.appendChild(pallette);
}

grid();