//Div too long for colors
window.onload = function () {

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