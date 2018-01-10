console.log("canvas");
function canvasModule(){

    let ppId = document.getElementById("pixelPainter");
    let canvId = document.createElement("div");
    canvId.id = "canvas";
    ppId.appendChild(canvId);
    
    let height = 0;
    let width = 0;

    let createSpace = function(){

    }
    let getDimensions = function(){

    }
    return {
        createSpace: createSpace,
        getDimensions: getDimensions
    }
}

canvasModule();