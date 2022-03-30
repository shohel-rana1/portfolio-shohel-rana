import { Button } from 'bootstrap';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Experience.css'

const Experience = () => {
    return (
        <div>
            <Row className="g-4">
                <Col xs={12} md={6}>
                    <ul className="experi-css">
                        <li>
                            <span className="time-period my-2">FEB 2022-PRESENT</span>
                            <h6 className="my-3">MERN STACK DEVELOPER--IN TECHNOLOGY LTD.</h6>
                            <p>I am currently working on a IT company as a full stack MERN developer. My responsibility is to build user interface as well as develop the server side of a website. I also responsible for optimization of web application.
                            </p>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="experi-css">
                        <li>
                            <span className="time-period my-2">JAN 2022-FEB 2022</span>
                            <h6 className="my-3">INTERNAL REACT DEVELOPER</h6>
                            <p>I worked as an internal react developer near one month.
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default Experience;