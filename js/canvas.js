console.log("canvas");

let _height = 30;
let _width = 30;

let _backgroundColor = "white";

function canvasModule(){

    let ppId = document.getElementById("pixelPainter");
    let canvId = document.createElement("div");
    canvId.id = "canvasBox";
    ppId.appendChild(canvId);

    let _borderColor = "1px solid black";
    let _cellSize = "15px";
    
    canvId.style.marginTop = "30px";

    canvId.style.outline = "3px solid gray";

    //helper function for making and appending
    function eleMaker(elem, parent, num, elClass){
        if(Boolean(num) === false){
            num = 1;
        }
        for(let i = 0; i < num; i++){
            let crEl = document.createElement(elem);
            if(typeof elClass === 'string'){
                crEl.className = elClass;
            }
            parent.appendChild(crEl);
        }
    }

    let submitForm = function(){
        let xPoint = document.getElementsByName("xWidth");
        let yPoint = document.getElementsByName("yHeight");
        console.log(xPoint, " " , yPoint);
        _width = xPoint;
        _height = yPoint;
        console.log(_width , " " , _height);
        makeCanvas(_width,_height);
    }
    console.log('calling it way up here');


    let makeCanvas = function(x, y){

        document.getElementById("choice").style.display = "none";
        // document.getElementById("prompt").style.display = "none";

        let canGrid = document.createElement("table");
        canGrid.style.border = "1px solid black";
        canGrid.style.borderCollapse = "collapse";
        canGrid.style.marginLeft = "auto";
        canGrid.style.marginRight = "auto";
        
        for(let i = 0; i < y; i++){
            let canRow = document.createElement("tr");
            canRow.className = "canvasRow";
            canRow.id = "row"+i;
            canGrid.appendChild(canRow);

            for(let j = 0; j < x; j++){    
                let squareEl = document.createElement("td");
                let squareId = "x" + j + "y" + i;
                squareEl.id = squareId;
                squareEl.className = "canvasSquare";
                squareEl.style.border = _borderColor; 
                squareEl.style.width = _cellSize;
                squareEl.style.paddingBottom = _cellSize;
                canRow.appendChild(squareEl);
                console.log('here I am')
            }
        }
        let cRow = document.getElementsByClassName("canvasRow");
        canvId.appendChild(canGrid);
    }

    function canvasButtonMaker(x, y){

        let but = document.createElement("button");
        
        but.id = "d" + x + "x" + y;
        but.innerHTML = x + " x " + y;
        but.className = "canvasButton";
        but.addEventListener("mouseup", function(){makeCanvas(x,y)});


        but.style.textAlign = "center";
        // but.style.marginLeft = "auto";
        // but.style.marginRight = "auto";
        but.style.marginTop = "auto";
        but.style.marginBottom = "10px";
        but.style.width = "80%";
        but.style.alignSelf = "center";

        return but;
    }

    let makePrompt = function(){

        let promptEl = document.createElement("div");
        promptEl.id = "prompt";
        canvId.appendChild(promptEl);
        promptEl.style.marginLeft = "auto";
        promptEl.style.marginRight = "auto";
        promptEl.style.border = "1px solid black";
        promptEl.style.width = "200px";
        promptEl.style.display = "block";

        eleMaker("ul", promptEl, 3, "promptLines");
        let pLines = document.getElementsByClassName("promptLines");
        let h2 = document.createElement("h2");
        h2.id = "canvasDimensions";
        h2.innerHTML = "Canvas Dimensions";
        pLines[0].appendChild(h2);

        let form = document.createElement("form");
        form.id = "canvasForm";
        console.log('creating these dom elements way down here');
        let formX = '<input type="text" name="xWidth" value="Width"><br>';
        let formY = '<input type="text" name="yHeight" value="Height"><br>';
        let formInp = '<input type="submit" id="formButton" value="Make Canvas"><br>';
        form.innerHTML = formX + formY + formInp;

        pLines[1].appendChild(form);

        // pLines.style.justifyContent = "center";
    }
    // makePrompt();

    let chooseCanvasSize = function(){ //makes a list of buttons that generate tables of set dimensions

        let choices = document.createElement("div");
        choices.id = "choice";
        canvId.appendChild(choices);
        choices.style.marginLeft = "auto";
        choices.style.marginRight = "auto";
        choices.style.textAlign = "center";
        choices.style.paddingBottom = "15px";
        choices.style.border = "1px solid black";
        choices.style.width = "200px";
        choices.style.display = "block";
        choices.style.alignContent = "center";

        eleMaker("div", choices, 7, "dimensions");
        let dimenButton = document.getElementsByClassName("dimensions");
        let h2 = document.createElement("h2");
        h2.id = "canvasDimensions";
        h2.innerHTML = "Canvas Dimensions";
        dimenButton[0].appendChild(h2);

        dimenButton[1].appendChild(canvasButtonMaker(10,10));
        dimenButton[2].appendChild(canvasButtonMaker(20,20));
        dimenButton[3].appendChild(canvasButtonMaker(30,30));
        dimenButton[4].appendChild(canvasButtonMaker(30,50));
        dimenButton[5].appendChild(canvasButtonMaker(50,30));
        dimenButton[6].appendChild(canvasButtonMaker(50,80));
    }
    chooseCanvasSize();

    let gridChoices = function(){
        
    }

    gridChoices();

    let scriptAttacher = function(){

        fButton = document.getElementById("formButton");
        fButton.addEventListener("submit", function(){submitForm();});
    }
    // scriptAttacher();

    return {
        makeCanvas: makeCanvas
    }
}

canvasModule();
console.log('now');