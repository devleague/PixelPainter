console.log('swatch is connected');

function swatchModule(){
// get reference for the pixelPainter div
var body = document.getElementById('pixelPainter');


//this module includes functions to create the Table including buttons
// function createTableModule(){

//create the color swatch
let swatch = document.createElement('table');
swatch.id = 'swatch_base';

//create the rows
for (var i = 0; i<6; i++){
    let row = document.createElement('tr');

//create columns and attach buttons to each cell so that the buttons can be selected to choose a color
    for (var c = 0; c<10; c++){
        let cell = document.createElement('td');
        let colorButton = document.createElement('button');
        colorButton.className= 'colorChoice';
        cell.appendChild(colorButton);
        row.appendChild(cell);
        }
swatch.appendChild(row);
}
//appends table to body

body.appendChild(swatch);


// };
// createTableModule()


//create color pallet

// let r = 0;
// let g = 0;
// let b = 0;

// let availableColors = function(value){
//     let v = 255/value;
//     for(var rStep = 0, r = 0; rStep<v; rStep++){
//         for (var gStep = 0, g = 0; gStep<v; gStep++){
//             for (var bStep = 0, b = 0; bStep<v; bStep++){
                
//                  b+= value;
//             }
//             g+= value;
//         }
//         r+= value;
//     }
    // return 'rgb(' + r + ',' + g + ',' + b + ')';
// }







/*
//test button 

let button1 = document.createElement('button');
let button2 = document.createElement('button');
// button1.innerHTML = "button1";
// button2.innerHTML = "button2";
body.appendChild(button1);
body.appendChild(button2);
button1.style.background='rgb(255,0,0)';
*/



};

swatchModule()


