let paintContainer = document.querySelector("#pixelPainter");

function createGrid() {

    let grid = document.getElementById("colorSelector");
    if (grid) {
        grid.parentNode.removeChild(grid);
    }

    let gridTotal = 10;
    let size = 25;

    let container = document.createElement("div");
    container.id = "colorSelector";
    container.className = "container";
    container.style.width = (gridTotal * size) + "px";
    container.style.height = (gridTotal * size) + "px";

    for (let i = 0, len = gridTotal * gridTotal; i < len; i++) {
        grid = document.createElement("div");
        grid.className = "cell";
        grid.style.height = size + "px";
        grid.style.width = size + "px";
        grid.style.backgroundColor = magic();
        container.appendChild(grid);
    }
    paintContainer.appendChild(container);
  }

function magic()
  {let r = function () { return Math.floor(Math.random()*256);};
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }

createGrid();

function createCanvas() {

    let canvas = document.getElementById("randomBlock");
    if (canvas) {
        canvas.parentNode.removeChild(canvas);
    }

    let canvasTotal = 25;
    let pixelSize = 20;

    let insideCanvas = document.createElement("div");
    insideCanvas.id = "randomBlock";
    insideCanvas.className = "insideCanvas";
    insideCanvas.style.width = (canvasTotal * pixelSize) + "px";
    insideCanvas.style.height = (canvasTotal * pixelSize) + "px";

    for (let i = 0, len = canvasTotal * canvasTotal; i < len; i++) {
        canvas = document.createElement("div");
        canvas.className = "canvasCells";
        canvas.style.height = pixelSize + "px";
        canvas.style.width = pixelSize + "px";
        canvas.style.backgroundColor = 'white';
        insideCanvas.appendChild(canvas);
    }
    paintContainer.appendChild(insideCanvas);
  }
  createCanvas();

let paintCells = document.querySelectorAll(".paint");

Array.prototype.forEach.call(paintCells, function (cell, idx) {
  cell.style.backgroundColor = colors[idx];
});

//add event listener to clicks in paint cells
Array.prototype.forEach.call(paintCells, function (cell) {
  cell.addEventListener("click", pickColor);
});

let eraseButton = document.createElement("button");
eraseButton.className = "erase-button";
eraseButton.innerHTML = "ERASE";
paintContainer.appendChild(eraseButton);
eraseButton.addEventListener("click", eraseColor);

let clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearButton.innerHTML = "CLEAR";
paintContainer.appendChild(clearButton);
clearButton.addEventListener("click", clearCanvas);

//select all canvas cells (to apply event listener)
let canvasCells = document.querySelectorAll("#canvas");

//add event listener to start paint canvas - starts painting when mouse button clicked
Array.prototype.forEach.call(canvasCells, function (cell) {
  cell.addEventListener("mousedown", startColor);
});
//add event listener to stop painting canvas - stops painting when mouse button released
Array.prototype.forEach.call(canvasCells, function (cell) {
  cell.addEventListener("mouseup", endColor);
});

//set default paint color to white
let resetColor = "#FFFFFF";

//function to pick and store color chosen
function pickColor(event) {
  getColor = event.target.style.backgroundColor;
}

//function allowing canvas to receive current paint color
function coloring(event) {
  event.target.style.backgroundColor = pickColor();
}

//function allowing user to drag paint
function startColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.addEventListener("mousemove", coloring);
  });
}

//function stopping paint
function endColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.removeEventListener("mousemove", coloring);
  });
}

//function to erase color from individual canvas cells
function eraseColor(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.addEventListener("click", function (event) {
      event.target.style.backgroundColor = "#FFFFFF";
    });
  });
}

//function to clear canvas
function clearCanvas(event) {
  Array.prototype.forEach.call(canvasCells, function (cell) {
    cell.style.backgroundColor = "#FFFFFF";
    });
}