console.log('swatch is connected');



function swatchModule(){

    // this object hard stores the colors to be used on the palette.
    let colorsObj = {
        '00':'#0080FF',
        '01':'#178BE7',
        '02':'#2E97D0',
        '03':'#45A2B9',
        '04':'#5CAEA2',
        '05':'#73B98B',
        '06':'#8BC573',
        '07':'#A2D05C',
        '08':'#B9DC45',
        '09':'#D0E72E',
        10:'#E7F317',
        11:'#FFFF00',
        12:'#FFF300',
        13:'#FFE700',
        14:'#FFDC00',
        15:'#FFD000',
        16:'#FFC500',
        17:'#FFB900',
        18:'#FFAE00',
        19:'#FFA200',
        20:'#FF9700',
        21:'#FF8B00',
        22:'#FF8000',
        23:'#FF7000',
        24:'#FF6000',
        25:'#FF5000',
        26:'#FF4000',
        27:'#FF3000',
        28:'#FF2000',
        29:'#FF0000',
        30:'#E71717',
        31:'#D02E2E',
        32:'#B94545',
        33:'#A25C5C',
        34:'#8B7373',
        35:'#738B8B',
        36:'#5CA2A2',
        37:'#45B9B9',
        38:'#2ED0D0',
        39:'#17E7E7',
        40:'#00FFFF',
        41:'#00FFD4',
        42:'#00FFAA',
        43:'#00FF7F',
        44:'#00FF55',
        45:'#00FF2A',
        46:'#00FF00',
        47:'#17E70B',
        48:'#2ED017',
        49:'#45B922',
        50:'#5CA22E',
        51:'#738B3A',
        52:'#8B7345',
        53:'#A25C51',
        54:'#B9455D',
        55:'#D02E68',
        56:'#E71774',
        57:'#FF0080',
        58:'#FFFFFF',
        59:'#000000'
    }
    
// get reference for the pixelPainter div
var body = document.getElementById('pixelPainter');





//this module includes functions to create the Table including buttons
function createTableModule(){

//create the color swatch
let swatchContainer = document.createElement('div');
swatchContainer.id = 'swatch_container';
let swatchTable = document.createElement('table');
swatchTable.id = 'swatch_table';

//create the rows
for (var i = 0; i<6; i++){
    let row = document.createElement('tr');
    
//create columns and attach buttons to each cell so that the buttons can be selected to choose a color
    for (var c = 0; c<10; c++){
        let cell = document.createElement('td');
        let colorButton = document.createElement('button');
        let iVar = [i];
        let cVar = [c];
        let keyColor = iVar.toString() + cVar.toString();
        colorButton.className= 'colorChoice';
        cell.appendChild(colorButton);
        
        colorButton.style.background = colorsObj[keyColor];
        
        row.appendChild(cell);
        }
swatchTable.appendChild(row);

}
//appends table container and then to body
swatchContainer.appendChild(swatchTable);
body.appendChild(swatchContainer);
};
createTableModule()





//This module creates the functionality for the swatch buttons. It allows the user to select a color and assigns it to a variable.
function colorSelectorModule(){
let colorSelector = document.querySelector('#swatch_table');


let currentColor = function(event){
    let btnValue = event.target;
    return btnValue.style.background;
}

colorSelector.addEventListener('click', currentColor);
};
colorSelectorModule()



//This module allows the user to input a color into the canvas




};
swatchModule()







//From this point on is code that I played with that I could not get to work
//I will come back to this at a later point
/*
//create color pallet

let r = 0;
let g = 0;
let b = 0;

let availableColors = function(value){
    let v = 255/value;
    for(var rStep = 0"', r = 0; rStep<v; rStep++){
        for (var gStep = 0"', g = 0; gStep<v; gStep++){
            for (var bStep = 0"', b = 0; bStep<v; bStep++){
                
                 b+= value;
            }
            g+= value;
        }
        r+= value;
    }
    return 'rgb(' + r + '"',' + g + '"',' + b + ')';
}

*/