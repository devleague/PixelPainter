let paintContainer = document.querySelector("#pixelPainter");
let cellColor = '';
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
        grid.addEventListener("click",function() {
        cellColor = this.style.backgroundColor});
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

    let canvasTotal = 50;
    let pixelSize = 15;

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
        canvas.addEventListener("click",function() {
        this.style.backgroundColor = cellColor});
        canvas.style.backgroundColor = 'white';
        insideCanvas.appendChild(canvas);
    }
    paintContainer.appendChild(insideCanvas);
  }

  createCanvas();

let eraseButton = document.createElement("button");
 eraseButton.className = "eraseBtn";
 eraseButton.innerHTML = "ERASE";
 paintContainer.appendChild(eraseButton);
 eraseButton.addEventListener("click", eraseCell);

 function eraseCell() {
       cellColor = "#FFFFFF";
 }


 let clearButton = document.createElement("button");
 clearButton.className = "clearBtn";
 clearButton.innerHTML = "CLEAR";
 paintContainer.appendChild(clearButton);
 clearButton.addEventListener("click", clearCanvas);

 let drawColor = instanceOfMouseEvent.buttons === 1;