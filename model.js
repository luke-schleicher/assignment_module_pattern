var GAME = GAME || {};

GAME.Model = (function(){

  var _playerScore = 0;

  var _updatePlayerScore = function() {
    _playerScore++
  };

  var getPlayerScore = function() {
    return _playerScore;
  };

  var successfulClick = function() {
    _updatePlayerScore();
  };

  var getMole = function() {
    return Math.floor(Math.random() * 8) + 1
  };

  return {
    getPlayerScore: getPlayerScore,
    successfulClick: successfulClick,
    getMole: getMole
  }

})();
