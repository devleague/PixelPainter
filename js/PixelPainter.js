document.body.onload = createGrid;

function createGrid(rows, columns, attributes) {
  if (rows < 0 || typeof rows !== 'number'){
    throw new Error();
  }

  var gridElement = document.createElement("div");

  //create the row
  for (var i = 0; i <= rows; i++){
    var row = document.createElement("div");
    row.className = "row";
    gridElement.appendChild(row);

    for (var j = 0; j <= columns; j++){
    var column = document.createElement("div");
    column.className = "column";
    row.appendChild(column);
    }
  }

  //create the elements in the row

  //column = row;

  //Should return the same number of rows as provided

  //document.getElementByID("pixelPainter").appendChild(column);

  //console.log("Columns" + column);
  //console.log("Rows" + row);

  console.log(HTMLElement);

  return gridElement;
}


