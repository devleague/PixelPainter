window.onload = function(){
console.log('sanity check - mother fucker');


var swatchTable = document.createElement('div');
swatchTable.className = "swatch";
pixelPainter.appendChild(swatchTable);

//   function createPallette(){

// //for row
  for (var i = 0; i < 15; i++) {
    var tr = document.createElement('tr');
    tr.className = "palletteRows";
    tr.innerHTML = "testy";
    swatchTable.appendChild(tr);    
  }
};