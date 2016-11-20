// const
var FIRST_CHAR = 0;
var FROM_SECOND_CHAR = 1;
var FIRST_ITEM = 0;
var ID_SELECTOR = '#';
var CLASS_SELECTOR = '.';

// selector (simulating jQuery)
function $(elementName, index) {
  elementName = elementName.trim();
  var firstChar = elementName.charAt(FIRST_CHAR);
  var selection;
  if(firstChar === ID_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementById(elementName);
  }else if(firstChar === CLASS_SELECTOR) {
    elementName = elementName.substr(FROM_SECOND_CHAR);
    selection = document.getElementsByClassName(elementName);
  }

  function onEvent(device, action, myFunction) {
    if(firstChar === ID_SELECTOR) {

    }
  }

  return selection;
}