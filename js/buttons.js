let title = document.createElement("h1");
title.id = "title";
title.innerHTML = "Pixel Painter";
let swCon = document.getElementById("swatch_container");
swCon.insertBefore(title, swCon.childNodes[0]);

let _borderColor = "black";
let _borderToggle = true;

let backgChanger = function(){
    let canSquares = document.getElementsByClassName("canvasSquare");
    for(let i = 0; i < canSquares.length; i++){
        if(canSquares[i].style.background === _storedBackground){
            canSquares[i].style.background = currentColor;
        }
    }
    _storedBackground = currentColor;
}

let borderChanger = function(){
    let canSquares = document.getElementsByClassName("canvasSquare");
    let cGrid = document.getElementById("canGrid");
    cGrid.style.border = "1px solid " + currentColor;
    for(let i = 0; i < canSquares.length; i++){
        canSquares[i].style.border = "1px solid " + currentColor; 
    }
    _borderColor = currentColor;
}

let borderToggler = function(){
    let canSquares = document.getElementsByClassName("canvasSquare");
    let cGrid = document.getElementById("canGrid");
    if(_borderToggle){
        for(let i = 0; i < canSquares.length; i++){
            canSquares[i].style.border = "none"; 
        }
        _borderToggle = false;
    } else {
        cGrid.style.border = "1px solid " + _borderColor;
        for(let i = 0; i < canSquares.length; i++){
            canSquares[i].style.border = "1px solid " + _borderColor; 
        }
        _borderToggle = true;
    }
}

let featureButtons = function(){

    let buttonBox = document.createElement("div");
    buttonBox.id = "buttonBox";

    let parent = document.getElementById("swatch_container");
    parent.appendChild(buttonBox);

    let colorDisplay = document.createElement("div");
    colorDisplay.id = "colorDisp";
    colorDisplay.className = "featureButton";
    buttonBox.appendChild(colorDisplay);
    swCon.addEventListener("click", function(){colorDisplay.style.backgroundColor = currentColor;});


    let clearButton = document.createElement("button");
    clearButton.id = "clear";
    clearButton.className = "featureButton";
    clearButton.innerHTML = "CLEAR";
    buttonBox.appendChild(clearButton);
    
    clearButton.addEventListener("click", function(){gridFiller(_storedBackground);});

    let eraseButton = document.createElement("button");
    eraseButton.id = "erase";
    eraseButton.className = "featureButton";
    eraseButton.innerHTML = "ERASE";
    buttonBox.appendChild(eraseButton);

    eraseButton.addEventListener("click", function(){currentColor = _storedBackground;});

    let backgButton = document.createElement("button");
    backgButton.id = "backg";
    backgButton.className = "featureButton";
    backgButton.innerHTML = "Change Background";
    buttonBox.appendChild(backgButton);

    backgButton.addEventListener("click", function(){backgChanger();});

    let borderButton = document.createElement("button");
    borderButton.id = "borderB";
    borderButton.className = "featureButton";
    borderButton.innerHTML = "Change Grid Color";
    buttonBox.appendChild(borderButton);

    borderButton.addEventListener("click", function(){borderChanger();});

    let toggleButton = document.createElement("button");
    toggleButton.id = "toggleB";
    toggleButton.className = "featureButton";
    toggleButton.innerHTML = "Grid On/Off";
    buttonBox.appendChild(toggleButton);

    toggleButton.addEventListener("click", function(){borderToggler();});


}

featureButtons();