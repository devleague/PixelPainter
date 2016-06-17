//var tester = function () {alert()};

window.onload = function(){

  //var cellCreate = function(){
  //};

  var colorHeight = 3;
  var colorWidth = 3;
  var rowHeight = 20;
  var rowWidth = 20;
  var countDiv = 0;
  var fillOnHover = false;

  var currentColor;

  var clickColor = function(){
    currentColor = this.style.backgroundColor;
  };

  var clickGrid = function(){
    this.style.backgroundColor = currentColor;
    fillOnHover = true;
  };

  var doFillOnHover = function() {
    if (fillOnHover === true){
      this.style.backgroundColor = currentColor;
    }
  };

  var mouseUpUpdate = function(){
    fillOnHover = false;
  };

  var colorSelection = ['#000000', '#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#c0c0c0', '#ffffff'];

  for(var i = 0; i < colorHeight; i++){
    var newColorRow = document.createElement('div');
    newColorRow.className = 'cRows';
    newColorRow.id = 'rows' + i;
    document.getElementById('colors').appendChild(newColorRow);

      for(var j = 0; j < colorWidth; j++){
        var newColorCell = document.createElement('div');

        countDiv++;
        newColorCell.id = countDiv;
        newColorCell.className = 'squares';
        newColorCell.style.backgroundColor = colorSelection[countDiv];
        newColorCell.addEventListener('click', clickColor);
        //maybe mouse up changes x?  WRONG AREA
        document.getElementById('rows' + i).appendChild(newColorCell);
      }
  }

      for(var k = 0; k < rowHeight; k++){
      var newRow = document.createElement('div');
      newRow.className = 'gRows';
      newRow.id = 'gridRows' + k;
      document.getElementById('grid').appendChild(newRow);

        for(var l = 0; l < rowWidth; l++){
          var newCell = document.createElement('div');

          countDiv++;
          newCell.id = countDiv;
          newCell.className = 'gridSquares';

          newCell.addEventListener('mousedown', clickGrid);
          newCell.addEventListener('mouseover', doFillOnHover);
          newCell.addEventListener('mouseup', mouseUpUpdate);

          document.getElementById('gridRows' + k).appendChild(newCell);
      }
  }

};