console.log("YO, I\M WORKING");

function pixelPainterModule() {


  function clear() {
  }

  function erase() {
  }

  function colorPicker(color) {
  }

  function createGrid(width, height) {
    var table = document.createElement('table');
    table.id = 'grid';
    pixelPainter.appendChild(table);

    for ( var i = 0; i < height; i ++ ) {
      var rows = document.createElement('tr');
      grid.appendChild(rows);
      for ( var j = 0; j < width; j ++ ) {
        var columns = document.createElement('td');
        rows.appendChild(columns);
      }
    }
  }

  return {
    clear: clear,
    erase: erase,
    colorPicker: colorPicker,
    createGrid: createGrid
  };
}

var myPainter = pixelPainterModule();