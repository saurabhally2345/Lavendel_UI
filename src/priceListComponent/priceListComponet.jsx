import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card  from 'react-bootstrap/Card';
import './priceListComponent.scss';
import Images from '../assests/single_bathrooma_spray.jpeg';

function PriceListComponent() {
    return (
        <Row className="boxPadding">
            <Col md={{ span: 12 }}>
                <Card className="boxPadding">
                    <Row>
                        <Col md={{ span: 4 }} xs={{ span: 6 }} sm={{ span: 6 }}>
                            <h1>Recommended</h1>
                            <p>Wide Range of Home Cleaning Services.</p>
                        </Col>

                        <Col className="d-flex justify-content-end">
                            SEE ALL
            </Col>
                    </Row>

                    <Row>
                        <Col md={{span:4}} xs={{span:6}} sm={{span:6}}>
                            <img src={Images} style={{maxHeight:"200px"}} alt="logo" />
                        </Col>

                        <Col md={{span:6}} xs={{span:6}} sm={{span:6}}>
                        <h1>
                            <p className="listName">Single bathroom cleaning & Spray</p>
                        </h1>
                        <p>* 4.5 * 30-40 mins * 2-3 staff</p>
                        
                        <Row>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 900</p>
                        </Col>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 1500</p>
                        </Col>
                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p style={{color:"green"}}>40% OFF</p>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={{span:4}} xs={{span:6}} sm={{span:6}}>
                            <img src={Images} style={{maxHeight:"200px"}} alt="logo" />
                        </Col>

                        <Col md={{span:6}} xs={{span:6}} sm={{span:6}}>
                        <h1>
                            <p className="listName">Single bathroom cleaning & Spray</p>
                        </h1>
                        <p>* 4.5 * 30-40 mins * 2-3 staff</p>
                        
                        <Row>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 900</p>
                        </Col>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 1500</p>
                        </Col>
                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p style={{color:"green"}}>40% OFF</p>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={{span:4}} xs={{span:6}} sm={{span:6}}>
                            <img src={Images} style={{maxHeight:"200px"}} alt="logo" />
                        </Col>

                        <Col md={{span:6}} xs={{span:6}} sm={{span:6}}>
                        <h1>
                            <p className="listName">Single bathroom cleaning & Spray</p>
                        </h1>
                        <p>* 4.5 * 30-40 mins * 2-3 staff</p>
                        
                        <Row>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 900</p>
                        </Col>

                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p>Rs. 1500</p>
                        </Col>
                        <Col md={{span:2}} sm={{span:4}} xs={{span:4}}>
                        <p style={{color:"green"}}>40% OFF</p>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}
export default PriceListComponent;