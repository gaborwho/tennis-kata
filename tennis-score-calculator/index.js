'use strict';

const TENNIS_SCORES = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

class TennisScoreCalculator {

  static create(player1, player2) {
    return new TennisScoreCalculator(player1, player2);
  }


  constructor(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
  }


  calculate() {
    if (this._isItDraw()) {
      if (this._player1.balls > 2) {
        return 'Deuce';
      }

      return this._translateScore(this._player1) + '-All';
    }

    if (this._isThereAdvantage()) {
      if (this._isThereAWinner()) {
        return 'Win for ' + this._whoHasAdvantage();
      }

      return 'Advantage ' + this._whoHasAdvantage();
    }

    return this._translateScore(this._player1) + '-' + this._translateScore(this._player2);
  }


  _translateScore(player) {
    return TENNIS_SCORES[player.balls];
  }


  _isItDraw() {
    return this._player1.balls === this._player2.balls;
  }


  _isThereAdvantage() {
    return this._player1.balls >= 4 || this._player2.balls >= 4;
  }


  _isThereAWinner() {
    return Math.abs(this._player1.balls - this._player2.balls) > 1;
  }


  _whoHasAdvantage() {
    return this._player1.balls > this._player2.balls ? this._player1.name : this._player2.name;
  }

}

module.exports = TennisScoreCalculator;
