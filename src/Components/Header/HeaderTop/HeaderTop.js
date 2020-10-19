import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../../images/profile.png';
import fbIcon from '../../../images/icons/fb-icon.png';
import instagramIcon from '../../../images/icons/instagram-icon.png';
import twitterIcon from '../../../images/icons/twitter-icon.png';
import inIcon from '../../../images/icons/in-icon.png';
import './HeaderTop.css'

const HeaderTop = () => {
    return (
        <Container className="headerTop-container">
            <Row style={{ padding: '5%' }}>
                <Col className="col-md-4 col-sm-11 col-12">
                    <img style={{ width: '100%', height: '370px' }} src={profile} alt="" />
                    <button className="theme-color button-color">Download Resume</button>
                </Col>
                <Col className="col-md-8 col-sm-11 col-12">
                    <h1>Hi, I'm  <span style={{ color: '#FEC608' }}>Md Rokybul Hasan</span> </h1>
                    <h5>Front-End Developer</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt cupiditate quae hic optio et voluptatem impedit! Distinctio nostrum repudiandae tempora commodi nisi, necessitatibus, nobis quibusdam consequatur perspiciatis optio illo. Cum reprehenderit incidunt veritatis soluta, doloribus quod est deleniti minus libero!</p>
                    <Row>
                        <Col className="col-md-4">
                            <p>Age</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>24</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4">
                            <p>Nationality</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>Bangladeshi</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4">
                            <p>Address</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>26,Mothurdanga, Sopura, Boalia, Rajshahi</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4">
                            <p>Phone</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>+880 1739-080895</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4">
                            <p>Skype</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>live:rokybulhasan40</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4">
                            <p>Email</p>
                        </Col>
                        <Col className="col-md-7">
                            <p>mdrokybulhasan40@gmail.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <img className="icon-style" src={fbIcon} alt=""/>
                        <img className="icon-style" src={instagramIcon} alt=""/>
                        <img className="icon-style" src={twitterIcon} alt=""/>
                        <img className="icon-style" src={inIcon} alt=""/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default HeaderTop;