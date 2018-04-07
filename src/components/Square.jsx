import React from 'react';

const squareStyle = {
  height: '100px',
  width: '100px',
};

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }
  squareClick() {
    if(this.props.value === "-" && typeof this.props.winner==="undefined") {
      this.props.boardClick(this.props.rowIndex, this.props.columnIndex);
    }
  }
  render() {
    let myclassName = (this.props.value === "-" && typeof this.props.winner==="undefined") ? "clickable" : "no_clickable";
    return(
      <button style={squareStyle} onClick={this.squareClick} className={myclassName}>
        {this.props.value}
      </button>
    );
  }
}
