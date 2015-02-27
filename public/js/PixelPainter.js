// Document is ready
$(function () {
  var pixelPainter = new PixelPainter(35,35);
  $("#controls").append(pixelPainter.controls());
  $("#controls").append(pixelPainter.controlBtn());
  $("#artboard").append(pixelPainter.artboard());
});

function PixelPainter (width, height) {
  this.width = width;
  this.height = height;
  this.currentColor = '#fff';  
}

PixelPainter.prototype.buildGrid = function(columns, rows, gridEl) {
  for (var row = 0; row < rows; row++) {
    gridEl.append(this.buildRow(columns, row));
  } //end row loop
};

PixelPainter.prototype.buildRow = function(rowCells, rowNumber) {
  var $row = $('<div>', {'class': 'row'});

    for (var column = 0; column < rowCells; column++) {
      var $cell = $('<div>', {'class': 'cell', 'data-row': rowNumber, 'data-col': column});
      $row.append($cell);
    }

  return $row;
};

PixelPainter.prototype.controls = function() {
  var $controlsContainer = $('<div>', {'id': 'controls-container'});
  var $colorSwatch = $('<div>', {'id': 'color-swatch'});
  this.buildGrid(6, 11, $colorSwatch);
  $controlsContainer.append($colorSwatch);
  
  return $controlsContainer;
};

PixelPainter.prototype.artboard = function() {
  var $artboardContainer = $('<div>', {'id': 'artboard-container'});
  var $artboardGrid = $('<div>', {'id': 'artboard-grid'});
  this.buildGrid(this.width, this.height, $artboardGrid);

  var isMouseDown = false;
  $artboardGrid.mousedown(function () {
    isMouseDown = true;
  }).mouseup(function () {
    isMouseDown = false;
  });
  $artboardGrid.on('click', '.cell', function () {
    $(this).css({'background-color': '#000'});
  });
  $artboardGrid.on('mouseover', '.cell', function () {
    if (isMouseDown) {
      $(this).css({'background-color': 'rgba(0,0,0,1)'});
    }
  });
  $artboardContainer.append($artboardGrid);

  return $artboardContainer;
};

PixelPainter.prototype.controlBtn = function(){
  var $erase = $("<div>",{
    "class" : "control-btn",
    html : "erase"
  });


  var $clear = $("<div>", {
    "class" : "control-btn",
    html : "clear"
  });
  
  return $clear, $erase;

};

