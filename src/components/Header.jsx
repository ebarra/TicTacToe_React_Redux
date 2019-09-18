import React from 'react';
import { Card } from 'react-bootstrap';

const title = (
  <h3>Turn</h3>
);

export default class Header extends React.Component {
    render() {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Title>Turn</Card.Title>
            <Card.Body>{this.props.text}</Card.Body>
          </Card>
        );
    }

}
