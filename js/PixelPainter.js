// const (var as substitute before ES6)
var SPACE = ' ';
var FIRST = 1;
var ZERO = 0;
var ONE = 1;
var INDEX_OFFSET = 1;
var CLASS = {
  SELECTOR: '.',
  ROW_INIT: 'r',
  COLUMN_INIT: 'c',
  PIXELS: 'pixels',
  FIRST_CELL: 'r1c1',
  ROW: 'row',
  ROWS: 'rows',
  COLORS: 'colors'
};
var COLOR = {
  BLACK: '#000000',
  WHITE: '#ffffff'
};
var DEVICES = {
  MOUSE: 'mouse',
  KEYBOARD: 'keyboard'
};
var MOUSE = {
  CLICK: 'click',
  DOUBLE_CLICK: 'doubleClick',
  ENTER: 'enter',
  OVER: 'over',
  MOVE: 'move',
  DOWN: 'down',
  UP: 'up',
  RIGHT_CLICK: 'rightClick',
  WHEEL: 'wheel',
  LEAVE: 'leave',
  OUT: 'out',
  SELECT: 'select'
};

// variables
var gridHeight = 75;
var gridWidth = 100;
var foregroundColor = COLOR.BLACK;
var backgroundColor = COLOR.WHITE;
var drawMode = 'trace';
var painting = false;
var canvas = []; // stores color of each pixel

// iife that creates basic framing
var mainContainer = (function() {
  var outerFrame = document.createElement('div');
  outerFrame.className = 'outer-frame';

  var controlPanel = document.createElement('div');
  controlPanel.className = 'control';
  outerFrame.appendChild(controlPanel);

  var palette = document.createElement('div');
  palette.className = 'palette';
  controlPanel.appendChild(palette);

  var buttons = document.createElement('div');
  buttons.className = 'buttons';
  controlPanel.appendChild(buttons);

  var grid = document.createElement('div');
  grid.className = 'grid';
  outerFrame.appendChild(grid);

  var paintGrid = document.createElement('div');
  paintGrid.className = 'paint-grid';
  grid.appendChild(paintGrid);

  document.body.appendChild(outerFrame);

  return {
    outerFrame: outerFrame,
    controlPanel: controlPanel,
    palette: palette,
    buttons: buttons,
    grid: grid,
    paintGrid: paintGrid
  };
});

// run and assign to variable named 'page'
var page = mainContainer();

// iife that generates paint area
var genPaintGrid = (function() {
  var height;
  var width;
  var row;
  var cell;
  var currentHeight;
  var currentWidth;
  var searchQuery;

  // import dimensions
  function _importDimensions(newHeight, newWidth) {
    height = newHeight;
    width = newWidth;
  }

  // check current canvas size
  function _findCurrentCanvasSize() {
    currentHeight = $('.rows').item.length;
    if(currentHeight === ZERO) {
      currentWidth = ZERO;
    }else{
      currentWidth = $('.rows').item[FIRST - INDEX_OFFSET].childNodes.length;
    }
  }
  _findCurrentCanvasSize();

  // generate grid
  function _render() {
    if(currentHeight !== height && currentWidth !== width) {
      _makeNewRow();
    }
    _renderFromArray();
  }

  // render from array
  function _renderFromArray() {
    for(var rowNum = FIRST; rowNum <= currentHeight; rowNum++) {
      for(var columnNum = FIRST; columnNum <= currentWidth; columnNum++) {
        _grid(rowNum, columnNum).style.backgroundColor =
          canvas[rowNum - INDEX_OFFSET][columnNum - INDEX_OFFSET];
      }
    }
  }

  // generate rows
  function _makeNewRow() {
    for(var rowNum = FIRST; rowNum <= height; rowNum++) {
      row = document.createElement('div');
      row.className = CLASS.ROW + rowNum + SPACE + CLASS.ROWS;
      page.paintGrid.appendChild(row);
      if(rowNum <= currentHeight) { // for existing rows
        _makeNewColumn((currentWidth + ONE), width, rowNum, false); // add new columns
      }else{ // for new rows
        canvas.push([]);
        _makeNewColumn(FIRST, width, rowNum, true);
      }
    }
  }

  // generate columns (cells in each row)
  function _makeNewColumn(startColumnNum, endColumnNum, rowNum, newRow) {
    var notJumped = true;
    var currRow = $(CLASS.SELECTOR + CLASS.ROW + rowNum).item[0];
    for(var columnNum = startColumnNum; columnNum <= endColumnNum; columnNum++) {
      if(!newRow && notJumped) {
        startColumnNum = currentWidth + 1;
        notJumped = false;
      }
      if(newRow) {
        canvas[rowNum - INDEX_OFFSET].push(COLOR.WHITE);
      }
      cell = document.createElement('div');
      cell.className =  CLASS.ROW_INIT + rowNum +
                        CLASS.COLUMN_INIT + columnNum +
                        SPACE + CLASS.PIXELS;
      currRow.appendChild(cell);
    }
  }

  // grid location selector
  function _grid(row, column) {
    var searchQuery;
    searchQuery = CLASS.SELECTOR + CLASS.ROW_INIT + row + CLASS.COLUMN_INIT + column;
    return $(searchQuery)[0];
  }

  return {
    grid: _grid,
    importDimensions: _importDimensions,
    render: _render
  };
});

