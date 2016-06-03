function createGrid(row) {
  if (typeof row !== 'number' || row < 0){
    throw new Error();
  }
  var gridElement = document.createElement("div");
  for (var i = 0; i < row; i++) {
    var rowElement = document.createElement("div");
    gridElement.appendChild(rowElement);
  }
  return gridElement;
}