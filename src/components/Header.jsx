import React from 'react';

export default class Header extends React.Component {
    render() {
        let text = (this.props.winner!==null) ? this.props.winner + " WINS":this.props.text;
        return (
          <header className="header">
            {text}
          </header>
        );
    }

}
