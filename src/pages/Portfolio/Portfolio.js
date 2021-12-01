import React from 'react';
import './Protfolio.css'
import { Card, Col, Row } from 'react-bootstrap';
import eduford from '../../images/projects-img/eduford.png'
import macbook from '../../images/projects-img/mac-book-pro.png'
import buyNeeds from '../../images/projects-img/buyNeeds.png'
import heritage from '../../images/projects-img/world-heritage-places.png'
import brain from '../../images/projects-img/brainstorm-learnweb.png'
import doctors from '../../images/projects-img/doctors-care-hospital.png'
import amigos from '../../images/projects-img/amigos-holiday-charm.png'
import perfume from '../../images/projects-img/luxury-perfume-outlet.png'



const Protfolio = () => {
    return (
        <div className="container my-5 py-3">
            <div className=" text-center section-title">
                <span className="subtitle">VISIT MY PORTFOLIO </span>
                <h2 className="title">My Portfolio</h2>
            </div>
            <div className="mt-5">
                <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                    <Col className="d-inline-block">
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={eduford} /></div>
                                <Card.Title>An educational website</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://shohel-rana1.github.io/eduford/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/eduford">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={macbook} /></div>
                                <Card.Title>Mac book selling site</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://xenodochial-rosalind-282875.netlify.app/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/mac-book-pro-assignment-5">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={buyNeeds} /></div>
                                <Card.Title>A e-commerce site</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://cocky-chandrasekhar-cb312d.netlify.app/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/ranga-store-assignment-7">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={heritage} /></div>
                                <Card.Title>World heritage places</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://world-heritage-places.netlify.app/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/world-heritage-places-assignment-8">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={brain} /></div>
                                <Card.Title>Brainstorm learning web</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://brainstorm-learnweb.netlify.app/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/brainstorm-learnweb-assignment-9">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={doctors} /></div>
                                <Card.Title>Doctors care hospital</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://doctors-care-hospital.web.app/">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/doctors-care-hospital-assignment-10">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={amigos} /></div>
                                <Card.Title>Amigos holiday charm</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://amigos-holiday-charm.web.app/Home">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/amigos-holiday-charm-client-assignment-11">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card1">
                            <Card.Body>
                            <div className="img-wrapper"><Card.Img variant="top" className="inner-img" style={{height: '200px'}} src={perfume} /></div>
                                <Card.Title>Luxury perfume outlet</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://luxury-perfume-outlet.web.app/home">Live Site<i class="fas fa-arrow-right"></i></a>
                                <a className="button2" target="_blank" rel="noopener noreferrer" href="https://github.com/shohel-rana1/luxury-perfume-outlet-client-assignment-12">Client Side<i class="fas fa-arrow-right"></i></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Protfolio;