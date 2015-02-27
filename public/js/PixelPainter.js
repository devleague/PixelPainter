// Document is ready
$(function () {
  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls());
  $("#artboard").append(pixelPainter.artboard());
});

function PixelPainter (width, height) {
  var self = this;
  self.width = width;
  self.height = height;
  self.currentColor = '#000';
}

PixelPainter.prototype.buildGrid = function(columns, rows, gridEl, isColorSwatch) {
  for (var row = 0; row < rows; row++) {
    gridEl.append(this.buildRow(columns, row, isColorSwatch));
  }
};

PixelPainter.prototype.buildRow = function(columns, rowNumber, isColorSwatch) {
  var $row = $('<div>', {'class': 'row'});

    for (var column = 0; column < columns; column++) {
      var $cell = $('<div>', {'class': 'cell', 'data-row': rowNumber, 'data-col': column});
      if (isColorSwatch) {
        var color;
        if (column < columns - 1) {
          color = this.getColor(column + rowNumber * 5, 'colors');
        } else {
          color = this.getColor(rowNumber, 'greys');
        }
        $cell.css({'background-color': color}).attr('data-color', color);
      }
      $row.append($cell);
    }

  return $row;
};

PixelPainter.prototype.controls = function() {
  var $controlsContainer = $('<div>', {'id': 'controls-container'});
  var $colorSwatch = $('<div>', {'id': 'color-swatch'});
  var $currentColor = $('<div>', {'id': 'current-color', 'data-color': '#000'});
  this.buildGrid(6, 11, $colorSwatch, true);
  $controlsContainer.append($currentColor).append($colorSwatch);

  $colorSwatch.on('click', '.cell', function () {
    var color = $(this).data('color'); 
    self.currentColor = color;
    $('#current-color').data('color', self.currentColor).css({'background-color': self.currentColor});
  });
  
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

  //applies color to artboard
  $artboardGrid.on('click', '.cell', function () {
    $(this).css({'background-color': self.currentColor});
  });
  $artboardGrid.on('mouseover', '.cell', function () {
    if (isMouseDown) {
      $(this).css({'background-color': self.currentColor});
    }
  });
  $artboardContainer.append($artboardGrid);

  return $artboardContainer;
};


PixelPainter.prototype.controlBtn = function(){
  //choose a color from color swatch

  //on click apply color to isPicked div
  //shows the color chosen
  var isPicked = $("<div>",{
    "class" : "picked"
  });

  //erases colors applied
  var $erase = $("<div>",{
    "class" : "control-btn",
    html : "erase"
  });

  //clear artboard
  var $clear = $("<div>", {
    "class" : "control-btn",
    html : "clear"
  });
  
};

PixelPainter.prototype.getColor = function(indx, pallet) {
  var colorSets = {
    greys: [
      '#000000',
      '#303030',
      '#484848',
      '#606060',
      '#787878',
      '#909090',
      '#a8a8a8',
      '#c0c0c0',
      '#d9d9d9',
      '#f1f1f1',
      '#ffffff'
    ],
    colors: [
      '#cee4f6','#93c8f6','#58adf6','#1d91f6','#0084f6',
      '#d1cef6','#9a93f6','#6458f6','#2d1df6','#1300f6',
      '#eacef6','#d893f6','#c758f6','#b51df6','#ac00f6',
      '#f6cedd','#f693b9','#f65895','#f61d70','#f6005f',
      '#f6d5ce','#f6a493','#f67458','#f6431d','#f62b00',
      '#f5d1b7','#f5af7c','#f58d41','#f56c07','#f56800',
      '#f5e0b7','#f5cc7c','#f5b941','#f5a507','#f5a200',
      '#f5efb7','#f5e97c','#f5e441','#f5de07','#f5dd00',
      '#ebf5b7','#e1f57c','#d7f541','#cef507','#cdf500',
      '#adf4a2','#94f485','#7af468','#47f42d','#20f400',
      '#d6f1f7','#b9ecf7','#7de1f7','#42d7f7','#00cbf7'
    ]
  };
  return colorSets[pallet][indx];
};
