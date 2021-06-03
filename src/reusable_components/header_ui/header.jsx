import React from 'react';
import Logo from '../../assests/avatar.svg';
import {Card,Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{

    return  <div>
        <Row style={{display:"flex",backgroundColor:"#FFFFFF",padding:"10px"}}>
            <Col md={{span:4}}>
               <p style={{display:"flex",paddingTop:"4%",fontFamily:"nunito"}}> Create a Services</p>
         </Col>
         <Col md={{span:8}} style={{display:"flex",justifyContent:"flex-end"}}>
            <Row>
                <Col><span><img src={Logo} /></span></Col>
                <Col><span>Suman Saurabh</span></Col>
                <Col><FontAwesomeIcon icon={faBell} /></Col>
            </Row>

         </Col>

         </Row>
         </div>
}

export default Header;