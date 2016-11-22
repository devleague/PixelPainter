
//This is the container that holds the paint palette and buttons
var paintContainer = document.querySelector("pixelPainter");

//These are the containers for the left side and title
var colorGrid = document.createElement("div");
colorGrid.className = "colorGrid";


var title = document.createElement("div");
title.className = "title";


var header = document.querySelector("h1");
header.className = "header";
colorGrid.appendChild(title);

//grid for color palette
var paintTable = document.createElement("table");
paintTable.id = "pp-colors";


// function for erase

//function for reset

//function to create paint grid

var paintGrid = createGrid(12, 5, {class: "paint"});
paintGrid.id = "paintcolors";
paintGrid.appendChild(colorGrid);

//for loop to create a random color palette
function randomColor(colors) {
  var rbgValue = '0123456789ABCDEF'.split(' ');
  var color = '#';
  for(var i = 0; i < 6; i++){
    color += rbgValue[Math.floor(Math.random() * 25)].toString(25);
  }
  return color;
}


