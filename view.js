var GAME = GAME || {};

GAME.View = (function($){

  var _$litSquare = $(".lit");

  var _$scoreBoard = $("#score");

  var _setSquareListeners = function(squareClicked) {
    $("body").on("click", _$litSquare, function(e) {
      squareClicked(e.target.id);
    });
  };

  var init = function(squareClicked) {
    _setSquareListeners(squareClicked);
    renderPlayerScore(0);
  };

  var renderPlayerScore = function(score) {
    _$scoreBoard.text(score);
  };

  var toggleMole = function(id) {
    var $square = $("#" + id);
    $square.toggleClass('lit');
  };

  return {
    init: init,
    renderPlayerScore: renderPlayerScore,
    toggleMole: toggleMole
  }


})($);
