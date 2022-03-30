import React from 'react';
import './SingleService.css'
import { Card, Col, Row } from 'react-bootstrap';
import MERNstack from '../../images/protfolio_images/react-MEAN-vs_MERN.jpg';
import reactdev from '../../images/protfolio_images/react.png'
import webtdev from '../../images/protfolio_images/web-development.png'
import frontwebtdev from '../../images/protfolio_images/front-end.jpg'

const SingleService = () => {
    return (
        <Row xs={1} md={2} lg={4} xl={4} className="mx-auto">
            <Col className="d-inline-block">
                <Card className="card1">
                    <Card.Body>
                        <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{ height: '200px' }} src={MERNstack} /></div>
                        <Card.Title>MERN Stack Developer</Card.Title>
                        <Card.Text>
                            I have completed 5 or more projects with MERN stack. I am also capable of aws deployment.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card className="card1">
                    <Card.Body>
                        <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{ height: '200px' }} src={reactdev} /></div>
                        <Card.Title>React Developer</Card.Title>
                        <Card.Text>
                            Still now, I have done 10 or more projects with reactjs. I am too much comfortable with this.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card className="card1">
                    <Card.Body>
                        <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{ height: '200px' }} src={webtdev} /></div>
                        <Card.Title>Web Developer</Card.Title>
                        <Card.Text>
                            I am a full stack web developer with the MERN stack technology knowledge.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card className="card1">
                    <Card.Body>
                        <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{ height: '200px' }} src={frontwebtdev} /></div>
                        <Card.Title>Front-end Developer</Card.Title>
                        <Card.Text>
                            Though I have completed lots of project, still now I am a strong front-end developer.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default SingleService;