/**
 * Creates a grid of elements.
 * @param {number} rows – The number of rows in the grid.
 * @param {number} columns – The number of columns in the grid.
 * @param {object} attributes - The attributes to apply to each grid element
 * @returns {HTMLElement} – The DOM element containing the grid of divs
 */
function createGrid (rows, columns, attributes) {
  // row checks
  if(typeof rows !== 'number') {
    throw new Error("Rows must be a number.");
  }
  else if(rows < 0) {
    throw new Error("Rows must be a positive number.");
  }
  else if(rows === undefined) {
    throw new Error("Rows must be defined.");
  }
  else if(typeof rows === 'object') {
    throw new Error("Rows cannot be an empty Object.");
  }

  // column checks
  if(columns === undefined && attributes === undefined) {
    columns = rows;
    attributes = {};
  }
  else if(columns === undefined) {
    columns = rows;
    attributes = {};
  }
  else if(typeof columns !== 'number') {
    attributes = columns;
    columns = rows;
  }
  else if(attributes === undefined) {
    attributes = {};
  }

  var grid = document.createElement("div");
  var row = document.createElement("div");
  var column = document.createElement("div");
  var rowCount = 0;
  var columnCount = 0;
  var att;
  var attCount = 0;

  while(rowCount < rows) {
    while(attCount < (Object.keys(attributes).length)) {
      row.setAttribute(Object.keys(attributes)[attCount], attributes[Object.keys(attributes)[attCount]]);
      attCount++;
    }
    row.className += " row";
    attCount = 0;
    grid.appendChild(row);
    while(columnCount < columns) {
      while(attCount < (Object.keys(attributes).length)) {
        column.setAttribute(Object.keys(attributes)[attCount], attributes[Object.keys(attributes)[attCount]]);
        attCount++;
      }
      column.className += " column";
      attCount = 0;
      row.appendChild(column);
      column = document.createElement("div");
      columnCount++;
    }
    row = document.createElement("div");
    rowCount++;
    columnCount = 0;
    attCount = 0;
  }
  return grid;
}

function addAttributes(element, attributes){
  if(typeof attributes === "object"){
    Object.keys(attributes).forEach(function(attribute){
      element[attribute] = attributes[attribute];
    });
  }else{
    throw new TypeError('attributes must be an Object!!!');
  }
}

function sanityCheck () {
  console.log("sanity check!");
}

var grid = document.getElementById("right-side");
grid.appendChild(createGrid(10,10));

var columns = grid.querySelectorAll(".column");
var options = {
  class: "column",
  //onmousedown: color,
  onmousedown: mouseIsDown,
  onmouseup: mouseIsUp,
  onmousemove: color
  //onclick: stopColoring
};

for (var i = 0; i < columns.length; i++) {
  addAttributes(columns[i], options);
}

var mouseDown = 0;
function mouseIsDown() {
  mouseDown = 1;
}
function mouseIsUp() {
  mouseDown = 0;
}
function color(event) {
  //sanityCheck();
  if(mouseDown === 1) {
    event.target.style.backgroundColor = "red";
  }
}

function stopColoring(event) {
  //sanityCheck();
  event.target.style.backgroundColor = "white";
  event.target.onmousemove = null;
}
// assign random colors
// function color(event) {
//   var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     event.target.style.backgroundColor = color;
// }

// Color Picker
var colorPicker = document.getElementById("left-side");
colorPicker.appendChild(createGrid(10, 10));
