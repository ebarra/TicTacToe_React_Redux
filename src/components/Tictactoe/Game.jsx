import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

const API = "https://api.myjson.com/bins/qy6k6";

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
        player_name:""
    };
    this.appClick = this.appClick.bind(this);
    this.handlePlayerInputChange = this.handlePlayerInputChange.bind(this);
    }

    //this can´t be done in the componentDidMount because it is only called once
    //and so it would only work the first time of this component being mounted
    //not if you click on /new and after that you click on /continue, because on both routes the Game component is mounted
    componentWillReceiveProps(nextProps) {
      if (nextProps.continue !== this.props.continue) {
        if(nextProps.continue===true){
          fetch(API).then((response) =>{
              console.log(response);
              return response.json();
            }).then((data) => {
              console.log(data);
              this.setState( data );
            });
        } else{
          this.setState({
              turn: PLAYERX,
              values: [
              ['-', '-', '-'],
              ['-', '-', '-'],
              ['-', '-', '-'],
              ],
              player_name:""
          });
        }
      }
    }

    appClick(rowNumber, columnNumber) {
        let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
        let newMovement = this.state.turn === PLAYERX ? 'X' : '0';
        valuesCopy[rowNumber][columnNumber] = newMovement;
        this.setState({
            turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
            values: valuesCopy,
        });
    }

    handlePlayerInputChange(event){
      this.setState({player_name: event.target.value});
    }

  render() {
    let text = "Turn of " + this.state.player_name + " " + this.state.turn;

    return (
      <div>
        <Header text={text} player_name={this.state.player_name} handlePlayerInputChange={this.handlePlayerInputChange}/>
        <Board values={this.state.values}  appClick={this.appClick}/>
      </div>
    );
}

}
