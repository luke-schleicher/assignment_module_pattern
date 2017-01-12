var Module = (function() {

  var _privateVar = 10;
  var publicVar = "I'm a public variable";
  var stub = {};

  var _privateFunc = function() {
    console.log(_privateVar);
  };

  stub.anotherPublicFunc = function() {
    console.log("I'm a public function");
  };

  stub.publicFunc = function() {
    anotherPublicFunc();
    _privateFunc();
  };

  stub.setPublicVar = function(val) {
    publicVar = val;
  };

  stub.getPublicVar = function() {
    return publicVar;
  };

  console.log('run');

  return stub;

})();
