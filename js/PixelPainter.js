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

//create grid for color palette
var paintGrid = createGrid(2, 25, {class: "paint"});
paintGrid.id = "pp-paint";
paintContainer.appendChild(paintGrid);
var paintCells = document.querySelectorAll(".paint");

//puts random colors in paintgrid cells
Array.prototype.forEach.call(paintCells, function (cell) {
  cell.style.backgroundColor = getRandomColor();
});

//add event listener to clicks in paint cells
Array.prototype.forEach.call(paintCells, function (cell) {
  cell.addEventListener("click", pickColor);
});

//create blank canvas grid
var canvasGrid = createGrid(15, 15, {class: "canvas"});
canvasGrid.id = "pp-canvas";
paintContainer.appendChild(canvasGrid);
//select all canvas cells (to apply event listener)
var canvasCells = document.querySelectorAll(".canvas");

//function to generate random colors
function getRandomColor() {
  var chars = "0123456789ABCDEF";
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    hex += chars[parseInt(Math.random() * 16)];
  }
  return hex;
}

//function to pick color and start painting canvas
function pickColor(event) {
  var getColor = event.target.style.backgroundColor;
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.addEventListener("click", function (event) {
      event.target.style.backgroundColor = getColor;
    });
  });
}
