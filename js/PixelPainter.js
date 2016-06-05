function createGrid(row, column, attributes) {
  //check if row value is a non-negative number
  if (typeof row !== 'number' || row < 0){
    throw new Error();
  }
  //if column value not provided (or provided as an object and attributes value not provided), set attributes to column
  if (typeof column === 'object' && attributes === undefined){
    attributes = column;
  }
  //if column value not provided or not a number (and attributes value provided), set column equal to rows
  if (column === undefined || isNaN(column)){
    column = row;
  }
  //create html element to store grid and return
  var gridElement = document.createElement("div");
  //function to add attributes to nodes
  function addAttributes(node, attributes) {
    //check if attributes value provided and if object is not empty, otherwise return
    if (attributes !== undefined && Object.keys(attributes).length > 0){
      var attrPropArr = Object.keys(attributes); //put all attribute keys in array
      for (var k = 0; k < attrPropArr.length; k++) {
        node.setAttribute(attrPropArr[k], attributes[attrPropArr[k]]);
      }
    }else{
      return;
    }
  }
  //loop to create number of rows and columns in each row
  for (var i = 0; i < row; i++) {
    var rowElement = document.createElement("div");
    gridElement.appendChild(rowElement);
    for (var j = 0; j < column; j++) {
      var columnElement = document.createElement("div");
      addAttributes(columnElement, attributes);
      rowElement.appendChild(columnElement);
    }
  }
  return gridElement;
}