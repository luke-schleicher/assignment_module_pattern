var GAME = GAME || {};

GAME.View = (function($){

  var _$litSquare = $(".lit");

  var _$scoreBoard = $("#score");

  var _setSquareListeners = function(squareClicked) {
    _$litSquare.on("click", function(e) {
      squareClicked(e.target.id);
    })
  };

  var init = function(squareClicked) {
    _setSquareListeners(squareClicked);
    renderPlayerScore(0);
  };

  var renderPlayerScore = function(score) {
    _$scoreBoard.text(score);
  };

  var displayMole = function() {

  };

  return {
    init: init,
    renderPlayerScore: renderPlayerScore,
    displayMole: displayMole
  }


})($);
