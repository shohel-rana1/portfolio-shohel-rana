import React, { useEffect, useState } from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState("navbar")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setNavbar("navbar")
        } else if (window.scrollY > 70) {
            return setNavbar("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <>
            <div className="banner">
                <Navbar collapseOnSelect expand="lg" bg-light sticky="top" className={navbar}>
                    <div className="container mx-auto">
                        <Link className="navbar-brand" to="/home"><span className="logo-text">SHOHEL RANA</span></Link>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="nav-bar">
                                <Nav.Item>
                                    <Nav.Link className="nav-text" aria-current="page" eventKey="1" as={Link} to="/Home">
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
                                        <span className="nav-text">FEATURES</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-text" eventKey="4" as={Link} to="/resume">
                                        <span className="nav-text">RESUME</span>
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
                                    <button ><a style={{textDecoration: 'none'}} href="https://drive.google.com/uc?export=download&id=1jwj9JJtmdguhDtbwRfzhKFGyrPN5oiAH">DOWNLOAD RESUME</a></button>
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
                    <Link to="/contact"><button className="button1">
                        HIRE ME
                        <i class="fas fa-arrow-right"></i>
                    </button></Link>
                </div>

            </div>
        </>
    );
};

export default Header;