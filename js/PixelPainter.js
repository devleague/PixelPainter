const pixelPainter = document.querySelector("#pixelPainter");
const clear = document.createElement("button");
const erase = document.createElement("button");
const save = document.createElement("button");
const load = document.createElement("button");
const canvas = document.createElement("div");
canvas.id = "canvas";
erase.id = "erase";
clear.id = "clear";
save.id = "save";
load.id = "load";
erase.innerHTML = "Erase";
clear.innerHTML = "Clear";
save.innerHTML = "Save";
load.innerHTML = "Load";
pixelPainter.appendChild(canvas);
let height = 3;
let width = 3;
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
      this.style.backgroundColor = memory;
      canvasData[i][j] = memory;
    });
    cell.addEventListener("mouseover", paint);
    cell.addEventListener("mouseup", stopPaint);
    // canvas.addEventListener("mouseout", stopPaint);
    clear.addEventListener("click", function() {
      cell.style.backgroundColor = clear.style.backgroundColor;
    });
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
let memory;
let mousedown = false;
function saveMemory() {
  memory = this.style.backgroundColor;
}
function paint() {
  if (mousedown === true) {
    this.style.backgroundColor = memory;
  }
}
function stopPaint() {
  mousedown = false;
}
colors.appendChild(erase);
colors.appendChild(clear);
colors.appendChild(save);
colors.appendChild(load);
erase.addEventListener("click", function() {
  memory = this.style.backgroundColor;
});
