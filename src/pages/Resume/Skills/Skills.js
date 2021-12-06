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
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>HTML5/CSS3</span>
                                <span>90%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>BOOTSTAP/MUI/TAILWIND CSS</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="70" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '70%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>JAVASCRIPT</span>
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>REACT</span>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <h6>CODING SKILLS</h6>
                    <div className="box">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>HTML5/CSS3</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="85" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '85%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>BOOTSTAP/MUI/TAILWIND CSS</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="70" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '70%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>JAVASCRIPT</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" area-aria-valuenow="90" area-aria-valuemin="0" area-aria-valuemax="100" style={{ width: '90%', zIndex: '2' }}>
                            </div>
                            <div className="progress-text">
                                <span>REACT</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Skills;