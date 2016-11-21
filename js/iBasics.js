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

  // comparing things
  function _comparing() {
    function _if(item) {
      // detect item type
      var itemType = typeof item;

      // functions for comparing numbers
      function _isBiggerThan(number) {
        return item > number;
      }
      function _isSmallerThan(number) {
        return item < number;
      }
      function _isEqualTo(number) {
        return item === number;
      }

      //return functions according to item type
      switch(itemType) {
        case 'number':
          return {
            isBiggerThan: _isBiggerThan,
            isSmallerThan: _isSmallerThan,
            isEqualTo: _isEqualTo
          };
      }
    }
    return { if: _if };
  }

  return{
    mapping: _mapping,
    comparing: _comparing
  };
});

var to = iBasics();