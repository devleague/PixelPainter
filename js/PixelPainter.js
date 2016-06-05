function createGrid(rows, columns, attributes) {
  var gridElement = document.createElement('div');
  if (typeof rows !== 'number' || rows < 0){
    throw new Error();
  }
  // if (typeof columns === 'object'){
  //   attributes = columns;
  // }
  if (typeof columns !== 'number' || columns < 0){
    if (typeof columns === 'object'){
      attributes = columns;
    }
    columns = rows;
  }

  console.log(rows, columns, attributes);

  for (var i = 0; i < rows; i++){
    var rowElement = document.createElement('div');
    gridElement.appendChild(rowElement);

    for (var j = 0; j < columns; j++){
      var columnElement = document.createElement('div');
      setAttr(columnElement, attributes);
      rowElement.appendChild(columnElement);
    }
    // if (typeof attributes === 'object'){
    //   var keys = Object.keys(attributes);
    //   for (var k = 0; k < keys.length; k++){
    //   }
    // }
   }
  return gridElement;
}


function setAttr(element, attrObj){
  if (typeof attrObj === 'object'){
  keys = Object.keys(attrObj);
  for (var i = 0; i < keys.length; i++){
    element.setAttribute(keys[i], attrObj[keys[i]]);
  }
  }
}
createGrid(10, {class: 'grid', style: 'background-color: black'});
