window.PixelPainter = (function(){

  let module = {};

  const doc = document;
  const body = document.querySelector('body');

  module.createGrid  = function(width, height){
    doc.documentElement.style.setProperty("--rowNum", width);
    doc.documentElement.style.setProperty("--colNum", height);
    let mainDiv = doc.createElement("div");
    mainDiv.setAttribute("class", "wrapper");
    for (var i = 0; i < width * height; i++) {
      let classVar = "box " + i;
      let idVar = "id_" + i;
      let subDiv = document.createElement("div");
      subDiv.setAttribute("class", classVar);
      subDiv.setAttribute("id", classVar);
      subDiv.innerHTML = "";
      mainDiv.append(subDiv);
    }
    doc.body.appendChild(mainDiv);
  }

  return module;

})();

PixelPainter.createGrid(10, 12);