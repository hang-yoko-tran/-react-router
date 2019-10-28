import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to='/homepage'>Home</Link>
          <Link className="nav-link" to='/candidates'>Candidates</Link>
          <Link className="nav-link" to='/company'>Company</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
