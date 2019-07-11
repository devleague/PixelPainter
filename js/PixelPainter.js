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
let height = 50;
let width = 50;
let saveData = [];
let history = [];
const cells = document.getElementsByClassName("cell");

for (let i = 0; i < height; i++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);

  for (let j = 0; j < width; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    row.appendChild(cell);
    cell.addEventListener("mousedown", function() {
      mousedown = true;
      this.style.backgroundColor = activeColor;
    });
    cell.addEventListener("mouseover", function() {
      if (mousedown === true) {
        this.style.backgroundColor = activeColor;
      }
    });
    cell.addEventListener("mouseup", stopPaint);
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
  "mediumvioletred",
  "black",
  "white",
  "gray"
];
save.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    saveData[i] = cells[i].style.backgroundColor;
  }
});
clearSave.addEventListener("click", function() {
  for (let i = 0; i < saveData.length; i++) {
    saveData[i] = "rgba(255, 255, 255, 0.5)";
  }
});
load.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = saveData[i];
  }
});
undo.addEventListener('click',function () {
  
})
clear.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
});
const colors = document.createElement("div");
colors.className = "colors";
pixelPainter.appendChild(colors);
const colorHeight = 5;
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
    colorCols.addEventListener("click", makeActiveColor);
  }
}
let activeColor;
let mousedown = false;
function makeActiveColor() {
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
