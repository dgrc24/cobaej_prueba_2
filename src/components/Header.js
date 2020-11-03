import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import imagen from '../images/logocobaej.png';
import avatar from '../images/avatar.png'



class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar className="top" expand="lg" bg="dark" >
                    <Nav>
                        <a className="topheader" href="https://www.cobaej.edu.mx"> COBAEJ.EDU.MX</a>
                        <a className="topheader" href="https://www.moodle.com"> Moodle</a>
                    </Nav>
                </Navbar>
                <Navbar className="header" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home">
                        <img
                            src={imagen}
                            width="180"
                            height="80"
                            className="d-inline-block align-top"
                            alt="COBAEJ logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#buzon">Buzón</Nav.Link>
                            <Nav.Link href="#psic">Psicología</Nav.Link>
                            <Nav.Link href="#ctrlesc">Control escolar</Nav.Link>
                            <Nav.Link href="#finanzas">Recursos financieros</Nav.Link>
                        </Nav>
                        <Nav className="align-items-center" >
                            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#micuenta">Mi cuenta</NavDropdown.Item>
                                <NavDropdown.Item href="#seguridad">Seguridad</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#salir">Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                            <img

                                src={avatar}
                                width="60"
                                height="60"
                                className="d-inline-block align-top mr-3"
                                alt="avatar perfil"
                            />


                        </Nav>
                    </Navbar.Collapse>
                </Navbar ></div>
        );
    }
}
export default Header;