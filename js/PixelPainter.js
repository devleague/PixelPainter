function createGrid (rows, columns, attributes) {

  var grid = document.createElement('div');
  grid.className = 'grid';

  if (rows < 0 || rows === null || rows === undefined || typeof rows !== 'number') {
    throw new Error('Should only accept a non-negative number');
  }

  for (i = 1; i <= rows; i ++) {

    var row = document.createElement('div');
    row.className = 'row';
    grid.appendChild(row);

    for (j = 1; j <= columns; j++) {

      var cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);

      }

    }

  return grid;

function addAttributes (element, attributes) {

  if (typeof attributes === "object"){

    Object.keys(attributes).forEach(function (attribute) {
      element[attribute] = attributes[attribute];

    });

  } else {

    throw new TypeError('attributes must be an Object!!!');

    }

  }

}


