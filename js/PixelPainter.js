//function to create grid with specified number of rows and columns as well as attributes
function createGrid(row, column, attributes) {
  //check if row value is a non-negative number
  if (typeof row !== 'number' || row < 0){
    throw new Error();
  }
  //if column value not provided (i.e. provided as an object and intended as attributes value), set attributes to column
  if (typeof column === 'object' && attributes === undefined){
    attributes = column;
  }
  //if column value not provided or not a number (i.e. intended as attributes value provided), set column equal to rows
  if (column === undefined || isNaN(column)){
    column = row;
  }
  //create html element to store grid and return
  var gridElement = document.createElement("div");
  //function to add attributes to nodes
  function addAttributes(node, attributes) {
    //check if attributes value provided and if object is not empty, otherwise return
    if (attributes !== undefined && Object.keys(attributes).length > 0){
      var attrPropArr = Object.keys(attributes); //put all attribute keys in array
      for (var k = 0; k < attrPropArr.length; k++) {
        node.setAttribute(attrPropArr[k], attributes[attrPropArr[k]]);
      }
    }else{
      return;
    }
  }
  //loop to create number of rows and columns in each row
  for (var i = 0; i < row; i++) {
    var rowElement = document.createElement("div");
    gridElement.appendChild(rowElement);
    for (var j = 0; j < column; j++) {
      var columnElement = document.createElement("div");
      addAttributes(columnElement, attributes);
      rowElement.appendChild(columnElement);
    }
  }
  return gridElement;
}

//create container to hold both paint and blank canvas
var paintContainer = document.querySelector("#pixelPainter");

//create left container and title
var left = document.createElement("div");
left.className = "left";
var title = document.createElement("div");
title.className = "title";
var header = document.querySelector("h1");
title.appendChild(header);
left.appendChild(title);

//create grid for color palette
var paintGrid = createGrid(12, 5, {class: "paint"});
paintGrid.id = "pp-paint";
left.appendChild(paintGrid);
paintContainer.appendChild(left);
var paintCells = document.querySelectorAll(".paint");

//puts colors in paintgrid cells
var colors =["#3B208B", "#624DA2", "#8979B9", "#B1A6D1", "#D8D2E8",
"#92278F", "#A852A5", "#BE7DBC", "#D3A9D2", "#E9D4E9",
"#EB208C", "#EF4DA3", "#F379BA", "#F7A6D1", "#FBD2E8",
"#ED1F24", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC",
"#FA7513", "#FB9142", "#FCAC71", "#FDC8A1", "#FEE3D0",
"#FFBF00", "#FFCC33", "#FFD966", "#FFE599", "#FFF2CC",
"#FFE900", "#FFED33", "#FFF266", "#FFF699", "#FFFBCC",
"#AFD136", "#BFDA5E", "#CFE386", "#DFEDAF", "#EFF6D7",
"#3EB549", "#65C46D", "#8BD392", "#B2E1B6", "#D8F0DB",
"#00B4C4", "#33C3D0", "#66D2DC", "#99E1E7", "#CCF0F3",
"#0049DF", "#336DE5", "#6692EC", "#99B6F2", "#CCDBF9",
"#000000", "#333333", "#666666", "#999999", "#FFFFFF"];
Array.prototype.forEach.call(paintCells, function (cell, idx) {
  cell.style.backgroundColor = colors[idx];
});

//add event listener to clicks in paint cells
Array.prototype.forEach.call(paintCells, function (cell) {
  cell.addEventListener("click", pickColor);
});

//erase color buttton
var eraseButton = document.createElement("button");
eraseButton.className = "erase-button";
eraseButton.innerHTML = "ERASE";
left.appendChild(eraseButton);
eraseButton.addEventListener("click", eraseColor);

//clear canvas buttton
var clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearButton.innerHTML = "CLEAR";
left.appendChild(clearButton);
clearButton.addEventListener("click", clearCanvas);

//create blank canvas grid
var right = document.createElement("div");
right.className = "right";
var canvasGrid = createGrid(30, 34, {class: "canvas"});
canvasGrid.id = "pp-canvas";
right.appendChild(canvasGrid);
paintContainer.appendChild(right);
//select all canvas cells (to apply event listener)
var canvasCells = document.querySelectorAll(".canvas");

//add event listener to start paint canvas - starts painting when mouse button clicked
Array.prototype.forEach.call(canvasCells, function (cell) {
  cell.addEventListener("mousedown", startColor);
});
//add event listener to stop painting canvas - stops painting when mouse button released
Array.prototype.forEach.call(canvasCells, function (cell) {
  cell.addEventListener("mouseup", endColor);
});

//stops painting when mouse leaves canvas
canvasGrid.addEventListener("mouseleave", endColor);

//set default paint color to white
var getColor = "#FFFFFF";
//function to pick and store color chosen
function pickColor(event) {
  getColor = event.target.style.backgroundColor;
}

//function allowing canvas to receive current paint color
function coloring(event) {
  event.target.style.backgroundColor = getColor;
}

//function allowing user to drag paint
function startColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.addEventListener("mousemove", coloring);
  });
}

//function stopping paint
function endColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.removeEventListener("mousemove", coloring);
  });
}

//function to erase color from individual canvas cells
function eraseColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.addEventListener("click", function (event) {
      event.target.style.backgroundColor = "#FFFFFF";
    });
  });
}

//function to clear canvas
function clearCanvas(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.style.backgroundColor = "#FFFFFF";
    });
}