const pixelPainter = document.querySelector("#pixelPainter");
const clear = document.createElement("button");
const erase = document.createElement("button");
const save = document.createElement("button");
const load = document.createElement("button");
const canvas = document.createElement("div");
const clearSave = document.createElement("button");
const undo = document.createElement("button");
clearSave.id = "clearSave";
undo.id = "undo";
canvas.id = "canvas";
erase.id = "erase";
clear.id = "clear";
save.id = "save";
load.id = "load";
clearSave.innerHTML = "Clear Save";
undo.innerHTML = "Undo";
erase.innerHTML = "Erase";
clear.innerHTML = "Clear";
save.innerHTML = "Save";
load.innerHTML = "Load";
pixelPainter.appendChild(canvas);
let height = 10;
let width = 10;
let savePic = [];
const canvasData = [];

for (let i = 0; i < height; i++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);
  let rowData = [];
  canvasData.push(rowData);
  for (let j = 0; j < width; j++) {
    let cell = document.createElement("div");
    let cellData = null;
    rowData.push(cellData);
    cell.className = "cell";
    row.appendChild(cell);
    cell.addEventListener("mousedown", function() {
      mousedown = true;
      this.style.backgroundColor = activeColor;
      canvasData[i][j] = activeColor;
    });
    cell.addEventListener("mouseover", function() {
      if (mousedown === true) {
        this.style.backgroundColor = activeColor;
        canvasData[i][j] = activeColor;
      }
    });
    cell.addEventListener("mouseup", stopPaint);
    // canvas.addEventListener("mouseout", stopPaint);
  }
}
const colorPalete = [
  "red",
  "orangered",
  "orange",
  "lightsalmon",
  "yellow",
  "yellowgreen",
  "green",
  "teal",
  "blue",
  "blueviolet",
  "violet",
  "mediumvioletred"
];
save.addEventListener("click", function() {
  debugger;
  savePic = canvasData.map(function(arr) {
    return arr.slice();
  });
});
load.addEventListener("click", function() {
  const canvasEl = document.getElementById("canvas");
  const rowList = canvasEl.getElementsByClassName("row");
  for (let i = 0; i < height; i++) {
    const rowEl = rowList[i];
    const cellList = rowEl.getElementsByClassName("cell");
    for (let j = 0; j < width; j++) {
      cellList[j].style.backgroundColor = savePic[i][j];
    }
  }
});
clear.addEventListener("click", function() {
  const canvasEl = document.getElementById("canvas");
  const rowList = canvasEl.getElementsByClassName("row");
  for (let i = 0; i < height; i++) {
    const rowEl = rowList[i];
    const cellList = rowEl.getElementsByClassName("cell");
    for (let j = 0; j < width; j++) {
      cellList[j].style.backgroundColor = null;
    }
  }
});
const colors = document.createElement("div");
colors.className = "colors";
pixelPainter.appendChild(colors);
const colorHeight = 4;
const colorwidth = 3;
for (let x = 0; x < colorHeight; x++) {
  let colorRow = document.createElement("div");
  colorRow.className = "colorRow";
  colors.appendChild(colorRow);
  for (let y = 0; y < colorwidth; y++) {
    let colorCols = document.createElement("div");
    colorCols.className = "colorCols";
    colorRow.appendChild(colorCols);
    colorCols.style.backgroundColor = colorPalete.pop();
    colorCols.addEventListener("click", saveMemory);
  }
}
let activeColor;
let mousedown = false;
function saveMemory() {
  activeColor = this.style.backgroundColor;
}
function stopPaint() {
  mousedown = false;
}
colors.appendChild(erase);
colors.appendChild(clear);
colors.appendChild(save);
colors.appendChild(load);
colors.appendChild(clearSave);
colors.appendChild(undo);
erase.addEventListener("click", function() {
  activeColor = this.style.backgroundColor;
});