// run and assign to variable named
var paint = genPaintGrid();
paint.importDimensions(gridHeight, gridWidth);
paint.render();

// trigger draw function
$('.grid').onEvent(DEVICES.MOUSE, MOUSE.DOWN, function() {
  painting = true;
});
$('.grid').onEvent(DEVICES.MOUSE, MOUSE.UP, function() {
  painting = false;
});
$('.grid').onEvent(DEVICES.MOUSE, MOUSE.LEAVE, function() {
  painting = false;
});
$('.pixels').onEvent(DEVICES.MOUSE, MOUSE.OVER, function() {
  draw(this);
});
$('.pixels').onEvent(DEVICES.MOUSE, MOUSE.DOWN, function() {
  painting = true;
  draw(this);
  painting = false;
});

// draw function
function draw(item) {
  switch(drawMode) {
    case 'trace':
      if(painting) {
        item.style.backgroundColor = foregroundColor;
        savePaintToCanvas(item);
      }
      break;
  }
}

// save to canvas array
function savePaintToCanvas(pixel) {
  var pixelRow;
  var pixelColumn;
  var pixelClassName = pixel.className;
  console.log(pixelClassName);
}

// generate palette grid
var generatePaletteGrid = (function() {
  var table = document.createElement("table");
  var colors = [["#ff0000", "#ffb200", "#ffd400"], ["#fff200", "#2eff00", "#01a82b"], ["#00fff6", "#0050f2", "#cd62ea"], ["#754d2a","#dddddd", "#000000"]];
  var columnNum = 3;
  var rowNum = 4;

  for(var i = ZERO; i < rowNum; i++){
    var row = document.createElement("tr");
    row.className = "row";
    table.appendChild(row);


    for(var j = ZERO; j < columnNum; j++){
      var td = document.createElement("td");
      td.className = CLASS.ROW_INIT + (i + INDEX_OFFSET) + CLASS.COLUMN_INIT + (j + INDEX_OFFSET) + SPACE + CLASS.COLORS;
      td.style.backgroundColor = colors[i][j];
      row.appendChild(td);
    }
  }
  page.palette.appendChild(table);
});

colorPalette = generatePaletteGrid();

//buttons
var createButtons = (function() {
  var buttonErase = document.createElement("button");
  buttonErase.className = "button-erase";

  var buttonEraseText = document.createTextNode("Erase");
  buttonErase.appendChild(buttonEraseText);

  var buttonClear = document.createElement("button");
  buttonClear.className = "button-clear";

  var buttonClearText = document.createTextNode("Clear");
  buttonClear.appendChild(buttonClearText);

  page.buttons.appendChild(buttonErase);
  page.buttons.appendChild(buttonClear);
});

toolButtons = createButtons();

// use color palette to select color
$(CLASS.SELECTOR + CLASS.COLORS).onEvent(DEVICES.MOUSE, MOUSE.CLICK, function() {
  foregroundColor = this.style.backgroundColor;
});

// button functions 
$(".button-clear").onEvent(DEVICES.MOUSE, MOUSE.CLICK, function () {
  console.log("sanity check");
  paint.render();
});

$(".button-erase").onEvent(DEVICES.MOUSE, MOUSE.CLICK, function () {
  console.log("erase me");
  foregroundColor = COLOR.WHITE;
});