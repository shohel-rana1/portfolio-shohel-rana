import React from 'react';
import './Skills.css'
import { Col, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div>
            <Row>
                <Col xs={12} md={6}>
                    <h6>DESIGN SKILLS</h6>
                    <div className="box">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>HTML5/CSS3</span>
                                <span>90%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>BOOTSTAP/REACT-BOOTSTRAP</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="77" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '77%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>MUI/TAILWIND CSS</span>
                                <span>77%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>SASS/WEBPACK</span>
                                <span>90%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>REACT</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="65" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '65%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>REDUX</span>
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <h6>CODING SKILLS</h6>
                    <div className="box">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>JAVASCRIPT</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="75" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '75%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>NODE.JS</span>
                                <span>75%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="80" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '80%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>EXPRESS.JS</span>
                                <span>80%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>MONGODB</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>FIREBASE</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="65" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '65%', zIndex: '9' }}>
                            </div>
                            <div className="progress-text">
                                <span>AWS</span>
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Skills;