/// get rid of default h1
var defaultTitle = document.getElementsByTagName('h1')
defaultTitle[0].remove();

/// Add DOM elements to the page cold state
var pixelPainter = document.getElementById('pixelPainter');

/// create toolbox div and elements
var toolBox = document.createElement('div');
toolBox.setAttribute('id', 'toolBox');
pixelPainter.appendChild(toolBox);

    /// add page title to toolbox div
    var pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Pixel Painter';
    toolBox.appendChild(pageTitle);

    /// add div container for color input to toolbox
    var inputColor = document.createElement('div');
    inputColor.setAttribute('id', 'inputColor');
    inputColor.textContent = 'Color: ';
    toolBox.appendChild(inputColor);

        /// add color selector input to div
        var colorSelector = document.createElement('input');
        colorSelector.setAttribute('id', 'bttnColor');
        colorSelector.setAttribute('type', 'color');
        inputColor.appendChild(colorSelector);

    /// add div container for etchasketch buttons to toolbox
    var etchaSketch = document.createElement('form');
    etchaSketch.setAttribute('id', 'etchaSketch');
    toolBox.appendChild(etchaSketch);

        /// add clear button to etchasketch
        var clearButton = document.createElement('button');
        clearButton.setAttribute('id', 'bttnClear');
        clearButton.setAttribute('type', 'button');
        clearButton.textContent = 'Clear';
        etchaSketch.appendChild(clearButton);

        /// add reset button to etchasketch
        var resetButton = document.createElement('button');
        resetButton.setAttribute('id', 'bttnReset');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('onClick', 'location.href=location.href');
        resetButton.textContent = 'Reset';
        etchaSketch.appendChild(resetButton);

/// create canvas div
var canvasDiv = document.createElement('div');
canvasDiv.setAttribute('id', 'paintCanvas');
pixelPainter.appendChild(canvasDiv);

    /// add form to canvas div
    var gridForm = document.createElement('form');
    gridForm.setAttribute('id', 'gridForm');
    gridForm.textContent = 'Set canvas size';
    canvasDiv.appendChild(gridForm);

        /// add height input to form
        var gridHeight = document.createElement('input');
        gridHeight.setAttribute('id', 'gridHeight');
        gridHeight.setAttribute('type', 'number');
        gridHeight.setAttribute('placeholder', 'height');
        gridForm.appendChild(gridHeight);

        /// add width input to form
        var gridWidth = document.createElement('input');
        gridWidth.setAttribute('id', 'gridWidth');
        gridWidth.setAttribute('type', 'number');
        gridWidth.setAttribute('placeholder', 'width');
        gridForm.appendChild(gridWidth);

        /// add submit button to form
        var submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'bttnSubmit');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Submit';
        gridForm.appendChild(submitButton);

    /// add empty table to canvas div
    var gridTable = document.createElement('table');
    gridTable.setAttribute('id', 'gridTable');
    canvasDiv.appendChild(gridTable);

///make the grid
function makeGrid () {
    let rowz = document.getElementById('gridHeight').value;
    let colz = document.getElementById('gridWidth').value;

    /// clears existing grid elements, prevents "adding to" grid
    while (gridTable.firstChild) {
        gridTable.removeChild(gridTable.firstChild);
    }

    for (var i=1; i<=rowz; i++) {
        /// makes rows
        let gridRow = document.createElement('tr');
        gridTable.appendChild(gridRow);
        for (let j=1; j<=colz; j++) {
            /// makes columns
            let gridCell = document.createElement('td');
            gridRow.appendChild(gridCell);

            /// add color to cells
            gridCell.addEventListener('mousedown', function () {
                const color = document.getElementById('bttnColor').value;
                this.style.backgroundColor = color;
            })
        }
    }
}

// function clearGrid () {
//     let cells = document.getElementsByTagName('td');
//     if (cells.style.backgroundColor !== null) {
//         cells.style.backgroundColor = null;
//     }
//     else
// }




/// gridForm button submit to call makeGrid function
gridForm.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();

    /// hide form after submit
    if (gridForm.style.display === "none") {
        gridForm.style.display = "block";
    } else {
        gridForm.style.display = "none";
    }
})


/// etchasketch clear button to call clearGrid function
etchaSketch.addEventListener('submit', function(e) {
    e.preventDefault();
    clearGrid();
})

