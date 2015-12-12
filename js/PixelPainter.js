window.onload = function () {

(function PixelPainter () {
  var mnDiv = document.getElementById('pixelPainter');
  // this.width = width;
  // this.height = height;
  var divs= document.createElement('div');


  for (var i = 1; i <= 10; i++) {
    var row = document.createElement("div");
    row.className="Rows";
    for (var j = 1; j <= 10; j++) {
      var cell = document.createElement("div");
      cell.className= "Cells";
      row.appendChild(cell);


    }

    mnDiv.appendChild(row);

  }
  console.log(document.getElementById('pixelPainter'));

  //var test = new PixelPainter(15, 30);
})();
};