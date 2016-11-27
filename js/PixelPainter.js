
let paintContainer = document.querySelector("#pixelPainter");
let cellColor = '';

let paintDiv = document.createElement("div");
    paintDiv.className = "paintDiv";
    paintContainer.appendChild(paintDiv);

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
    paintDiv.appendChild(container);
  }



function magic()

  {let r = function () { return Math.floor(Math.random()*256);};
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }

createGrid();

/*let buttonDiv = document.createElement("div");
  buttonDiv.className = "Buttons";
  paintContainer.appendChild(buttonDiv);*/

let canvasDiv = document.createElement("div");
  canvasDiv.className = "canvasDiv";
  paintContainer.appendChild(canvasDiv);

function createCanvas() {

    let canvas = document.getElementById("randomBlock");
    if (canvas) {
        canvas.parentNode.removeChild(canvas);
    }

    let canvasWidth = 35;
    let canvasHeight = 20;

    let pixelSize = 20;

    let insideCanvas = document.createElement("div");
    insideCanvas.id = "randomBlock";
    insideCanvas.className = "insideCanvas";
    insideCanvas.style.width = (canvasWidth * pixelSize) + "px";
    insideCanvas.style.height = (canvasHeight * pixelSize) + "px";

    for (let i = 0, len = canvasWidth * canvasHeight; i < len; i++) {
       canvas = document.createElement("div");
       canvas.className = "canvasCells";
       canvas.style.height = pixelSize + "px";
       canvas.style.width = pixelSize + "px";
       canvas.addEventListener("click",function() {
       this.style.backgroundColor = cellColor});
       canvas.style.backgroundColor = 'white';
       insideCanvas.appendChild(canvas);
       canvas.addEventListener('mouseover', function(){
       if (event.buttons === 1) {
           if (event.shiftKey) {
             this.style.backgroundColor = 'white';
           } else {
             this.style.backgroundColor = cellColor;
           }
         }
       });
      }
        canvasDiv.appendChild(insideCanvas);
  }

  createCanvas();

let eraseButton = document.createElement("button");
 eraseButton.className = "eraseBtn";
 eraseButton.innerHTML = "ERASE";
 paintDiv.appendChild(eraseButton);
 eraseButton.addEventListener("click", eraseCell);

 function eraseCell() {
       cellColor = "#FFFFFF";
 }

 let clearButton = document.createElement("button");
 clearButton.className = "clearBtn";
 clearButton.innerHTML = "CLEAR";
 paintDiv.appendChild(clearButton);
 clearButton.addEventListener("click", clearCanvas);

 function clearCanvas() {
  for (var i = 0; i < document.querySelectorAll('.canvasCells').length; i++){
    document.querySelectorAll('.canvasCells')[i].style.backgroundColor = 'white';
  }
}

let saveButton = document.createElement("button");
saveButton.className = "saveBtn";
saveButton.innerHTML = "SAVE";
paintDiv.appendChild(saveButton);
saveButton.addEventListener("click", saveCanvas);

let saveArray = [];

function saveCanvas() {
  let save = document.querySelectorAll('.canvasCells');
  if(saveArray === 0){
  for (var i = 0; i < save.length; i++) {
    saveArray.push(save[i].style.backgroundColor);
    }
 } else {
  saveArray = [];
  for(var j = 0; j <save.length; j++) {
    saveArray.push(save[j].style.backgroundColor);
    }
  }
}

let loadButton = document.createElement("button");
loadButton.className = "loadBtn";
loadButton.innerHTML = "LOAD";
paintDiv.appendChild(loadButton);
loadButton.addEventListener("click", loadCanvas)

function loadCanvas() {
  let load = document.querySelectorAll('.canvasCells');
  for(var i = 0; i < load.length; i++) {
    load[i].style.backgroundColor = saveArray[i];
    console.log(saveArray);
  }
}
