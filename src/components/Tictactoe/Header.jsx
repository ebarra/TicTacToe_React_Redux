import React from 'react';
import { Card } from 'react-bootstrap';

export default class MyHeader extends React.Component {
    render() {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Title>Turn</Card.Title>
            <Card.Body>{this.props.text}</Card.Body>
          </Card>
        );
    }

}
