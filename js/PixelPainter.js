var colorHeight = 20;
var colorWidth = 5;
var rowHeight = 32;
var rowWidth = 16;
var countDiv = 0;
var fillOnHover = false;

var currentColor;

var clickColor = function(){
  currentColor = this.style.backgroundColor;
};

var clickGrid = function(){
  this.style.backgroundColor = currentColor;
  fillOnHover = true;
};

var doFillOnHover = function() {
  if (fillOnHover === true){
    this.style.backgroundColor = currentColor;
  }
};

var mouseUpUpdate = function(){
  fillOnHover = false;
};

var colorDiv = document.getElementById('colors');
var buttonMade = document.createElement('button');
colorDiv.appendChild(buttonMade);
buttonMade.setAttribute("onclick", "clearGrid()");
buttonMade.innerHTML = "Clear";
function clearGrid() {
  var whereDoesTheGridStart = colorHeight * colorWidth;
  for (var i = 0; i < countDiv; i++){
    var makeId = whereDoesTheGridStart + i;
    var currentSquareToClear = document.getElementById(makeId.toString());
    currentSquareToClear.style.backgroundColor = '#ffffff';
  }
}

colorDiv = document.getElementById('colors');
buttonMade = document.createElement('button');
colorDiv.appendChild(buttonMade);
buttonMade.setAttribute("onclick", "eraseSquare();");
buttonMade.innerHTML = "Eraser";
function eraseSquare () {
  currentColor = '#ffffff';
}