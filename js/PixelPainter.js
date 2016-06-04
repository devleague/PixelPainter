/**
 * Creates a grid of elements.
 * @param {number} rows – The number of rows in the grid.
 * @param {number} columns – The number of columns in the grid.
 * @param {object} attributes - The attributes to apply to each grid element
 * @returns {HTMLElement} – The DOM element containing the grid of divs
 */
function createGrid (rows, columns, attributes) {
  if(rows < 0) {
    throw new Error("Rows must be a positive number.");
  }
  else if(rows === undefined) {
    throw new Error("Rows must be defined.");
  }
  else if(typeof rows === 'object') {
    throw new Error("Rows cannot be an empty Object.");
  }

  if(typeof columns !== 'number') {
    attributes = columns;
    columns = 1;
  }
  else if(columns === undefined) {
    columns = 1;
  }

  var grid = document.createElement("div");
  var row = document.createElement("div");
  var column = document.createElement("div");

  var rowCount = 0;
  var columnCount = 0;
  var attCount = 0;

  row.className = "row";
  column.className = "column";
  while(rowCount < rows) {
    grid.appendChild(row);
    while(columnCount < columns) {
      row.appendChild(column);
      column = document.createElement("div");
      column.className = "column";
      columnCount++;
    }
    row = document.createElement("div");
    row.className = "row";
    rowCount++;
    columnCount = 0;
    attCount = 0;
  }
  return grid;
}