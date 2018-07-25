import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends React.Component {
    render() {
        return (
          <header>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/"><a>TicTacToe</a></LinkContainer>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <LinkContainer exact to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                <LinkContainer exact to='/new'><NavItem eventKey={2}>New Game</NavItem></LinkContainer>
                <LinkContainer exact to='/continue'><NavItem eventKey={3}>Continue</NavItem></LinkContainer>
              </Nav>
            </Navbar>
          </header>
        );
    }

}
