import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import MERNstack from '../../images/protfolio_images/react-MEAN-vs_MERN.jpg';
import reactdev from '../../images/protfolio_images/react.png'
import webtdev from '../../images/protfolio_images/web-development.png'
import frontwebtdev from '../../images/protfolio_images/front-end.jpg'

const SingleService = () => {
    return (
        <Row xs={1} md={3} lg={3} xl={4}>
            <Col className="d-inline-block">
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" style={{height: '200px'}} src={MERNstack} />
                        <Card.Title>MERN Stack Developer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" style={{height: '200px'}} src={reactdev} />
                        <Card.Title>React Developer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card >
                    <Card.Body>
                        <Card.Img variant="top" style={{height: '200px'}} src={webtdev} />
                        <Card.Title>Web Developer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" style={{height: '200px'}} src={frontwebtdev} />
                        <Card.Title>Front-end Developer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#"><i class="fas fa-arrow-right"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default SingleService;