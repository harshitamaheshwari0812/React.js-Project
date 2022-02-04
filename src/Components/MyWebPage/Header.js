import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
        <Nav.Link to="/about">About</Nav.Link>
        <Nav.Link to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
}
