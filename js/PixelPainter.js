function createGrid(rows, columns, attributes) {
  var gridElement = document.createElement('div');
  gridElement.className = "grid";

  if (typeof rows !== 'number' || rows < 0){
    throw new Error();
  }
  for (var i = 0; i < rows; i++){
    var rowElement = document.createElement('div');
    rows.ClassName = "row";
    gridElement.appendChild(rowElement);
  }
  return gridElement;
}
