// const
var FIRST_CHAR = 0;
var FROM_SECOND_CHAR = 1;
var FIRST_ITEM = 0;
var ID_SELECTOR = '#';
var CLASS_SELECTOR = '.';

// variables


// selector (simulating jQuery)
function $(elementName) {
  elementName = elementName.trim();
  var firstChar = elementName.charAt(FIRST_CHAR);
  var selection;

  // when no index is passed in
  if(index === undefined) {
    index = 1;
  }

  // select class or id
  if(firstChar === ID_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementById(elementName);
  }else if(firstChar === CLASS_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementsByClassName(elementName);
  }

  // event handler
  function onEvent(device, action, myFunction) {
    if(firstChar === ID_SELECTOR) {

    }else if(firstChar === CLASS_SELECTOR){
      if(device === 'mouse') {
        mouseEventsForClass(action, myFunction);
      }
    }
  }

  // event handler -> class -> mouse
  function mouseEventsForClass(action, myFunction) {

    iBasics.map(action).from(actionList).to(mouseActions);
    for(var i = 0; i < selection.length; i++) {

    }
  }

  return selection;
}