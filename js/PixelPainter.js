document.body.onload = createGrid;

function createGrid(rows, columns, attributes) {
  if (rows < 0 || typeof rows !== 'number'){
    throw new Error();
  }
  var columnLength = columns;

  if (columns < 0 || typeof columns !== 'number'){
    if (typeof columns === 'object'){
      attributes = columns;
    }
    columnLength = rows;
  }

  if (attributes === undefined || typeof attributes !== 'object'){
    attributes = {};
  }

  var gridElement = document.createElement("div");

  //create the row
  for (var i = 0; i < rows; i++){
    var row = document.createElement("div");
    row.className = "row";
    gridElement.appendChild(row);

    for (var j = 0; j < columnLength; j++){
      var column = document.createElement("div");
      column.className = "column";
      row.appendChild(column);

      for (var prop in attributes){
        if (attributes.hasOwnProperty(prop)){//if the var prop exists on the object
          column.setAttribute(prop, attributes[prop]);
        }
      }
    }
  }

  document.getElementById("pixelPainter").addEventListener("click", changeColor);

  function changeColor() {
    document.getElementById("pixelPainter").style.backgroundColor = "purple";
  }

  console.log(gridElement);

  //create the elements in the row

  //column = row;

  //Should return the same number of rows as provided

  //document.getElementByID("pixelPainter").appendChild(column);

  //console.log("Columns" + column);
  //console.log("Rows" + row);

  return pixelPainter.appendChild(gridElement);
}


