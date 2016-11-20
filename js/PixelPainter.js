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