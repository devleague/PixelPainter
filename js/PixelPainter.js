const pixelPainter = document.querySelector("#pixelPainter");
const clearBtn = document.createElement("button");
const eraseBtn = document.createElement("button");
const saveBtn = document.createElement("button");
const loadBtn = document.createElement("button");
const canvas = document.createElement("div");
const clearSave = document.createElement("button");
let height = 100;
let width = 100;
let saveData = [];
let history = [];
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
const colors = document.createElement("div");
colors.className = "colors";
pixelPainter.appendChild(colors);
const colorHeight = 5;
const colorwidth = 3;
const cells = document.getElementsByClassName("cell");
let activeColor;
let mousedown = false;
clearSave.id = "clearSave";
canvas.id = "canvas";
eraseBtn.id = "erase";
clearBtn.id = "clear";
saveBtn.id = "save";
loadBtn.id = "load";
clearSave.innerHTML = "Clear Save";
eraseBtn.innerHTML = "Erase";
clearBtn.innerHTML = "Clear";
saveBtn.innerHTML = "Save";
loadBtn.innerHTML = "load";
pixelPainter.appendChild(canvas);
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
saveBtn.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    saveData[i] = cells[i].style.backgroundColor;
  }
});
clearSave.addEventListener("click", function() {
  for (let i = 0; i < saveData.length; i++) {
    saveData[i] = "rgba(255, 255, 255, 0.75)";
  }
});
loadBtn.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = saveData[i];
  }
});
clearBtn.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  }
});
for (let x = 0; x < colorPalete.length; x++) {
    let colorCells = document.createElement("div");
    colorCells.className = "colorCells";
    colors.appendChild(colorCells);
    colorCells.style.backgroundColor = colorPalete[x]
    colorCells.addEventListener("click", makeActiveColor);  
}

function makeActiveColor() {
  activeColor = this.style.backgroundColor;
}
function stopPaint() {
  mousedown = false;
}
colors.appendChild(eraseBtn);
colors.appendChild(clearBtn);
colors.appendChild(saveBtn);
colors.appendChild(loadBtn);
colors.appendChild(clearSave);
eraseBtn.addEventListener("click", function() {
  activeColor = this.style.backgroundColor;
});
