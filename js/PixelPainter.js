function createGrid (rows, columns, attributes) {

  if (rows < 0 || rows === null || rows === 'object' || rows === undefined) {
    throw new Error('rows only accepts non negative number');
  }

  /*var appendBody = document.body;

  var grid = document.createElement('div');
  grid.className = 'gridElement';

  if (typeof 'gridElement' !== 'number' || 'gridElement' < 0)
    throw new Error();

  for (var i = 0; i < rows; i++) {

    var rowZ = document.createElement('div');
    rowZ.className = 'row';

    for (var j = 0; j <= rows; j++) {

      var cell = document.createElement('div');
      cell.className = 'Cell';
      rowZ.appendChild(cell);
    }

    grid.appendChild(rowZ);
  }

return grid;*/

}