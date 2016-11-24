function grid() {

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

grid();