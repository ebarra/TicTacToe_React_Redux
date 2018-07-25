import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
          <header>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/new">New Game</NavLink>
                <NavLink exact to="/continue">Continue</NavLink>
          </header>
        );
    }

}
