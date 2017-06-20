window.PixelPainter = (function(){

  let module = {};

  const doc = document;
  const body = document.querySelector('body');



  module.createGrid  = function(width, height, fill){
    doc.documentElement.style.setProperty("--rowNum", width);
    doc.documentElement.style.setProperty("--colNum", height);
    let mainDiv = doc.createElement("div");
    mainDiv.setAttribute("class", "wrapper");
    for (var i = 0; i < width * height; i++) {

      let classVar = "box " + i;
      let idVar = "id_" + i;
      let subDiv = document.createElement("div");
      subDiv.setAttribute("class", classVar);
      subDiv.setAttribute("id", idVar);

      let newP = doc.createElement("p");
      newP.setAttribute("background-color", fill[i]);
      newP.innerHTML = i;
      subDiv.appendChild(newP);

      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }



  return module;

})();

var fill = ["#fff", "red", "yellow", "rgb(251, 183, 255)"];

PixelPainter.createGrid(2, 2, fill);
