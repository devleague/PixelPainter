// create canvas 
for(var i=0; i<30; i++){
    var rowElem = document.createElement('div');
    rowElem.className = 'rows';
    rowElem.innerHTML = 'vertical';
    pixelPainter.appendChild(rowElem);

    for(var j=0; j<30; j++){
        var columnElem = document.createElement('div');
        columnElem.className = 'columns';
        // columnElem.innerHTML = 'horizontal';
        rowElem.appendChild(columnElem);
        columnElem.addEventListener('click', fill); 
    }
}

// add listeners to canvas
var paint = 'black';

function fill(){
    this.style.background = paint;
}

// create swatch
for(var k=0; k<10; k++){
    var swatchRow = document.createElement('div');
    swatchRow.className = 'wholeSwatch';
    swatchRow.id = 'swatch' + [k];
    // swatchRow.innerHTML = [k];
    pixelPainter.appendChild(swatchRow);
    swatchRow.addEventListener('click', colorSelect);
}

// add listeners to swatch
function colorSelect(){
    var color = this.style.background;
    paint = color;
}

// assign colors to swatch
var color0 = document.getElementById('swatch0');
color0.style.background = 'red';
var color1 = document.getElementById('swatch1');
color1.style.background = 'orange';
var color2 = document.getElementById('swatch2');
color2.style.background = 'yellow';
var color3 = document.getElementById('swatch3');
color3.style.background = 'green';
var color4 = document.getElementById('swatch4');
color4.style.background = 'blue';
var color5 = document.getElementById('swatch5');
color5.style.background = 'purple';
var color6 = document.getElementById('swatch6');
color6.style.background = 'pink';
var color7 = document.getElementById('swatch7');
color7.style.background = 'black';
var color8 = document.getElementById('swatch8');
color8.style.background = 'grey';
var color9 = document.getElementById('swatch9');
color9.style.background = 'brown';


// create eraser
var eraserElem = document.createElement('div');
eraserElem.id = 'eraser';
eraserElem.innerHTML = 'ERASER';
pixelPainter.appendChild(eraserElem);
eraserElem.addEventListener('click', erase);

//add listener to eraser
function erase(){
    paint = 'white';
}

// create clear
var clearElem = document.createElement('div');
clearElem.id = 'clear';
clearElem.innerHTML = 'CLEAR';
pixelPainter.appendChild(clearElem);
clearElem.addEventListener('click', executeClear);

// add listener to clear



function executeClear(){
    var findColumn = document.getElementsByClassName('columns');
    for(var i=0; i<findColumn.length; i++){
        findColumn[i].style.background = 'white';
    }
}
