var iBasics = (function(){

  // mapping things
  function _mapping(item) {
    function _from(arrayOfOrigin) {
      function _to(arrayOfDestination) {
        for(i = 0; i < arrayOfOrigin.length; i++) {
          if(arrayOfOrigin[i] === item) {
            return arrayOfDestination[i];
          }
        }
        console.log("Mapping", item, "from", arrayOfOrigin,
          "to", arrayOfDestination, "resulted in no match");
      }
      return { to: _to };
    }
    return { from: _from };
  }

  // string stuff
  function _deleting(delStr) {
    function _from(originStr) {

    }
    return { from: _from };
  }

  return{
    mapping: _mapping,
    deleting: _deleting
  };
});

var to = iBasics();