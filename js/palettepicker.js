console.log("palette grid here");

function generatePaletteGrid() {
	var table = document.createElement("table");
	var colors = [["#ff0000", "#ffb200", "#ffd400"], ["#fff200", "#2eff00", "#01a82b"], ["#00fff6", "#0050f2", "#cd62ea"], ["#754d2a","#dddddd", "#000000"]];
	
	for(var i = 0; i < 4; i++){
		var row = document.createElement("tr");
		row.className = "row";
		table.appendChild(row);


		for(var j = 0; j < 3; j++){
			var td = document.createElement("td");
			td.className = "cell";
			td.id = "row" + i + "td" + j;
			td.style.backgroundColor = colors[i][j];
			row.appendChild(td);
			
		}
	}
	page.palette.appendChild(table);
}

generatePaletteGrid();

// this goes into the div framework section for the BUTTONS

// var buttonErase = document.createElement("button");
// buttonErase.className = "button-erase";
// buttons.appendChild(buttonErase);

// var buttonEraseText = document.createTextNode("Erase");
// buttonErase.appendChild(buttonEraseText);

// var buttonClear = document.createElement("button");
// buttonClear.className = "button-clear";
// buttons.appendChild(buttonClear);

// var buttonClearText = document.createTextNode("Clear");
// buttonClear.appendChild(buttonClearText);






