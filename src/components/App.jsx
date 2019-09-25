import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import { connect } from 'react-redux';
import { playPosition, reset } from './../redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    }

    appClick(rowNumber, columnNumber) {
       this.props.dispatch(playPosition(rowNumber,columnNumber,this.props.turn, this.props.values))
    }

    resetClick(){
        this.props.dispatch(reset());
    }

  render() {
    let text = "Turn of " + this.props.turn;

    return (
      <div>
      
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Header text={text} winner={this.props.winner}/>
        </div>
        <Board values={this.props.values}  appClick={this.appClick}/>
        <h3>Number of moves: {this.props.moves}</h3>
        <Reset resetClick={this.resetClick}></Reset>
      </div>
    );
}

}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(App);
