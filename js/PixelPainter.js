// const (var as substitute before ES6)
var ROW_INIT = 'r';
var COLUMN_INIT = 'c';
var SPACE = ' ';
var PIXELS = 'pixels';
var FIRST_ROW = 1;
var FIRST_COLUMN = 1;
var ROW = 'row';
var ROWS = 'rows';
var COLOR = {
  BLACK: '#000000',
  WHITE: '#ffffff'
};
var DEVICE = {
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
var gridHeight = 10;
var gridWidth = 10;
var foregroundColor = COLOR.BLACK;
var backgroundColor = COLOR.WHITE;
var mouseDown = false;
var drawMode = 'trace';

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

  document.body.appendChild(outerFrame);

  return {
    outerFrame: outerFrame,
    controlPanel: controlPanel,
    palette: palette,
    buttons: buttons,
    grid: grid
  };
});

// run and assign to variable named 'page'
var page = mainContainer();

// iife that generates paint area
var genPaintGrid = (function(height, width) {
  var paintGrid;
  var gridArr = [];
  var row;
  var cell;

  paintGrid = document.createElement('div');
  paintGrid.className = 'paint-grid';

  // generate grid
  for(var rowNum = FIRST_ROW; rowNum <= height; rowNum++) { // i = rows
    row = document.createElement('div');
    row.className = ROW + rowNum + SPACE + ROWS;
    for(var columnNum = FIRST_COLUMN; columnNum <= width; columnNum++) { // j = columns
      cell = document.createElement('div');
      cell.className = ROW_INIT + rowNum + COLUMN_INIT + columnNum + SPACE + PIXELS;
      row.appendChild(cell);
    }
    paintGrid.appendChild(row);
    page.grid.appendChild(paintGrid);
  }

  // grid location selector
  function _grid(row, column) {
    var tempStr;
    var newRow = --row;
    var newColumn = --column;
    tempStr = CLASS_SELECTOR + ROW_INIT + newRow + COLUMN_INIT + newColumn;
    return $(tempStr);
  }

  return {
    grid: _grid
  };
});

// run and assign to variable named
var paint = genPaintGrid(gridHeight, gridWidth);

// paint grid actions
$('.grid').onEvent(DEVICE.MOUSE, MOUSE.DOWN, function() {
  $('.pixels').onEvent(DEVICE.MOUSE, MOUSE.MOVE, function() {
    this.style.backgroundColor = foregroundColor;
  });
});
$('.paint-grid').onEvent(DEVICE.MOUSE, MOUSE.UP, function() {
  $('.pixels').noEvent(DEVICE.MOUSE, MOUSE.MOVE, function() {
    this.style.backgroundColor = foregroundColor;
  });
});