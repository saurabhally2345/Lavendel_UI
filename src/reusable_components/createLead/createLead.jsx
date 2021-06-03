import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import Header from '../header_ui/header';
import Sidebar from '../sidebar/sidebar';
import Logo from '../../assests/avatar.svg';



const createLead = () => {




    return <Container fluid>

        <Row style={{ backgroundColor: "skyblue" }}>
            <Col md={"4"} style={{ maxWidth: "25%", minHeight: "100vh" }}><Sidebar /></Col>
            <Col md={"8"} style={{ minWidth: "73%", minHeight: "20%" }}>

                <Header />
                <Row style={{ border: "2px solid green", padding: "4%", marginTop: "1%", maxHeight: "70vh", backgroundColor: "#FFFFFF" }}>
                    <Col md={"8"}>
                        <Row>
                            <Col>

                                    <Form.Label>Customer Information</Form.Label>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                    <Form.Label>Location</Form.Label>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Building Name</Form.Label>
                                    <Form.Control type="text">
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col >
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Flat Name/Building Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter building Name" />
                                </Form.Group>
                            </Col>
                           
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter mobile no." />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Booking Date</Form.Label>
                                         <Form.Control type="date">
                                             </Form.Control>   
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Booking Time</Form.Label>
                                    <Form.Control type="time">
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Email Id</Form.Label>

                                        <FormControl type="email" placeholder="enter email id">

                                        </FormControl>
                                           
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Lead Source</Form.Label>
                                    <Form.Control as="select" >
                                        <option>Select Source</option>
                                        <option>Maid Care</option>
                                        <option>Patient Care</option>
                                        <option>Home Nurses</option>
                                        <option>Drivers for Offices/Home</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>


                    </Col>
                    <Col md={{ span: 4 }}>
                        <Form.Label>Services Interested</Form.Label>
                    <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Service Name</Form.Label>
                                    <Form.Control as="select" >
                                        <option>Select Service Name</option>
                                        </Form.Control>
                                </Form.Group>
                                <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="numeric" mobile />
                                </Form.Group>
                            </Col>
                        <Button variant="primary" type="submit" style={{ minWidth: "80%", paddingTop: "4%", marginTop: "44%",marginLeft:"20%", backgroundColor: "blue" }}>

                            Create Lead
                                </Button>

                    </Col>

                </Row>


            </Col>

        </Row>

    </Container>
}


export default createLead;