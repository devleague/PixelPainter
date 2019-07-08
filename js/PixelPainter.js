const pixelPainter = document.querySelector("#pixelPainter");
const clear = document.createElement("button");
const remove = document.createElement("button");
const save = document.createElement("button");
const load = document.createElement("button");
const canvas = document.createElement("div");
canvas.id = "canvas";
remove.id = "delete";
clear.id = "clear";
save.id = "save";
load.id = "load";
remove.innerHTML = "Delete";
clear.innerHTML = "Clear";
save.innerHTML = "Save";
load.innerHTML = "Load";
pixelPainter.appendChild(canvas);
let height = 70;
let width = 100;
let savePic;
for (let i = 0; i < height; i++) {
  let row = document.createElement("div");
  row.className = "row";
  canvas.appendChild(row);
  for (let j = 0; j < width; j++) {
    let cols = document.createElement("div");
    cols.className = "cols";
    row.appendChild(cols);
    cols.addEventListener("mousedown", function() {
      mousedown = true;
      this.style.backgroundColor = memory;
    });
    cols.addEventListener("mouseover", paint);
    cols.addEventListener("mouseup", stopPaint);
    clear.addEventListener("click", function() {
      cols.style.backgroundColor = clear.style.backgroundColor;
    });
    save.addEventListener("click", function() {
      savePic = cols.style.backgroundColor;
    });
    load.addEventListener("click", function() {
      cols.style.backgroundColor = savePic;
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
colors.appendChild(remove);
colors.appendChild(clear);
colors.appendChild(save);
colors.appendChild(load);
remove.addEventListener("click", function() {
  memory = this.style.backgroundColor;
});
