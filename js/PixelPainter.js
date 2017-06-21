window.PixelPainter = (function(){

  let paint = {};

  const doc = document;
  const body = document.querySelector('body');
  let currentColor = "color";
  let e = event;
  let flag = false;

  paint.setColor = function(color){
    currentColor = color;
  }

  paint.getColor = function(){
    return currentColor;
  }

  paint.createGrid = function(width, height, className, f, fill) {

    doc.documentElement.style.setProperty("--rowNum" + String(f), width);
    doc.documentElement.style.setProperty("--colNum" + String(f), height);
    let mainDiv = doc.createElement("div");
    mainDiv.setAttribute("class", "wrapper" + f);
    for (var i = 0; i < width * height; i++) {

      let classVar = className + i;
      let idVar = "id_" + i;
      let subDiv = document.createElement("div");
      subDiv.setAttribute("class", classVar);
      subDiv.setAttribute("id", idVar);
      var myColor = "";
      if (fill[i] === undefined && f === 1) {
        myColor = generateColor();
      }
      else if (f === 1) { myColor = fill[i]; }
      else { myColor = "white"; }

      subDiv.setAttribute("style", "background-color:" + myColor);
      let func = "";
      if (f === 1) {
        let func = PixelPainter.assignColor;
        subDiv.addEventListener("click", func);
      };
      if (f === 2) {
        let func = PixelPainter.paint;
        subDiv.addEventListener("mousedown", func);
        subDiv.addEventListener("mousemove", func);
        subDiv.addEventListener("mouseup", func);
      };

      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }


  paint.paint = function(e){
    if (e.type == "mousedown"){
      console.log("Mouse Down");
      e.target.style.setProperty("background-color", PixelPainter.getColor());
      flag = true;
    } else if (e.type == "mousemove") {
      console.log("Mouse Move");
      if (flag) { e.target.style.setProperty("background-color", PixelPainter.getColor()); }
    } else if (e.type == "mouseup"){
      console.log("Mouse Up");
      flag = false;
    }
  }


  paint.createButton = function(name, f){
    if (f === 1) { f = PixelPainter.erase; };
    if (f === 2) { f = PixelPainter.clear; };

    let newButton = doc.createElement("button");
    newButton.setAttribute("id", name);
    newButton.innerHTML = name;
    newButton.addEventListener("click", f);
    doc.body.appendChild(newButton);
    let br = doc.createElement("br");
    doc.body.appendChild(br);
  }

  paint.erase = function(e){
    PixelPainter.setColor("white");
  }

  paint.clear = function(e){
    var gridDivs = doc.getElementsByClassName("grid");
    i = gridDivs.length;
    while (i--){
      gridDivs[i].style.backgroundColor = "white";

    }
  }

  function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  paint.assignColor = function(e){
        currentColor = e.currentTarget.style.getPropertyValue("background-color");
        PixelPainter.setColor(currentColor);
  }

  return paint;

})();

  //generate buttons
  PixelPainter.createButton("Erase", 1);

  PixelPainter.createButton("Clear", 2);

  //generate grids
  var fill = ["black", "white", "brown", "gray", "red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple"];
  PixelPainter.createGrid(30, 2, "box ", 1, fill);

  var fill2 = ["white", "white"];
  PixelPainter.createGrid(50, 50, "grid ", 2, fill2);
