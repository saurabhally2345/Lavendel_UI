import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import Header from '../header_ui/header';
import Sidebar from '../sidebar/sidebar';
import Logo from '../../assests/avatar.svg';
const CreateServices = () => {

    return <Container fluid>

        <Row style={{ backgroundColor: "skyblue" }}>
            <Col md={"4"} style={{ maxWidth: "25%", minHeight: "100vh" }}><Sidebar /></Col>
            <Col md={"8"} style={{ minWidth: "73%", minHeight: "20%" }}>

                <Header />
                <Row style={{ border: "2px solid green", padding: "4%", marginTop: "1%", maxHeight: "80vh", backgroundColor: "#FFFFFF" }}>
                    <Col md={"8"}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Service Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Service Categories</Form.Label>
                                    <Form.Control as="select">
                                        <option>Home Cleaning</option>
                                        <option>Plumbing</option>
                                        <option>Electric Work</option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{ minWidth: "50%" }}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Service Description</Form.Label>
                                    <Form.Control type="textarea" placeholder="Enter details" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control type="time" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control type="time" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Price</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <Button variant="outline-secondary">INR</Button>
                                        </InputGroup.Prepend>
                                        <FormControl aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Common</option>
                                        <option>Special Pacakage</option>
                                        <option>Routine</option>
                                        </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Service Includes</Form.Label>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Enter deal name"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-primary" style={{ backgroundColor: "blue" }}><span style={{ color: "white" }}>Add</span></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Sub Services</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>House Maid</option>
                                        <option>Maid Care</option>
                                        <option>Patient Care</option>
                                        <option>Home Nurses</option>
                                        <option>Drivers for Offices/Home</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>


                    </Col>
                    <Col md={{span:3,offset:1}}>
                        <Image src={Logo} thumbnail style={{ display: 'flex', minWidth: "80%" }} />
                        <span style={{ display: "flex", border: "2px solid lightgreen", maxWidth: "80%", minHeight: "3px", backgroundColor: "lightgray" }}><p style={{ display: "flex", paddingTop: "4%", paddingLeft: "42%", fontFamily: "nunito" }}>Browse</p></span>
                        <Button variant="primary" type="submit" style={{ minWidth: "80%", paddingTop: "4%", marginTop: "44%", backgroundColor: "blue" }}>

                            Submit
                                </Button>

                    </Col>

                </Row>


            </Col>

        </Row>

    </Container>
}

export default CreateServices;