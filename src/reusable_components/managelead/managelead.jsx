import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header_ui/header';
import Pagination from "react-js-pagination";
import './managelead.scss';
import Axios from 'axios';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import ManageLeadDatatable from './manageleaddatatable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ManageLead = () => {


    //  const setCount = ( pageNumber)=>{
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //  }
    const [count, setCount] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [leadsPerPage, setLeadsPerPage] = useState(10);

    useEffect(() => {
        const fetchLeads = async () => {
            const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
            setCount(res.data);
            setLoading(false);
            console.log(res)

        }
        fetchLeads();

    }, []);

    return <Container fluid>

        <Row style={{ backgroundColor: "skyblue" }}>
            <Col md={"4"} style={{ maxWidth: "25%", minHeight: "100vh" }}><Sidebar /></Col>
            <Col md={"8"} style={{ minWidth: "73%", minHeight: "20%" }}>

                <Header />
                <Row style={{ border: "2px solid green", padding: "4%", marginTop: "1%", maxHeight: "86vh", backgroundColor: "#FFFFFF",overflow:"scroll" }}>
                    <Col md={"12"} >
                        <Row >
                            <Col md={"5"}>         
                                   <div className="inputColumnFG">
                                     <div >
                                      <FontAwesomeIcon icon={faSearch} className="searchButtonFG" style={{marginTop:"15px"}} />
                                    </div>
                                <input type="search" placeholder="search for products,brand and more" className="inputFieldFG" />
                            </div> </Col>
                            <Col md={"2"}>
                                <Form.Group>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="Date">
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                            <Col md={"2"}> 
                                                       <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date">
                                </Form.Control>
                            </Form.Group></Col>
                        </Row>
                        <Row style={{ paddingTop: "1%" ,minWidth:"109%"}}>
                            <Col md={"12"}>
                            <ManageLeadDatatable />
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Col>

        </Row>

    </Container>
}

export default ManageLead;