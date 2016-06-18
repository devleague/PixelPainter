function erasers () {
  var colorDiv = document.getElementById('colors');
  var buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "erasingAll()");
  buttonMade.innerHTML = "Clear";

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "eraseSquare()");
  buttonMade.innerHTML = "Eraser";
}

var cPA = createPaintingAbility();
function erasingAll() {
  for (var i = 0; i < cPA.getCountDiv(); i++){
    var whereDoesTheGridStart = cPA.getColorHeight() * cPA.getColorWidth();
    var makeId = whereDoesTheGridStart + i;
    var currentSquareToClear = document.getElementById(makeId.toString());
    currentSquareToClear.style.backgroundColor = '#ffffff';
  }
}
function eraseSquare () {
  currentColor = '#ffffff';
}