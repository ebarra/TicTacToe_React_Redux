import React from 'react';

const squareStyle = {
    height: '100px',
    width: '100px',
};

export default class Board extends React.Component {
    render() {
        let board = this.props.values.map((rowValues, rowIndex) => {
            let row = rowValues.map((value, columnIndex) => {
                let mykey = "" + rowIndex + columnIndex;
                return (
                  <button style={squareStyle} key={mykey}>{value}</button>
                );
            });
            return (
               <div key={"row" + rowIndex}>
                 {row}
               </div>
            );
        });

        return (
           <div>
             {board}
           </div>
        );
    }
}
