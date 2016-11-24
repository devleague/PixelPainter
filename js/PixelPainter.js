function grid() {

<<<<<<< HEAD
//Container for the multiple divs
	var container = document.createElement('div');
	container.id = 'box';
	pixelPainter.appendChild(container);

//Create Erase button
	var eraser = document.createElement('button');
	eraser.id = 'erase';
	eraser.innerHTML = 'ERASE';
	pixelPainter.appendChild(eraser);

//Create Clear button

	var clear = document.createElement('button');
	clear.id = 'clears';
	clear.innerHTML = 'CLEAR';
	pixelPainter.appendChild(clear);
	clear.addEventListener('click', function(){clearGrids();});

//Multiple Divs or 'Pixels'

	function renderGrids(x){
		for (var i = 0; i < x; i++){
			var pixels = document.createElement('div');
			pixels.className = 'miniDiv';
			container.appendChild(pixels);
		}
	}

//Clear the grid

	function clearGrids(){
		var clearIt = document.getElementsByTagName('miniDiv');
		return renderGrids;
	}

renderGrids(1722);

clearGrids();
}
=======
	function colorSelector(){

		var pallet = document.createElement('div');
		pallet.id = "pallet";
		pixelPainter.appendChild(pallet);

		var colorArr = [ "red", "blue", "yellow", "black"];



		function renderColor(){
		for(var j =0 ; j < colorArr.length; j++){
			var color = document.createElement('div');
			color.className = "colorBtn";
			pallet.appendChild(color);
				switch(colorArr[j]){
					case "red":
					color.style.backgroundColor = "red";
					break;

					case "blue":
					color.style.backgroundColor = "blue";				
					break;

					case "green":
					color.style.backgroundColor = "green";
					break;

					case "white":
					color.style.backgroundColor = "white";
					break;

					case "black":
					color.style.backgroundColor = "black";
					break;
				}

			}
		}
		renderColor();
	}

	colorSelector();

	}

>>>>>>> master
grid();