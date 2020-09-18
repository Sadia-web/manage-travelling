import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (


        <nav class="navbar navbar-expand-lg container">
            <a class="navbar-brand" href="/home"><img src={logo} alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" />

                </form>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">News <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#destination">Destination</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <a href="/login" class="btn btn-warning" role="button">Login</a>                  
                </ul>

            </div>
        </nav>
     
        

    );
};

export default Header;