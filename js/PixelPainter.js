function createGrid(rows, columns, attributes) {
  var gridElement = document.createElement('div');
  gridElement.className = "grid";
  // validations
  if (typeof rows !== 'number' || rows < 0){
    throw new Error("Non-negative values only.");
  }
  if (typeof columns !== 'number' || columns < 0){
    if (typeof columns === 'object'){
      attributes = columns;
    }
    columns = rows;
  }
  // loops to create rows and columns
  for (var i = 0; i < rows; i++){
    var rowElement = document.createElement('div');
    rowElement.className = "rows";
    setAttr(rowElement, attributes);
    gridElement.appendChild(rowElement);

    for (var j = 0; j < columns; j++){
      var columnElement = document.createElement('div');
      setAttr(columnElement, attributes);
      if (attributes === undefined){
        columnElement.className = "columns";
      }
      rowElement.appendChild(columnElement);
    }
   }

  return gridElement;
}
// function to add attributes to the grid
function setAttr(element, attrObj){
  if (typeof attrObj === 'object'){
  keys = Object.keys(attrObj);
  for (var i = 0; i < keys.length; i++){
    element.setAttribute(keys[i], attrObj[keys[i]]);
  }
  }
}
// creating a pixel painter with color palette and grid using createGrid function
function pixelPainter(width, height, attributes){
  var paintContainer = document.getElementById('pixelPainter');
  var colorsGrid = createGrid(6, 11, {class: 'colors'});
  colorsGrid.id = "pp-colors";
  paintContainer.appendChild(colorsGrid);
  var canvasGrid = createGrid(width, height);
  canvasGrid.id = "pp-canvas";
  paintContainer.appendChild(canvasGrid);
  document.innerHTML = paintContainer;
}



