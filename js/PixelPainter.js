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
	var colorPallette = document.getElementById('colors');

	if(colorPallette.getContext){
		var colorCtx = colorPallette.getContext('2d');

		colorCtx.fillStyle = 'red';
		colorCtx.fillRect(0,0, 50, 50);
		colorCtx.strokeRect(0,0, 50, 50);

		colorCtx.fillStyle = 'green';
		colorCtx.fillRect(50, 0, 50, 50);
		colorCtx.strokeRect(50,0, 50, 50);

		colorCtx.fillStyle = 'blue';
		colorCtx.fillRect(100,0,50,50);
		colorCtx.strokeRect(100,0, 50, 50);

		colorCtx.fillStyle = 'yellow';
		colorCtx.fillRect(0,50,50,50);
		colorCtx.strokeRect(0,50, 50, 50);

		colorCtx.fillStyle = 'orange';
		colorCtx.fillRect(50,50,50,50);
		colorCtx.strokeRect(50,50, 50, 50);

		colorCtx.fillStyle = 'purple';
		colorCtx.fillRect(100, 50, 50, 50);
		colorCtx.strokeRect(100,50, 50, 50);
	
		colorCtx.fillStyle = 'pink';
		colorCtx.fillRect(0,100,50,50);
		colorCtx.strokeRect(0,100, 50, 50);

		colorCtx.fillStyle = 'brown';
		colorCtx.fillRect(50,100,50,50);
		colorCtx.strokeRect(50,100, 50, 50);

		colorCtx.fillStyle = 'black';
		colorCtx.fillRect(100,100,50,50);
		colorCtx.strokeRect(100,100, 50, 50);

		colorCtx.fillStyle = 'gray';
		colorCtx.fillRect(0,150,50,50);
		colorCtx.strokeRect(0,150, 50, 50);

		colorCtx.fillStyle = 'white';
		colorCtx.fillRect(50,150,50,50);
		colorCtx.strokeRect(50,150, 50, 50);

		colorCtx.fillStyle = 'gold';
		colorCtx.fillRect(100,150,50,50);
		colorCtx.strokeRect(100,150, 50, 50);







	}
}

grid();