import React from 'react';

const seedrandom = require('seedrandom');
const generator = seedrandom('[seed]');

const WIN_COUNT = 2;

export default class PlayerName extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: undefined, sixCounter: 0, hasWon: false };
    this.handleClick = this.handleClick.bind(this);
  }

  getNumber1to6() {
    return Math.round(generator() * 6);
  }

  handleClick() {
    const number = this.getNumber1to6();
    const hasWon = this.state.sixCounter > WIN_COUNT;
    const sixCounter = number === 6 ? this.state.sixCounter + 1 : 0;
    this.setState(state => ({
      score: number,
      sixCounter,
      hasWon
    }));
  }

  handlePlayAgain() {
    this.setState(state => ({
      hasWon: false
    }));
  }

  render() {
    if (this.state.hasWon) {
      return (
          <>
            <p>
              You won the grand prize!!!1!!!
            </p>
            <button onClick={this.handlePlayAgain}>
              Play again?
            </button>
          </>
      );
    } else {
      return (
        <>
          <p>
            { !!this.state.score ? `Current roll: ${this.state.score}` : 'You must roll the dice first' }
            <br />
            { this.state.sixCounter === WIN_COUNT - 1 ? `Roll one more six in a row to win` : '' }
          </p>
          <button onClick={this.handleClick}>
            Roll the dice
          </button>
        </>
      );
    }
  }
}
