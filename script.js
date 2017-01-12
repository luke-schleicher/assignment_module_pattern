var Module = (function() {

  var _privateVar = 10;
  var publicVar = "I'm a public variable";

  var _privateFunc = function() {
    console.log(_privateVar);
  };

  var anotherPublicFunc = function() {
    console.log("I'm a public function");
  };

  var publicFunc = function() {
    anotherPublicFunc();
    _privateFunc();
  };

  var setPublicVar = function(val) {
    publicVar = val;
  };

  var getPublicVar = function() {
    return publicVar;
  };

  console.log('run');
 
  return {
    setPublicVar: setPublicVar,
    getPublicVar: getPublicVar,
    publicFunc: publicFunc,
    anotherPublicFunc: anotherPublicFunc
  }

})();