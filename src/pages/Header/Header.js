import React, { useEffect, useState } from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import TypeAnimation from 'react-type-animation';

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
                                    <HashLink className="nav-text" eventKey="1" as={Link} to="/#myHome">
                                        <span className="nav-text">HOME</span>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <HashLink className="nav-text" eventKey="2" as={Link} to="/#myAbout">
                                        <span className="nav-text">ABOUT</span>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <HashLink className="nav-text" eventKey="3" as={Link} to="/#myServices">
                                        <span className="nav-text">SERVICES</span>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <HashLink className="nav-text" eventKey="4" as={Link} to="/#myPortfolio">
                                        <span className="nav-text">PORTFOLIO</span>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <HashLink className="nav-text" eventKey="5" as={Link} to="/#myContact">
                                        <span className="nav-text">CONTACT</span>
                                    </HashLink>
                                </Nav.Item>


                                <Nav.Item>
                                    <HashLink className="nav-text" eventKey="6" as={Link} to="/#myResume">
                                        <span className="nav-text">RESUME</span>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <span className="nav-btn"><a href="https://drive.google.com/uc?export=download&id=1jwj9JJtmdguhDtbwRfzhKFGyrPN5oiAH">DOWNLOAD RESUME</a></span>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className=" container banner-text">
                    <h1 style={{ color: '#fffff' }}>
                        SHOHEL RANA
                    </h1>
                    <div style={{ width: '400px' }} >
                        <TypeAnimation
                        cursor={true}
                        sequence={[
                        'MERN Stack Developer',
                        2000,
                        'Full Stack Web Developer',
                        2000,
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                        />
                    </div>
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