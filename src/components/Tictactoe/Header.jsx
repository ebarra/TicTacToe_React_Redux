import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
          <header className="header">
            <label>
              Name:
              <input type="text" value={this.props.player_name} onChange={this.props.handlePlayerInputChange} />
            </label>
            {this.props.text}
          </header>
        );
    }

}
