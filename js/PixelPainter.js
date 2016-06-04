function createGrid(rows, columns, attributes) {
  var gridElement = document.createElement('div');
  gridElement.className = "grid";
  if (typeof rows !== 'number' || rows < 0){
    throw new Error();
  }
  for (var i = 0; i < rows; i++){
    var rowElement = document.createElement('div');
    rowElement.className = "row";
    gridElement.appendChild(rowElement);
    if (columns === undefined){
      columns = rows;
    }
      for (var j = 0; j < columns; j++){
        var columnElement = document.createElement('div');
        columnElement.className = "column";
        rowElement.appendChild(columnElement);
      }
   }
  return gridElement;
}
