//Div too long for colors
window.onload = function () {
  var painterGenerator = createPaintingAbility();
  for(var i = 0; i < painterGenerator.getColorHeight(); i++){
    var newColorRow = document.createElement('div');
    newColorRow.className = 'cRows';
    newColorRow.id = 'rows' + i;
    document.getElementById('colors').appendChild(newColorRow);

      for(var j = 0; j < painterGenerator.getColorWidth(); j++){
        var newColorCell = document.createElement('div');

        countDiv++;
        newColorCell.id = countDiv;
        newColorCell.className = 'squares';
        newColorCell.style.backgroundColor = colorSelection[countDiv];
        newColorCell.addEventListener('click', painterGenerator.clickColor);
        document.getElementById('rows' + i).appendChild(newColorCell);
      }
  }

      for(var k = 0; k < painterGenerator.getRowHeight(); k++){
      var newRow = document.createElement('div');
      newRow.className = 'gRows';
      newRow.id = 'gridRows' + k;
      document.getElementById('grid').appendChild(newRow);

        for(var l = 0; l < painterGenerator.getRowWidth(); l++){
          var newCell = document.createElement('div');

          countDiv++;
          newCell.id = countDiv;
          newCell.className = 'gridSquares';

          newCell.addEventListener('mousedown', painterGenerator.clickGrid);
          newCell.addEventListener('mouseover', painterGenerator.doFillOnHover);
          newCell.addEventListener('mouseup', painterGenerator.mouseUpUpdate);

          document.getElementById('gridRows' + k).appendChild(newCell);
      }
  }
  erasers();
};