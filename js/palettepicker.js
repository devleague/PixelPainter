console.log("palette grid here");

function generatePaletteGrid() {
	var table = document.createElement("table");
	var colors = [["#ff0000", "#ef641f", "#ffa500"], ["#ffee00", "#2eff00", "#01a82b"], ["#00f2da", "#0050f2", "#020b72"], ["#8501c1","#ffffff", "#000000"]];
	
	for(var i = 1; i < 5; i++){
		var row = document.createElement("tr");
		row[i].className = "row" + i;

		for(var j = 1; i < 4; j++){
			var td = document.createElement("td");
			td[j].className = "td" + j;
			td[j].style.backgroundColor = colors[i][j];
			row.appendChild(td);
		}

		table.appendChild(row);
	}

	palette.appendChild(table);
}

generatePaletteGrid();

// this goes into the div framework section for the BUTTONS



var buttonErase = document.createElement("button");
buttonErase.className = "button-erase";
buttons.appendChild(buttonErase);

var buttonEraseText = document.createTextNode("Erase");
buttonErase.appendChild(buttonEraseText);

var buttonClear = document.createElement("button");
buttonClear.className = "button-clear";
buttons.appendChild(buttonClear);

var buttonClearText = document.createTextNode("Clear");
buttonClear.appendChild(buttonClearText);






