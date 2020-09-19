import React from 'react';
import './signIn.scss';
import  Card from 'react-bootstrap/Card';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import SignInImage from '../assests/hero_img.png';
import GoogleImage from '../assests/google.png';
import FacebookImage from '../assests/faceBook.png';
function signIn() {
    return (
        <div>
            <Row>
                <Col md={"4"} xs={"4"} sm={"4"}>

                </Col>
                <Col md={"4"} xs={"12"} sm={"12"}>
                    <Card>


                            <img src={SignInImage} className="ImageR" alt="logo" />


                    </Card>
                    <Row>
                        <Col md={{ span: 12 }} xs={{ span: 12 }} sm={{ span: 12 }}>
                            <h1 style={{ fontSize: "1.5rem", paddingTop: "40px" }} className="d-flex justify-content-center">Login to Your Account</h1>

                            <Row>
                                <Col md={{ span: 4, offset: 2 }} xs={{ span: 4, offset: 2 }} sm={{ span: 4, offset: 2 }} style={{ border: "none", boxShadow: "2px solid black", backgroundColor: "greenyellow" }}>
                                    <div style={{ padding: "auto", display: "flex", justifyContent: "right", paddingTop: "5px" }}>
                                        <Row>
                                            <Col md={{ span: "2", offset: "1" }} xs={{ span: "2", offset: "1" }} sm={{ span: "2", offset: "1" }}>
                                                <img src={GoogleImage} className="ImageR" alt="logo" style={{ display: "flex", justifyContent: "flex-end", maxHeight: "58px", minWidth: "58px" }} />

                                            </Col>
                                            <Col md={{ span: "2" }} xs={{ span: "2" }} sm={{ span: "2" }}>
                                                <p style={{ display: "flex", justifyContent: "flex-centre", paddingTop: "5px", alignItems: "flex-end", paddingLeft: "10px", fontWeight: "500" }}>Google</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col md={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }} sm={{ span: 4, offset: 1 }}>
                                    <div style={{ padding: "auto", display: "flex", justifyContent: "right", paddingTop: "5px" }}>
                                        <Row>
                                            <Col md={{ span: "2" }} xs={{ span: "2" }} sm={{ span: "2" }}>
                                                <img src={FacebookImage} alt="logo" style={{
                                                    maxWidth: "48px", display: "flex", justifyContent: "flex-end"
                                                }} className="circular--square" />

                                            </Col>
                                            <Col md={{ span: "2" }} xs={{ span: "2" }} sm={{ span: "2" }}>
                                                <p style={{ display: "flex", justifyContent: "flex-centre", paddingTop: "5px", alignItems: "flex-end", paddingLeft: "10px", fontWeight: "500" }}>Facebook</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={"12"} sm={"12"} xs={"12"}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="number" placeholder="+917004274139" />
                
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                              <p style={{display:"flex",justifyContent:"flex-end"}}>Forget Password?</p>
                                        </Form.Group>
                                        <Form.Group>
                                          <Button style={{maxWidth:"200%"}}></Button>                         
                                        </Form.Group>

                                        <Form.Group>
                                        <Button style={{maxWidth:"200%"}}></Button>
                                        </Form.Group>

                                        <Form.Text className="text-muted">
      <p style={{display:"flex",justifyContent:"center"}}>New to Lavendel?.<a href=""><p style={{display:"flex",justifyContent:"left",color:"blue",fontWeight:"bold"}}>Join Now</p></a></p>
    </Form.Text>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={"4"} xs={"8"} sm={"8"}>

                </Col>

            </Row>

        </div>
    )
}

export default signIn;