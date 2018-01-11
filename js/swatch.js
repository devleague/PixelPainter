console.log('swatch is connected');

function swatchModule(){
    // this object hard stores the colors to be used on the palette.
    let colorsObj = {
        00:"#FAEBD7",
        01:"#00FFFF",
        02:"#7FFFD4",
        03:"#F0FFFF",
        04:"#F5F5DC",
        05:"#FFE4C4",
        06:"#000000",
        07:"#FFEBCD",
        08:"#0000FF",
        09:"#8A2BE2",
        10:"#A52A2A",
        11:"#DEB887",
        12:"#5F9EA0",
        13:"#7FFF00",
        14:"#D2691E",
        15:"#FF7F50",
        16:"#6495ED",
        17:"#FFF8DC",
        18:"#DC143C",
        19:"#00FFFF",
        20:"#00008B",
        21:"#008B8B",
        22:"#B8860B",
        23:"#A9A9A9",
        24:"#A9A9A9",
        25:"#006400",
        26:"#BDB76B",
        27:"#8B008B",
        28:"#556B2F",
        29:"#FF8C00",
        30:"#9932CC",
        31:"#8B0000",
        32:"#E9967A",
        33:"#8FBC8F",
        34:"#483D8B",
        35:"#2F4F4F",
        36:"#2F4F4F",
        37:"#00CED1",
        38:"#9400D3",
        39:"#FF1493",
        40:"#00BFFF",
        41:"#696969",
        42:"#696969",
        43:"#1E90FF",
        44:"#B22222",
        45:"#FFFAF0",
        46:"#228B22",
        47:"#FF00FF",
        48:"#DCDCDC",
        49:"#F8F8FF",
        50:"#FFD700",
        51:"#DAA520",
        52:"#808080",
        53:"#808080",
        54:"#008000",
        55:"#ADFF2F",
        56:"#F0FFF0",
        57:"#FF69B4",
        58:"#CD5C5C",
        59:"#4B0082",
        60:"#FFFFF0",
        61:"#F0E68C",
        62:"#E6E6FA",
        63:"#FFF0F5",
        64:"#7CFC00",
        65:"#FFFACD",
        66:"#ADD8E6",
        67:"#F08080",
        68:"#E0FFFF",
        69:"#FAFAD2",
        70:"#D3D3D3",
        71:"#D3D3D3",
        72:"#90EE90",
        73:"#FFB6C1",
        74:"#FFA07A",
        75:"#20B2AA",
        76:"#87CEFA",
        77:"#778899",
        78:"#778899",
        79:"#B0C4DE",
        80:"#FFFFE0",
        81:"#00FF00",
        82:"#32CD32",
        83:"#FAF0E6",
        84:"#FF00FF",
        85:"#800000",
        86:"#66CDAA",
        87:"#0000CD",
        88:"#BA55D3",
        89:"#9370DB",
        90:"#3CB371",
        91:"#7B68EE",
        92:"#00FA9A",
        93:"#48D1CC",
        94:"#C71585",
        95:"#191970",
        96:"#F5FFFA",
        97:"#FFE4E1",
        98:"#FFE4B5",
        99:"#FFDEAD",
        100:"#000080",
        101:"#FDF5E6",
        102:"#808000",
        103:"#6B8E23",
        104:"#FFA500",
        105:"#FF4500",
        106:"#DA70D6",
        107:"#EEE8AA",
        108:"#98FB98",
        109:"#AFEEEE",
        110:"#DB7093",
        111:"#FFEFD5",
        112:"#FFDAB9",
        113:"#CD853F",
        114:"#FFC0CB",
        115:"#DDA0DD",
        116:"#B0E0E6",
        117:"#800080",
        118:"#663399",
        119:"#FF0000",
        120:"#BC8F8F",
        121:"#4169E1",
        122:"#8B4513",
        123:"#FA8072",
        124:"#F4A460",
        125:"#2E8B57",
        126:"#FFF5EE",
        127:"#A0522D",
        128:"#C0C0C0",
        129:"#87CEEB",
        130:"#6A5ACD",
        131:"#708090",
        132:"#708090",
        133:"#FFFAFA",
        134:"#00FF7F",
        135:"#4682B4",
        136:"#D2B48C",
        137:"#008080",
        138:"#D8BFD8",
        139:"#FF6347",
        140:"#40E0D0",
        141:"#EE82EE",
        142:"#F5DEB3",
        143:"#FFFFFF",
        144:"#F5F5F5",
        145:"#FFFF00",
        146:"#9ACD32",
        147:"#F0F8FF"
    }
    
// get reference for the pixelPainter div
var body = document.getElementById('pixelPainter');

//this module includes functions to create the Table including buttons
//function createTableModule(){

//create the color swatch
let swatchContainer = document.createElement('div');
swatchContainer.id = 'swatch_container';
let swatchTable = document.createElement('table');
swatchTable.id = 'swatch_table';

//create the rows
for (var i = 0; i<14; i++){
    let row = document.createElement('tr');

//create columns and attach buttons to each cell so that the buttons can be selected to choose a color
    for (var c = 0; c<10; c++){
        let cell = document.createElement('td');
        let colorButton = document.createElement('button');
        let iVar = [i];
        let cVar = [c];
        let keyColor = iVar.toString() + cVar.toString();
        colorButton.className= 'colorChoice';
        colorButton.id = 'a' + keyColor;
        console.log(keyColor);
        cell.appendChild(colorButton);
        colorButton.style.background = colorsObj[keyColor];
        row.appendChild(cell);
        }
swatchTable.appendChild(row);
}

//appends table to body
swatchContainer.appendChild(swatchTable);
body.appendChild(swatchContainer);

// };
// createTableModule()

//This section creates the functionality for the swatch buttons. It allows the user to select a color and assigns it to a variable.

let colorSelector = document.querySelector('.colorChoice');
colorSelector.addEventListener('click', currentColor);

let currentColor = function(x){
    let btnValue = x.target.id;
    return btnValue.style.background;
}





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
    for(var rStep = 0", r = 0; rStep<v; rStep++){
        for (var gStep = 0", g = 0; gStep<v; gStep++){
            for (var bStep = 0", b = 0; bStep<v; bStep++){
                
                 b+= value;
            }
            g+= value;
        }
        r+= value;
    }
    return 'rgb(' + r + '",' + g + '",' + b + ')';
}

*/





/*
//test button 

let button1 = document.createElement('button');
let button2 = document.createElement('button');
// button1.innerHTML = "button1";
// button2.innerHTML = "button2";
body.appendChild(button1);
body.appendChild(button2);
button1.style.background='rgb(255",0",0)';
*/