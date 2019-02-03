import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from "./containers/footer";
import Routes from "./routes";
import './App.css';
library.add( fab, faCheckSquare, faCoffee);

class App extends Component {
render() {
return (
<div className="App container">
 <Navbar fluid collapseOnSelect>
  <Navbar.Header>
<Navbar.Brand>
<Link to="/">Chris Hunter-Johnson - Developer Portfolio</Link>
</Navbar.Brand>
<Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
   <Nav pullRight>
    <LinkContainer to="/about">
     <NavItem>About</NavItem>
    </LinkContainer>
    <LinkContainer to="/project">
     <NavItem>Project</NavItem>
    </LinkContainer>
    <LinkContainer to="/contact">
     <NavItem>Contact</NavItem>
    </LinkContainer>
   </Nav>
  </Navbar.Collapse>
 </Navbar>
 <Routes />
 <Footer />
</div>
);
}
}
export default App;
