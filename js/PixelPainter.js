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

  pixelPainter.createGrid = function(width, height, className, func, fill) {
    var f;
    if (func === 1) { f = PixelPainter.assignColor; };
    if (func === 2) { f = PixelPainter.paint; }

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
      subDiv.setAttribute("style", "background-color:" + fill[i]);
      subDiv.addEventListener("click", f);

      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }

  pixelPainter.paint = function(e){
      e.currentTarget.style.setPropertyValue("background-color") = pixelPainter.getColor();
      alert(e.currentTarget.style.setPropertyValue("background-color"));
  }

  pixelPainter.assignColor = function(e){
        currentColor = e.currentTarget.style.setPropertyValue("background-color");
        currColor = currentColor;
        PixelPainter.setColor(currentColor);
  }

  return pixelPainter;

})();


  var fill = ["orange", "red", "yellow", "rgb(251, 183, 255)"];

  PixelPainter.createGrid(2, 30, "box ", 1, fill);

  var fill2 = ["white", "white"];

  PixelPainter.createGrid(3, 30, "box ", 2, fill2);
