import React from 'react'
import { Navbar, Nav, } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useStyles from "./style.js"
const NavBar = () => {
  const classes = useStyles();
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">
    <NavLink to="/" className={classes.NavBarBrand}>SinglePage-Application</NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/signin" className="nav-link">Sign-In</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/signup" className="nav-link">Sign-Up</NavLink>
    </li>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
    </>
  )
}

export default NavBar
