window.onload = function () {
var paint = function() {
  event.target.style.background = cellColor;
};

var lastClicked;
var grid = clickableGrid(30, 40, paint);
var pallette = clickableGrid(5, 5);
var cellColor = "black";
    //el.className='clicked';
    // if (lastClicked) lastClicked.className='';
    // lastClicked = el;

document.body.appendChild(pallette);
document.body.appendChild(grid);

function clickableGrid( rows, cols, fn){
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
              cell.addEventListener('click', fn)
            //     return function(){
            //         callback(el,r,c,i);
            //     };
            // })(cell,r,c,i),false);
        }
    }
    return grid;
}

                //console.log(event.target.style);
                //(function(el,r,c,i){

};
