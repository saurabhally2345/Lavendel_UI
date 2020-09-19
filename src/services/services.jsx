import React from 'react';
import Images from '../assests/ac_services.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './services.scss';

function Services(){
    return(
     <Row className="desServices">
       <Col md={{span:2,offset:1}} xs={{span:3,offset:3}} sm={{span:3,offset:3}}>
            <Card>
                <Row>
                    <Col>
                <Card  variant="Top">
                    <Card.Body>

                    <img src={Images} style={{maxWidth:"107px",maxHeight:"111px"}} alt="logo" />
                    <p style={{color:"darkgreen"}}>Rs. 1200</p>
                    </Card.Body>
                    <Card.Footer>
                        <p>AC Repair & Services</p>
                        <h1 style={{color:"darkgreen",fontFamily:"Sans-serif"}}>Book Now</h1>
                    </Card.Footer>
                </Card>
                </Col>

                </Row>
            </Card>
       </Col>

       <Col md={{span:2,offset:1}} xs={{span:3,offset:3}} sm={{span:3,offset:3}}>
            <Card>
                <Row>
                    <Col>
                <Card  variant="Top">
                    <Card.Body>

                    <img src={Images} style={{maxWidth:"107px",maxHeight:"111px"}} alt="logo" />
                    <p style={{color:"darkgreen"}}>Rs. 1200</p>
                    </Card.Body>
                    <Card.Footer>
                        <p>AC Repair & Services</p>
                        <h1 style={{color:"darkgreen",fontFamily:"Sans-serif"}}>Book Now</h1>
                    </Card.Footer>
                </Card>
                </Col>

                </Row>
            </Card>
       </Col>
       <Col md={{span:2,offset:1}} xs={{span:3,offset:3}} sm={{span:3,offset:3}}>
            <Card>
                <Row>
                    <Col>
                <Card  variant="Top">
                    <Card.Body>

                    <img src={Images} style={{maxWidth:"107px",maxHeight:"111px"}} alt="logo" />
                    <p style={{color:"darkgreen"}}>Rs. 1200</p>
                    </Card.Body>
                    <Card.Footer>
                        <p>AC Repair & Services</p>
                        <h1 style={{color:"darkgreen",fontFamily:"Sans-serif"}}>Book Now</h1>
                    </Card.Footer>
                </Card>
                </Col>

                </Row>
            </Card>
       </Col>
      
     </Row>
    )
}

export default Services;