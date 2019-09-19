import React from 'react';
import MyHeader from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        turn: PLAYERX,
        values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
        moves: 0
    };
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    }

    appClick(rowNumber, columnNumber) {
        let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
        let newMovement = this.state.turn === PLAYERX ? 'X' : '0';
        valuesCopy[rowNumber][columnNumber] = newMovement;
        this.setState({
            turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
            values: valuesCopy,
            moves: this.state.moves +1
        });
    }

    resetClick(){
      this.setState({
        turn: PLAYERX,
        values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
        moves: 0
      });
    }

  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <MyHeader text={text}/>
        </div>
        <Board values={this.state.values}  appClick={this.appClick}/>
        <h3>Number of moves: {this.state.moves}</h3>
        <Reset resetClick={this.resetClick}></Reset>
      </div>
    );
}

}
