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

  var grid = document.createElement("div");
  var row = document.createElement("div");
  var column = document.createElement("div");

  var rowCount = 0;
  var columnCount = 0;
  var attCount = 0;

  // function addRowAttribute () {
  //   while(attCount < Object.keys(attributes).length) {
  //     row.setAttribute(Object.keys(attributes)[attCount], attributes[Object.keys(attributes)[attCount]]);
  //     attCount++;
  //   }
  //   attCount = 0;
  // }
  // function addColumnAttribute () {
  //   while(attCount < Object.keys(attributes).length) {
  //     column.setAttribute(Object.keys(attributes)[attCount], attributes[Object.keys(attributes)[attCount]]);
  //     attCount++;
  //   }
  //   attCount = 0;
  // }

  // if attributes exist, apply it to the first row and column
  // if(attributes) {
  //   //addRowAttribute();
  //   //addColumnAttribute();
  //   row.className += " row";
  //   column.className += " column";
  // }
  // while(rowCount < rows) {

  //   // if one or multiple columns
  //   if(columns) {
  //     //console.log("Adding multiple columns");
  //     while(columnCount < columns) {
  //       // if attributes exists
  //       if(attributes) {
  //         //addColumnAttribute();
  //       }
  //     }
  //     row.appendChild(column);
  //     column = document.createElement("div");
  //     column.className = "column";
  //     columnCount++;
  //   }
  //   // if no columns
  //   else {
  //     // if attributes exists
  //     if(attributes) {
  //       //addColumnAttribute();
  //     }
  //     row.appendChild(column);
  //     column = document.createElement("div");
  //     column.className = "column";
  //     columnCount++;
  //   }
  //   grid.appendChild(row);
  //   row = document.createElement("div");
  //   row.className = "row";
  //   rowCount++;
  //   columnCount = 0;
  //   attCount = 0;
  // }
  // return grid;
}