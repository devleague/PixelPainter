window.onload = function () {



//Experimenting with ID for each of the cells.  Idea was to identify them by an ID set in the loop below
//(that does work) and then track them by ID changing there state.  Can't get to work but think
//I found better solution on clickableGrid below.

// function mouseOver () {
//   console.log(whatCell);
//   document.getElementById(whatCell).style= cellColor;

//};

var paint = function() {



  // whatCell = event.target.id;
  // //console.log(whatCell);
  // document.getElementById(whatCell).onmouseenter = function () {
  //   mouseOver();
  // };


// };
//   document.getElementById('whatCell').onmouseleave = function mouseLeave() {
//     document.getElementById('whatCell').style.color = "black";
//   };
//   console.log(event.target.id);
 event.target.style.background = cellColor;
//  // }
};

var storeColor = function () {
  cellColor = event.target.style.background;
};

//If you look at this Nick, I discovered the problem was that
//we had "paintArea.length" (the id) instead of the array paint.Arry
var clearButton = document.createElement('button');
clearButton.innerHTML= 'Clear';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', function () {
  for (var j=0; j < paintArry.length; j++) {
  paintArry[j].style.backgroundColor = '#ffffff';
  }
});

var eraseButton = document.createElement('button');
eraseButton.innerHTML= 'Erase';
document.body.appendChild(eraseButton);

eraseButton.addEventListener('click', function () {
 cellColor = '#ffffff';
 return cellColor;
});

var broygbivbpArry = ['#000000', '#FF0000', 'orange','#FFFF00','#00FF00', '#0000FF', '#0000ff', '#660066', '#993333', '#ff99cc'];
//var lastClicked;
var grid = clickableGrid(30, 40, paint);

var pallette = colorPallette (2, 5, storeColor);
var cellColor = '#ffffff';


document.body.appendChild(pallette);
document.body.appendChild(grid);

function clickableGrid( rows, cols, fn){
    var grid = document.createElement('table');
    grid.className = 'grid';
    grid.id = 'paintArea';
    var g = 0;

    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        g = g +1;

        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.id ="Row"  + g + "cell" + c;

            //console.log(cell.parentNode.rowIndex, cell.cellIndex);
            cell.addEventListener('click', fn);
//Can use the above...when clicked sets a Boolean to its opposite ( val = !val).  The variable outside of this is set to
//false from the start.  when click sets it to true the bellow event listener is allowed to function turning the cells
//the same color as set in paint (maybe use same function?).  When ending cell is clicked again, its eventlistener
//turns Boolean to false ending the mousenter painting.  Logic will need worked out.
            //cell.addEventListener('mouseenter', fn);
        }
    }
    return grid;
}

var paintArry = document.getElementById('paintArea').querySelectorAll('td');

var palletteArry = document.getElementById('swatch').querySelectorAll('td');

function colorPallette( rows, cols, fn){
  var grid = document.createElement('table');
  grid.id = 'swatch';
  grid.className = 'grid';
  for (var r=0; r<rows; ++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0;c<cols;++c){
        var cell = tr.appendChild(document.createElement('td'));
        cell.addEventListener('click', fn);
    }

  }
  return grid;
}

for (j=0; j < 10; j++) {
palletteArry[j].style.background = broygbivbpArry[j];
}
};
