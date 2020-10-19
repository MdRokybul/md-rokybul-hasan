import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './Skills.css'

const Skills = () => {
    const htmlProgress = 90;
    const cssProgress = 85;
    const javascriptProgress = 75;
    const mongodbProgress = 50;
    const expressjsProgress = 50;
    const reactjsProgress = 75;
    const nodejsProgress = 70;
    return (
        <Container style={{ marginTop: '6%' }} id="skills">
            <Row className="d-flex justify-content-center">
                <h3 className="title-style">MY SKILLS</h3>
            </Row>
            <Row>
                <Col className="col-md-2 col-sm-0 col-0"></Col>
                <Col className="col-md-8 col-sm-12 col-12">
                    <Col className="col-md-11 mb-3 leftProgress">
                        <h5>HTML</h5>
                        <ProgressBar variant="success" now={htmlProgress} label={`${htmlProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 rightProgress">
                        <h5>CSS</h5>
                        <ProgressBar  variant="success" now={cssProgress} label={`${cssProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 leftProgress">
                        <h5>JAVASCRIPT</h5>
                        <ProgressBar  variant="warning" now={javascriptProgress} label={`${javascriptProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 rightProgress">
                        <h5>MONGODB</h5>
                        <ProgressBar  variant="danger" now={mongodbProgress} label={`${mongodbProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 leftProgress">
                        <h5>EXPRESS JS</h5>
                        <ProgressBar  variant="danger" now={expressjsProgress} label={`${expressjsProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 rightProgress">
                        <h5>REACT JS</h5>
                        <ProgressBar  variant="warning" now={reactjsProgress} label={`${reactjsProgress}% + Learning`}/>
                    </Col>
                    <Col className="col-md-11 mb-3 leftProgress">
                        <h5>NODE JS</h5>
                        <ProgressBar  variant="warning" now={nodejsProgress} label={`${nodejsProgress}% + Learning`}/>
                    </Col>
                </Col>
                <Col className="col-md-2 col-sm-0 col-0"></Col>
            </Row>
        </Container>
    );
};

export default Skills;