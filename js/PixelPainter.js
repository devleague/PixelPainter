function grid() {
  //some line of code

//Container for the multiple divs
	var container = document.createElement('div');
	container.id = 'box';
	pixelPainter.appendChild(container);

//Create Erase and Clear buttons
	var eraser = document.createElement('button');
	eraser.id = 'erase';
	eraser.innerHTML = 'ERASE';
	pixelPainter.appendChild(eraser);

	var clear = document.createElement('button');
	clear.id = 'clears';
	clear.innerHTML = 'CLEAR';
	pixelPainter.appendChild(clear);

//Multiple Divs or 'Pixels'

	function renderGrids(x){
		for (var i = 0; i < x; i++){
			var pixels = document.createElement('div');
			pixels.className = 'miniDiv';
			container.appendChild(pixels);
		}
	}

//Clear the grid

/*	function clearGrids(x){
		var clear = document.getElementByTagName('miniDiv');
		clear.className = 'clear';

	}*/

renderGrids(1722);
}
grid();