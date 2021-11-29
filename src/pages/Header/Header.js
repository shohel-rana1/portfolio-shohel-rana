import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className="banner">
                <Navbar collapseOnSelect expand="lg" sticky="top" className="background">
                    <div className="container mx-auto">
                        <Link className="navbar-brand" activeClassName="active" to="/home"><span className="logo-text">SHOHEL RANA</span></Link>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="nav-bar">
                                <Nav.Item>
                                    <Nav.Link className="nav-text active" aria-current="page" eventKey="1" as={Link} to="/Home">
                                        <span className="nav-text">HOME</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="2" as={Link} to="/about">
                                        <span className="nav-text">ABOUT</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="3" as={Link} to="/services">
                                        <span className="nav-text">SERVICES</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="4" as={Link} to="/skills">
                                        <span className="nav-text">SKILLS</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="5" as={Link} to="/portfolio">
                                        <span className="nav-text">PORTFOLIO</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="6" as={Link} to="/contact">
                                        <span className="nav-text">CONTACT</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="6" as={Link} target="_blank" rel="norefferer" to="https://drive.google.com/uc?export=download&id=1jwj9JJtmdguhDtbwRfzhKFGyrPN5oiAH">
                                        <span className="nav-text"><button>DOWNLOAD RESUME</button></span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className=" container banner-text">
                    <h1 style={{ color: '#fffff' }}>
                        SHOHEL RANA
                    </h1>
                    <h2><span> MERN Stack Developer</span></h2>
                    <br />
                    <Link to="/contact"><button className="px-4 fs-2  py-1 fw-bold bg-transparent text-white">HIRE ME</button></Link>
                </div>

            </div>
        </>
    );
};

export default Header;