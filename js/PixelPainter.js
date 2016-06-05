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

var grid = document.getElementById("grid");
grid.appendChild(createGrid(10,10));

var columns = document.querySelectorAll(".column");
var options = {
  class: "column",
  onclick: color
};

for(var i = 0; i < columns.length; i++) {
  addAttributes(columns[i], options);
}

function color(event) {
  event.target.style.backgroundColor = "red";
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
