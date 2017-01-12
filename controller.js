var GAME = GAME || {};

GAME.Controller = (function(model, view, $){

  var init = function() {
    view.init(_squareClicked);
  };

  var _squareClicked = function(id) {
    model.successfulClick();
    _renderPlayerScore();
  };

  var _renderPlayerScore = function() {
    var score = model.getPlayerScore();
    view.renderPlayerScore(score);
  };

  var _gameLoop = function() {
    _setMole();
    setTimeout(function(){

    }, _getRandomInterval());
  };

  var _setMole = function() {
    var moleId = model.getMole();
  };

  return {
    init: init,
  };

})(GAME.Model, GAME.View, $);

$(document).ready(function(){
  GAME.Controller.init();
})
