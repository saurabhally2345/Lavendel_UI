import React from 'react';
import './discountsCards.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import {ReactComponent as PestControl} from '../../assests/pestControl.svg';
import { ReactComponent as Logo } from  '../../assests/plumbing.svg';
import {ReactComponent as Painting} from '../../assests/painting.svg';


function DiscountCards() {
    return (
        <div>
            <Row>
                <Col md={{ span: 2,offset:2 }} className="cardSize">
                    <Card className="iconsPestControl">
                        <Card.Img variant="top" />
                        <Card.Body >
                            <PestControl />
                        </Card.Body>

                        <Card.Footer className="footerColor">Painting</Card.Footer>

                    </Card>


                </Col>
                <Col md={{ span: 2,offset:1 }} className="cardSize">

                <Card className="cardDesignPlumb">
                        <Card.Img variant="top" />
                        <Card.Body >
                            <Logo />
                        </Card.Body>

                        <Card.Footer className="footerColor">Painting</Card.Footer>

                    </Card>
                </Col>
                <Col md={{ span: 2,offset:1 }} className="cardSize">
                    
                <Card className="iconsPainting">
                        <Card.Img variant="top" />
                        <Card.Body >
                            <Painting />
                        </Card.Body>

                        <Card.Footer className="footerColor">Painting</Card.Footer>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default DiscountCards;