'use strict';

const expect = require('chai').expect;
const TennisScoreCalculator = require('./');

describe('TennisScoreCalculator', function() {

  describe('#calculate', function() {

    [
      [0, 0, 'Love-All'],
      [1, 1, 'Fifteen-All'],
      [2, 2, 'Thirty-All'],
      [3, 3, 'Deuce'],
      [4, 4, 'Deuce'],

      [1, 0, 'Fifteen-Love'],
      [0, 1, 'Love-Fifteen'],

      [3, 0, 'Forty-Love'],

      [4, 2, 'Win for player1'],
      [2, 4, 'Win for player2'],

      [4, 3, 'Advantage player1'],
      [3, 4, 'Advantage player2'],

      [4, 5, 'Advantage player2'],


      [0, 0, "Love-All"],
      [1, 1, "Fifteen-All"],
      [2, 2, "Thirty-All"],
      [3, 3, "Deuce"],
      [4, 4, "Deuce"],

      [1, 0, "Fifteen-Love"],
      [0, 1, "Love-Fifteen"],
      [2, 0, "Thirty-Love"],
      [0, 2, "Love-Thirty"],
      [3, 0, "Forty-Love"],
      [0, 3, "Love-Forty"],
      [4, 0, "Win for player1"],
      [0, 4, "Win for player2"],

      [2, 1, "Thirty-Fifteen"],
      [1, 2, "Fifteen-Thirty"],
      [3, 1, "Forty-Fifteen"],
      [1, 3, "Fifteen-Forty"],
      [4, 1, "Win for player1"],
      [1, 4, "Win for player2"],

      [3, 2, "Forty-Thirty"],
      [2, 3, "Thirty-Forty"],
      [4, 2, "Win for player1"],
      [2, 4, "Win for player2"],

      [4, 3, "Advantage player1"],
      [3, 4, "Advantage player2"],
      [5, 4, "Advantage player1"],
      [4, 5, "Advantage player2"],
      [15, 14, "Advantage player1"],
      [14, 15, "Advantage player2"],

      [6, 4, "Win for player1"],
      [4, 6, "Win for player2"],
      [16, 14, "Win for player1"],
      [14, 16, "Win for player2"]

    ].forEach(([player1Balls, player2Balls, expectedScore]) => {

      it(`should return '${expectedScore}' when the score is (${player1Balls}, ${player2Balls})`, function() {
        const score = TennisScoreCalculator.create(
          { name: 'player1', balls: player1Balls },
          { name: 'player2', balls: player2Balls }
        ).calculate();

        expect(score).to.equal(expectedScore);
      });

    });

    context('calls players by name', function() {

      it('for player1', function() {
        const score = TennisScoreCalculator.create(
          { name: 'Alice', balls: 4 },
          { name: 'Bob', balls: 0 }
        ).calculate();

        expect(score).to.equal('Win for Alice');
      });


      it('for player2', function() {
        const score = TennisScoreCalculator.create(
          { name: 'Alice', balls: 0 },
          { name: 'Bob', balls: 4 }
        ).calculate();

        expect(score).to.equal('Win for Bob');
      });

    });

  });

});
