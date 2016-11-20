console.log("creating outer divs works");

function createDivFrames(){
  var outerFrame = document.createElement("div");
  outerFrame.className = "outer-frame";

  var controlPanel = document.createElement("control");
  controlPanel.className = "control";
  outerFrame.appendChild(controlPanel);

  var palette = document.createElement("palette");
  palette.className = "palette";
  controlPanel.appendChild(palette);

  var buttons = document.createElement("buttons");
  buttons.className = "buttons";
  controlPanel.appendChild(buttons);

  var grid = document.createElement("grid");
  grid.className = "grid";
  outerFrame.appendChild(grid);

  document.body.appendChild(outerFrame);
}

createDivFrames();