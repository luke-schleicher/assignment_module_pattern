var GAME = GAME || {};

GAME.Controller = (function(model, view, $){

  var init = function() {
    view.init(_squareClicked);
    _gameLoop();
  };

  var _squareClicked = function(id) {
    model.successfulClick();
    _renderPlayerScore();
    view.toggleMole(id);
  };

  var _renderPlayerScore = function() {
    var score = model.getPlayerScore();
    view.renderPlayerScore(score);
  };

  var _getRandomInterval = function() {
    return Math.floor(Math.random() * 3 + 1) * 1000;
  };

  var _gameLoop = function() {

    var moleID = _setMole();

    setTimeout(function(){

      // display mole
      view.toggleMole(moleID);

      // clear mole
      setTimeout(function(){
        view.toggleMole(moleID);
      }, _getRandomInterval());

      _gameLoop();

    }, _getRandomInterval());

  };

  var _setMole = function() {
    return model.getMole();
  };

  return {
    init: init,
  };

})(GAME.Model, GAME.View, $);

$(document).ready(function(){
  GAME.Controller.init();
});
