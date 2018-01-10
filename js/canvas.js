console.log("canvas");

let _height = 10;
let _width = 10;

function canvasModule(){

    let ppId = document.getElementById("pixelPainter");
    let canvId = document.createElement("div");
    canvId.id = "canvasBox";
    ppId.appendChild(canvId);

    let _borderColor = "1px solid black";
    let _cellSize = "30px";
    
    canvId.style.marginTop = "30px";

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
        let formX = '<input type="text" name="xWidth" value="Width"><br>';
        let formY = '<input type="text" name="yHeight" value="Height"><br>';
        let formInp = '<input type="submit" id="formButton" value="Make Canvas"><br>';
        form.innerHTML = formX + formY + formInp;

        pLines[1].appendChild(form);

        // pLines.style.justifyContent = "center";
    }
    makePrompt();

    let submitForm = function(){
        let xPoint = document.getElementsByName("xWidth").innerHTML;
        let yPoint = document.getElementsByName("yHeight").values[0];
        console.log(xPoint + " " + yPoint);
        console.log(_width + " " + _height);
    }
    submitForm();

    let makeCanvas = function(){

        // document.getElementById("prompt").style.display = "none";

        let canGrid = document.createElement("table");
        canGrid.style.border = "1px solid black";
        canGrid.style.borderCollapse = "collapse";
        canGrid.style.marginLeft = "auto";
        canGrid.style.marginRight = "auto";
        
        for(let i = 0; i < _height; i++){
            let canRow = document.createElement("tr");
            canRow.className = "canvasRow";
            canRow.id = "row"+i;
            canGrid.appendChild(canRow);

            for(let j = 0; j < _width; j++){    
                let squareEl = document.createElement("td");
                let squareId = "x" + j + "y" + i;
                squareEl.id = squareId;
                squareEl.className = "canvasSquare";
                squareEl.style.border = _borderColor;
                squareEl.style.height = _cellSize; 
                squareEl.style.width = _cellSize;
                squareEl.style.paddingBottom = _cellSize;
                canRow.appendChild(squareEl);
            }
        }
        let cRow = document.getElementsByClassName("canvasRow");
        canvId.appendChild(canGrid);
    }


    let scriptAttacher = function(){
        // let formScript = document.createElement("script");
        // // formScript.innerHTML = "function submitForm(){document.getElementById('canvasForm').submit()};"
        // ppId.appendChild(formScript);

        fButton = document.getElementById("formButton");
        fButton.addEventListener("submit", makeCanvas());
    }
    scriptAttacher();

    return {
        makeCanvas: makeCanvas
    }
}

canvasModule();