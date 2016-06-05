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

var grid = document.getElementById("grid");
grid.appendChild(createGrid(10,10));

var button = document.createElement("button");
button.addEventListener('mouseover', function () {
  console.log("sanity check.");
});

var columns = grid.querySelectorAll("column");

Array.prototype.forEach.call(columns, function() {
  columns.appendChild(button);
  button = document.createElement("button");
  button.addEventListener('mouseover', function () {
  console.log("sanity check.");
  });
});