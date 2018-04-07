import React from 'react';

export default class Header extends React.Component {
    render() {
        let text = (typeof this.props.winner!=="undefined") ? this.props.winner + " WINS":this.props.text;
        return (
          <header className="header">
            {text}
          </header>
        );
    }

}
