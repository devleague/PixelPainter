function createGrid(row, column) {
  //check if row is a non-negative number
  if (typeof row !== 'number' || row < 0){
    throw new Error();
  }
  //if column not provided, set column equal to rows
  if (column === undefined){
    column = row;
  }
  //create html element to store grid and return
  var gridElement = document.createElement("div");
  //loop to create number of rows and columns in each row
  for (var i = 0; i < row; i++) {
    var rowElement = document.createElement("div");
    gridElement.appendChild(rowElement);
    for (var j = 0; j < column; j++) {
      var columnElement = document.createElement("div");
      rowElement.appendChild(columnElement);
    }
  }
  return gridElement;
}