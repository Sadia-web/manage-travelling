import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="transparent" variant="dark">
            <Navbar.Brand className="nav" href="/"><img src={logo} alt="Logo"/></Navbar.Brand>
            <input className="nav" type="text" placeholder="Search your destination" name="" id=""></input>
            <Nav className="mr-auto">
                <Nav.Link className="active nav" href="/">News</Nav.Link>
                <Nav.Link className="active nav" href="#features">Destination</Nav.Link>
                <Nav.Link className="active nav" href="#pricing">Blog</Nav.Link>
                <Nav.Link className="active nav" href="#pricing">Contact</Nav.Link>
                <button className="custom-btn nav">Log in</button>
            </Nav>
            
        </Navbar>
    );
};
export default Header;