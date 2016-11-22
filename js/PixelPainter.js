var pixelPainterModule = (function() {

  // GRID FORM INPUTS //

  var gridSizeForm = document.createElement('form');
  gridSizeForm.id = 'gridForm';
  pixelPainter.appendChild(gridSizeForm);

  var inputBoxWidth = document.createElement('input');
  inputBoxWidth.setAttribute('type', 'text');
  inputBoxWidth.setAttribute('placeholder', 'Width');
  gridSizeForm.appendChild(inputBoxWidth);

  var inputBoxHeight = document.createElement('input');
  inputBoxHeight.setAttribute('type', 'text');
  inputBoxHeight.setAttribute('placeholder', 'Height');
  gridSizeForm.appendChild(inputBoxHeight);

  // GRID CREATE BUTTON //

  var gridButton = document.createElement('div');
  gridButton.id = 'grid-button';
  gridButton.innerHTML = 'CREATE GRID';
  pixelPainter.appendChild(gridButton);
  gridButton.addEventListener('click', function() {
    createGrid(document.getElementById("gridForm").elements[0].value, document.getElementById("gridForm").elements[1].value);
    console.log('grid created!');
  });

  // DELETE GRID //

  var deleteGrid = document.createElement('div');
  deleteGrid.id = 'delete-grid';
  deleteGrid.innerHTML = 'DELETE GRID';
  pixelPainter.appendChild(deleteGrid);
  deleteGrid.addEventListener('click', function() {
    pixelPainter.removeChild(grid);
    console.log('grid deleted');
  });

  // CREATE GRID FUNCTION //

  function createGrid(width, height) {
    var table = document.createElement('table');
    table.id = 'grid';
    pixelPainter.appendChild(table);

    for ( var i = 0; i < height; i ++ ) {
      var rows = document.createElement('tr');
      grid.appendChild(rows);

      for ( var j = 0; j < width; j ++ ) {
        var columns = document.createElement('td');
        rows.appendChild(columns);
        columns.className = "cells";
        columns.addEventListener('click', function (){
           this.style.backgroundColor = selectedColor;
         });
      }
    }
  }

  // COLOR PALETTE //

  var selectedColor;

  var colorArray = ["red", "blue", "yellow", "green",
  "black", "orange", "purple", "pink", "brown", "aqua"];


  var paletteTable = document.createElement('table');
  paletteTable.id = "palette";
  pixelPainter.appendChild(paletteTable);

  for(var i =0; i < colorArray.length; i++){
    var rows = document.createElement('div');
    rows.id = i;
    rows.style.backgroundColor= colorArray[i];
    rows.style.width= 20;
    rows.style.height = 20;
    paletteTable.appendChild(rows);
    rows.addEventListener('click', function() {
      selectedColor = this.style.backgroundColor;
      console.log(selectedColor);
    });
  }

  // CLEAR BUTTON //

  function clear() {
    var tdList = document.querySelectorAll('.cells');
    console.log(tdList.length);
    console.log('clearing!');
    for ( var i = 0; i < tdList.length; i ++ ) {
      tdList[i].style.backgroundColor = 'white';
    }
  }

  var clearButton = document.createElement('div');
  clearButton.id = 'clear-button';
  clearButton.innerHTML = 'CLEAR';
  pixelPainter.appendChild(clearButton);
  clearButton.addEventListener('click', function() {
    clear();
  });

  // ERASE BUTTON //

  var eraseButton = document.createElement('div');
  eraseButton.id = 'erase-button';
  eraseButton.innerHTML = 'ERASE';
  pixelPainter.appendChild(eraseButton);
  eraseButton.addEventListener('click', function() {
    console.log('eraser active');
    selectedColor = 'white';
  });

  return {
    clear: clear,
    createGrid: createGrid
  };

})();
