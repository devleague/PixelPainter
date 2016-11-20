// const
var FIRST_CHAR = 0;
var FROM_SECOND_CHAR = 1;
var FIRST_ITEM = 0;
var ID_SELECTOR = '#';
var CLASS_SELECTOR = '.';
var DEVICES = {
  MOUSE: 'mouse',
  KEYBOARD: 'keyboard'
};

// variables


// selector (simulating jQuery)
var iQuery = (function(elementName) {
  elementName = elementName.trim();
  var firstChar = elementName.charAt(FIRST_CHAR);
  var _selection;

  // select class or id
  if(firstChar === ID_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    _selection = document.getElementById(elementName);
  }else if(firstChar === CLASS_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    _selection = document.getElementsByClassName(elementName);
  }else{
    console.log("Not a class nor an id");
  }

  // add event handler
  function _onEvent(device, action, myFunction) {
    if(firstChar === ID_SELECTOR) {

    }else if(firstChar === CLASS_SELECTOR){
      if(device === DEVICE.MOUSE) {
        console.log("onEvent triggered");
        _addMouseEventsForClass(action, myFunction);
      }
    }
  }

  // map mouse actions
  function _mapMouseActions(action) {
    var myActionList = ['click', 'doubleClick', 'enter', 'over', 'move', 'down', 'up', 'rightClick', 'wheel', 'leave', 'out', 'select'];
    var mouseActionList = ['click', 'dblclick', 'mouseenter', 'mouseover', 'mousemove', 'mousedown', 'mouseup', 'contextmenu', 'wheel', 'mouseleave', 'mouseout', 'select'];
    var mouseAction = to.mapping(action).from(myActionList).to(mouseActionList);
    return mouseAction;
  }

  // add event handler -> class -> mouse
  function _addMouseEventsForClass(action, myFunction) {
    var _mouseAction = _mapMouseActions(action);
    var _selectionLength = _selection.length;
    for(var i = 0; i < _selectionLength; i++) {
      _selection[i].addEventListener(_mouseAction, myFunction);
      console.log("onEvent triggered");
    }
  }

  // remove event handler
  function _noEvent(device, action, myFunction) {
    console.log("noEvent triggered");
    if(firstChar === ID_SELECTOR) {
    }else if(firstChar === CLASS_SELECTOR){
      if(device === DEVICE.MOUSE) {
        _removeMouseEventsForClass(action, myFunction);
      }
    }
  }

  // remove event handler -> class -> mouse
  function _removeMouseEventsForClass(action, myFunction) {
    var _mouseAction = _mapMouseActions(action);
    var _selectionLength = _selection.length;
    for(var i = 0; i < _selectionLength; i++) {
      _selection[i].removeEventListener(_mouseAction, myFunction);
    }
  }

  return {
    item: _selection,
    onEvent: _onEvent
    // noEvent: _noEvent
  };
});

// assign to "$"
var $ = iQuery;