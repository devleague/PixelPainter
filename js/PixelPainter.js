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

  pixelPainter.createGrid  = function(width, height, className, fill){
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
      subDiv.addEventListener("click", PixelPainter.assignColor);

      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }

  pixelPainter.assignColor = function(e){
        currentColor = e.currentTarget.style.getPropertyValue("background-color");
        currColor = currentColor;
        PixelPainter.setColor(currentColor);
  }

  return pixelPainter;

})();

var fill = ["orange", "red", "yellow", "rgb(251, 183, 255)"];

PixelPainter.createGrid(2, 2, "box ", fill);

