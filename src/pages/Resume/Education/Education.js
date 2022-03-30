import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Education.css'

const Education = () => {
    return (
        <div>
            <Row className="g-4">
                <Col xs={12} md={6}>
                    <ul className="edu-css">
                        <li>
                            <span className="time-period my-2">(CSE) 2016-2019</span>
                            <h6 className="my-3">Daffodil International University</h6>
                            <p>I have completed my BS.c in computer science and engineering from Daffodil International University in 2020.
                            </p>
                        </li>
                        <li>
                            <span className="time-period my-2">(HSC) 2013-2014</span>
                            <h6 className="my-3">Adhyapak Abdul Majid College</h6>
                            <p>I have completed my HSC in 2015 from science department from Adhyapak Abdul Majid College, Muradnagar, Cumilla.
                            </p>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="edu-css">
                        <li>
                            <span className="time-period my-2">(SSC) 2011-2012</span>
                            <h6 className="my-3">Nurul Islam High School</h6>
                            <p>I have completed my SSC in 2013 from science department from Nurul Islam High School, Homna, Cumilla.
                            </p>
                        </li>
                        <li>
                            <span className="time-period my-2">Jul 2021-FEB 2022</span>
                            <h6 className="my-3">Complete Web Development Course--Programming Hero</h6>
                            <p>I have complete a full stack web development course with Jhanker Mahbub from programming hero community.
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default Education;