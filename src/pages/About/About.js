import React from 'react';
import logo1 from '../../images/protfolio_images/IMG_7764.JPG'
const About = () => {
    return (
        <div className="pt-5 mx-auto container " id="myAbout">
            <div className="mx-auto my-5 py-5">
                <div className="row mx-auto g-2">
                    <div className="col-md-6">
                        <div className="about-image mx-2">
                            <img className="img img-fluid" src={logo1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="about-dec text-left px-3">
                            <h2>HELLO! I AM SHOHEL RANA.</h2>
                            <h5 style={{ color: '#2c7ae7' }}>I'm a MERN stack developer</h5>
                            <p>I’m a web full stack developer living in Dhaka, Bangladesh. I spend my days with my hands in many different areas of web development from back end programming to front end engineering.</p>
                            <p>I am a MERN stack Developer. I am currently working in In-Technology Ltd. as a full stack web developer. My responsivility is to develop front-end with reactjs and redux as well as back-end with node.js, express.js and mongoDB. I can handle pressure and take challenges to learning new things.</p>
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
                                <div style={{ marginTop: '10px' }}>
                                    <a className="button2" href="/contact" style={{ marginRight: '10px' }}>HIRE ME<i class="fas fa-arrow-right"></i></a>
                                    <a className="button2" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1jwj9JJtmdguhDtbwRfzhKFGyrPN5oiAH">DOWNLOAD RESUME<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;