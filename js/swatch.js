console.log('swatch is connected');

function swatchModule(){
// get reference for the pixelPainter div
var body = document.getElementById('pixelPainter');

//create the color swatch
let swatch = document.createElement('table');
swatch.id = 'swatch_base';

//create the cells
for (var i = 0; i<6; i++){
    var row = document.createElement('tr');

//create columns and attach buttons to each cell so that the buttons can be selected to choose a color
for (var j = 0; j<10; j++){
    var cell = document.createElement('td');
    var cellText = document.createTextNode('row ' + i + ' column ' + j);
    //var colorButton = document.createElement('button');
    //colorButton.className('colorChoice');
    //colorButton.innerHTML = 'color';
    cell.appendChild(cellText);
    //cell.appendChild(colorButton);
    row.appendChild(cell);
}
swatch.appendChild(row);
}
//appends table to body

body.appendChild(swatch);
swatch.setAttribute('border', '2');


};

swatchModule()


