import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../images/protfolio_images/IMG_7764.JPG'
const About = () => {
    return (
        <div className="container mx-auto my-5 py-5">
            <div className="row g-2">
                <div className="col-md-6">
                    <div className="about-image mx-2">
                        <img className="img img-fluid" src={logo1} alt="" />
                    </div>
                </div>
                <div className="col-md-6 mx-auto">
                    <div className="about-dec text-left px-3">
                        <h2>HELLO! I AM SHOHEL RANA.</h2>
                        <h5 style={{ color: '#2c7ae7' }}>I'm a MERN stack developer</h5>
                        <p>I’m a web developer and front-end designer living in Dhaka, Bangladesh. I spend my days with my hands in many different areas of web development from back end programming to front end engineering.</p>
                        <p>I am a Web Developer with no experience yet,but I am seeking an opportunity to build my career and explore my self. I build hundreds of application. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="row about-h6">
                            <div className="col-md-6">
                                <h6 style={{ fontSize: '15px', color: '#777777', margin: '10px 0' }}>
                                    <i style={{ color: '#2c7ae7', marginRight: '10px' }} className="far fa-check-circle"></i>
                                    MERN Stack
                                </h6>
                            </div>
                            <div className="col-md-6">
                                <h6 style={{ fontSize: '15px', color: '#777777', margin: '10px 0' }}>
                                    <i style={{ color: '#2c7ae7', marginRight: '10px' }} className="far fa-check-circle"></i>
                                    React Developer
                                </h6>
                            </div>
                            <div className="col-md-6">
                                <h6 style={{ fontSize: '15px', color: '#777777', margin: '10px 0' }}>
                                    <i style={{ color: '#2c7ae7', marginRight: '10px' }} className="far fa-check-circle"></i>
                                    Web Developer
                                </h6>
                            </div>
                            <div className="col-md-6">
                                <h6 style={{ fontSize: '15px', color: '#777777', margin: '10px 0' }}>
                                    <i style={{ color: '#2c7ae7', marginRight: '10px' }} className="far fa-check-circle"></i>
                                    Front-end Developer
                                </h6>
                            </div>
                        </div>
                        <br />
                        <Link to="/contact" style={{ marginTop: '30px', marginRight: '10px', padding: '8px 25px', textDecoration: 'none', background: 'transparent', border: '1px solid #d4d4d4', fontSize: '15px' }} className="about-sec button">Hire Me <i class="fas fa-arrow-right"></i></Link>
                        <a href="https://drive.google.com/uc?export=download&id=1jwj9JJtmdguhDtbwRfzhKFGyrPN5oiAH" style={{ marginTop: '30px', marginRight: '10px', padding: '8px 25px', fontSize: '15px', background: 'transparent', border: '1px solid #d4d4d4', textDecoration: 'none' }} className="about-sec button">Download Resume <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;