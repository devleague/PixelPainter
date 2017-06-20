window.PixelPainter = (function(){

  let pixelPainter = {};

  const doc = document;
  const body = document.querySelector('body');
  let currColor = "color";
  let e = event;

  pixelPainter.setColor = function(color){
    currColor = color;
  }

  pixelPainter.getColor = function(){
    return currColor;
  }

  pixelPainter.createGrid = function(width, height, className, evnt, func, fill) {
    var f;
    if (func === 1) { f = PixelPainter.assignColor; };
    if (func === 2) { f = PixelPainter.paint; };

    doc.documentElement.style.setProperty("--rowNum", width);
    doc.documentElement.style.setProperty("--colNum", height);
    let mainDiv = doc.createElement("div");
    mainDiv.setAttribute("class", "wrapper");
    for (var i = 0; i < width * height; i++) {

      let classVar = className + i;
      let idVar = "id_" + i;
      let subDiv = document.createElement("div");
      subDiv.setAttribute("class", classVar);
      subDiv.setAttribute("id", idVar);
      var myColor = "";
      if (fill[i] === undefined && func === 1) {
        myColor = generateColor();
      }
      else if (func === 1) { myColor = fill[i]; }
      else { myColor = "white"; }

      subDiv.setAttribute("style", "background-color:" + myColor);
      subDiv.addEventListener(evnt, f);

      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }

  function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  pixelPainter.paint = function(e){
      e.currentTarget.style.setProperty("background-color", PixelPainter.getColor());
  }

  pixelPainter.assignColor = function(e){
        currentColor = e.currentTarget.style.getPropertyValue("background-color");
        currColor = currentColor;
        PixelPainter.setColor(currentColor);
  }

  return pixelPainter;

})();


  var fill = ["orange", "red", "yellow", "rgb(251, 183, 255)"];
  PixelPainter.createGrid(2, 30, "box ", 'click', 1, fill);

  var fill2 = ["white", "white"];
  PixelPainter.createGrid(10, 30, "grid ", 'mousemove', 2, fill2);
