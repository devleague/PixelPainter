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

    var colorSelector = document.createElement('input');
    colorSelector.setAttribute('id', 'bttnColor');
    colorSelector.setAttribute('type', 'color');
    inputColor.appendChild(colorSelector);

    /// add div container for etchasketch buttons to toolbox
    var etchaSketch = document.createElement('div');
    etchaSketch.setAttribute('id', 'etchaSketch');
    toolBox.appendChild(etchaSketch);

    /// add clear button to etchasketch
    var clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'bttnClear');
    clearButton.setAttribute('type', 'submit');
    clearButton.textContent = 'Clear';
    etchaSketch.appendChild(clearButton);

    /// add reset button to etchasketch
    var resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'bttnReset');
    resetButton.setAttribute('type', 'submit');
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
    gridHeight.setAttribute('min', '1');
    gridHeight.setAttribute('placeholder', 'height');
    gridForm.appendChild(gridHeight);

    /// add width input to form
    var gridWidth = document.createElement('input');
    gridWidth.setAttribute('id', 'gridWidth');
    gridWidth.setAttribute('type', 'number');
    gridWidth.setAttribute('min', '1');
    gridWidth.setAttribute('placeholder', 'width');
    gridForm.appendChild(gridWidth);


