// selector (simulating jQuery)
function $(elementName) {
  elementName = elementName.trim();
  var firstChar = elementName.charAt(0);
  if(firstChar === '#') {
    elementName = elementName.substr(1);
    return document.getElementById(elementName);
  }else if(firstChar === '.') {
    elementName = elementName.substr(1);
    return document.getElementsByClassName(elementName)[0];
  }
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
  for(var i = 1; i <= height; i++) {
    row = document.createElement('div');
    row.className = "rows";
    for(var j = 1; j <= width; j++) {
      cell = document.createElement('div');
      cell.className = "r" + i + "c" + j;
      cell.style.display = "inline-block";
      cell.style.height = "10px";
      cell.style.width = "10px";
      cell.style.backgroundColor = "white";
      row.appendChild(cell);
    }
    paintGrid.appendChild(row);
    page.grid.appendChild(paintGrid);
  }
});

// run and assign to variable named
var paint = genPaintGrid(10, 10);