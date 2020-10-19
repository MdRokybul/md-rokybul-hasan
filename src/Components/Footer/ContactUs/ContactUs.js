import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <Container style={{ marginTop: '6%' }} id="contact">
            <Row className="d-flex justify-content-center mb-5">
                <h3 className="title-style">CONTACT </h3>
            </Row>
            <Row>
                <Col className="col-md-6 col-sm-12 col-12 leftProgress">
                    <h3>CONTACT INFO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae saepe praesentium voluptas aspernatur minima voluptatum sequi maxime vitae et, facilis ducimus qui ipsum cumque ab repellat a delectus eum placeat.</p>
                    <Row>
                        <Col className="col-md-4 col-sm-4 col-12 text-center">
                        <FontAwesomeIcon className="contact-icon-style" icon={faMapMarkerAlt} />
                        </Col>
                        <Col className="col-md-8 col-sm-8 col-12">
                            <h5>ADDRESS</h5>
                            <p>56/A, Railway Market, Railgate, Rajshahi.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4 col-sm-4 col-12 text-center">
                        <FontAwesomeIcon className="contact-phone-icon-style" icon={faPhoneAlt} />
                        </Col>
                        <Col className="col-md-8 col-sm-8 col-12">
                            <h5>SKYPE</h5>
                            <p>live:rokybulhasan40</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4 col-sm-4 col-12 text-center">
                        <FontAwesomeIcon className="contact-phone-icon-style" icon={faEnvelope} />
                        </Col>
                        <Col className="col-md-8 col-sm-8 col-12">
                            <h5>EMAIL</h5>
                            <p>mdrokybulhasan40@gmail.com</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-md-6 col-sm-12 col-12 rightProgress">
                    <h3>SEND MESSAGE</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Your Message" />
                        </Form.Group>
                        <Button className="theme-color">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;