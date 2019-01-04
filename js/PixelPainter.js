const pixelPaint = (function () {
  //variables
  let pixelBody = document.getElementById('pixelPainter');
  let slctColor;
  let mouseDown = false;
  let storedArr = [];

  //invokes grid generator to make a grid for the canvas and palette
  genGrid(100, 100, 'canvas');
  genGrid(10, 7, 'palette');

  //creating and appending box for buttons
  let btnBox = document.createElement('div');
  btnBox.className = 'buttonBox';
  let palette = document.getElementsByClassName('palette');
  palette[0].appendChild(btnBox);

  //events
  document.onmousedown = function () {
    mouseDown = true;
  };

  document.onmouseup = function () {
    mouseDown = false;
  };

  document.onmouseover = function (event) {
    colorDrag(event.target);
  };
  document.body.onmousedown = function (event) {
    clicked(event.target);
  };

  //functions
  //generates and appends a grid with given size and class name
  function genGrid(r, c, name) {
    let grid = document.createElement('div');
    grid.className = name;
    pixelBody.appendChild(grid);
    for (let i = 0; i < r; i++) {
      let row = document.createElement('div');
      row.className = name + 'Row';
      for (let j = 1; j <= c; j++) {
        let cell = document.createElement('div');
        cell.className = name + 'Cell';
        cell.dataset.y = i;
        cell.dataset.x = j;
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
  }

  //makes a button with a given id
  function mkBtn(name) {
    let btn = document.createElement('div');
    btn.className = 'button';
    btn.id = name;
    btn.innerHTML = name;
    btnBox.appendChild(btn);
  }

  //creates colors and changes palette grid background to them
  function mkColors() {
    let colorCells = document.getElementsByClassName('paletteCell')
    let count = 0;
    for (let r = 0; r <= 255; r += 85) {
      for (let g = 0; g <= 255; g += 85) {
        for (let b = 0; b <= 255; b += 85) {
          colorCells[count].style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
          count++
        }
      }
    }
    for (let i = 213; i > 0; i -= 42) {
      colorCells[count].style.background = 'rgb(' + i + ',' + i + ',' + i + ')';
      count++
    }
  }

  //if mouse is down and moved over a canvas cell, colors that cell with chosen color.
  function colorDrag(e) {
    if (mouseDown && e.className === 'canvasCell') {
      e.style.backgroundColor = slctColor;
    }
  }

  //colors a cell with chosen color when clicked
  function colorClick(e) {
    if (e.className === 'canvasCell') {
      e.style.backgroundColor = slctColor;
    }
  }

  //checks clicked element class name and switches operation accordingly
  function clicked(e) {
    switch (e.className) {
      case 'canvasCell':
        colorClick(e);
        break;
      case 'paletteCell':
        selectColor(e);
        break;
      case 'button':
        buttons(e);
        break;
    }
  }

  //assigns color variable to be the same as the palette color clicked
  function selectColor(e) {
    slctColor = e.style.backgroundColor
  }

  //checks id of clicked button and switches operation accordingly
  function buttons(e) {
    switch (e.id) {
      case 'erase':
        erase();
        break;
      case 'square':
        break;
      case 'triangle':
        break;
      case 'circle':
        break;
      case 'save':
        console.log('save');

        savePic();
        break;
      case 'load':
        console.log('load');

        loadPic();
        break;
      case 'clear':
        clrGrid();
        break;
    }
  }

  //changes selected color to the default color to remove colors on grid
  function erase() {
    slctColor = 'rgb(255, 255, 255)';
  }

  //reverts entire grid to chosen default color
  function clrGrid() {
    let allCells = document.getElementsByClassName('canvasCell')
    for (let i = 0; i < allCells.length; i++) {
      allCells[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  function savePic() {
    let pixels = document.getElementsByClassName('canvasCell');
    storedArr.length = 0;
    for (let i = 0; i < pixels.length; i++) {
      storedArr.push(pixels[i])
    }
  }

  function loadPic() {
    let pixels = document.getElementsByClassName('canvasCell');
    if (storedArr[1]) {
      console.log(pixels[0])
      console.log(storedArr[0])
      for (let i = 0; i < pixels.length; i++) {
        pixels[i] = storedArr[i]
      }
    }
  }
  // invoke to create buttons and colors
  mkBtn('erase');
  mkBtn('square');
  mkBtn('triangle');
  mkBtn('circle');
  mkBtn('save');
  mkBtn('load');
  mkBtn('clear');
  mkColors();
})()