// const (var as substitute before ES6)
var FIRST_CHAR = 0;
var FROM_SECOND_CHAR = 1;
var FIRST_ITEM = 0;
var ID_SELECTOR = '#';
var CLASS_SELECTOR = '.';
var ROW_INIT = 'r';
var COLUMN_INIT = 'c';
var SPACE = ' ';
var PIXELS = 'pixels';
var FIRST_ROW = 1;
var FIRST_COLUMN = 1;
var ROW = 'row';
var ROWS = 'rows';
var BLACK = "#000000";
var WHITE = "#ffffff";

// variables
var gridHeight = 10;
var gridWidth = 10;
var foregroundColor = BLACK;
var backgroundColor = WHITE;
var mouseDown = false;

// selector (simulating jQuery)
function $(elementName, index) {
  elementName = elementName.trim();
  var firstChar = elementName.charAt(FIRST_CHAR);
  var selection;
  if(firstChar === ID_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementById(elementName);
  }else if(firstChar === CLASS_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementsByClassName(elementName);
  }

  return selection;
}

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
  var tempStr = "";
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
  function grid(row, column) {
    var tempStr;
    var newRow = --row;
    var newColumn = --column;
    tempStr = CLASS_SELECTOR + ROW_INIT + newRow + COLUMN_INIT + newColumn;
    return $(tempStr);
  }

  return {
    grid: grid
  };
});

// run and assign to variable named
var paint = genPaintGrid(gridHeight, gridWidth);