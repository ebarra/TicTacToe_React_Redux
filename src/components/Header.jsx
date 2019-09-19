import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
          <header>
            <Container>
              <Navbar bg="primary" variant="dark">
                  <Navbar.Brand>TicTacToe</Navbar.Brand>
                <Nav className="mr-auto">
                  <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                  <LinkContainer exact to='/new'><Nav.Link>New Game</Nav.Link></LinkContainer>
                  <LinkContainer exact to='/continue'><Nav.Link>Continue</Nav.Link></LinkContainer>
                </Nav>
              </Navbar>
            </Container>
          </header>
        );
    }

}
