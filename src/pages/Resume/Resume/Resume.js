import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import './Resume.css';
const Resume = () => {
    let { path, url } = useRouteMatch();

    if (url === '/') {
        url = '/home/resume'
    }

    return (
        <div className="pt-5" id="myResume">
            <div className="backdroundColor">
                <div className="container my-5 py-5">
                    <div className="text-center resume-title">
                        <h2>MY RESUME</h2>
                    </div>
                    <Row className="mt-5">
                        <Col className="nested-nav">
                            <h4 className="text-left fs-2 pb-2 mb-5">MY EXPERIENCE</h4>
                            <Nav defaultActiveKey="/home" className="flex-column text-left nav-tabs">
                                <Link className="nested-links" eventKey="link-1" to={`${url}/skills`}><i className="fab fa-wordpress px-2 py-3"></i> &mdash;&mdash; SKILLS</Link>
                                <Link className="nested-links" eventKey="link-2" to={`${url}/experience`}><i className="fas fa-history px-2 py-3"></i> &mdash;&mdash; EXPERIENCE</Link>
                                <Link className="nested-links" eventKey="link-3" to={`${url}/education`}><i className="fas fa-graduation-cap px-2 py-3"></i> &mdash;&mdash; EDUCATION</Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={9}>
                            <Switch>
                                <Route exact path={path}>
                                    <Skills></Skills>
                                </Route>
                                <Route path={`${path}/skills`}>
                                    <Skills></Skills>
                                </Route>
                                <Route path={`${path}/experience`}>
                                    <Experience></Experience>
                                </Route>
                                <Route path={`${path}/education`}>
                                    <Education></Education>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default Resume;