let title = document.createElement("h1");
title.id = "title";
title.innerHTML = "Pixel Painter";
let swCon = document.getElementById("swatch_container");
swCon.insertBefore(title, swCon.childNodes[0]);



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
    
    clearButton.addEventListener("click", function(){gridFiller(_defaultBackground);});

    let eraseButton = document.createElement("button");
    eraseButton.id = "erase";
    eraseButton.className = "featureButton";
    eraseButton.innerHTML = "ERASE";
    buttonBox.appendChild(eraseButton);

    eraseButton.addEventListener("click", function(){currentColor = _defaultBackground;});
}

featureButtons();