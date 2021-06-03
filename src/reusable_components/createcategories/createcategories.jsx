import React, { Component } from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import { Button } from 'reactstrap';
import Apicall from '../../api/api';


class CreateCategories extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            offers:'',
            price:'',
            staff:'',
            service_name:[]

        }
    }
    onNameChange(e){
        this.setState({name:e.target.value})
    }
    onOffersChange(e){
        this.setState({offers:e.target.value})
    }
    onPriceChange(e){
        this.setState({price:e.target.value})
    }
    onStaffChange(e){
        this.setState({staff:e.target.value})
    }
    onServiceChange(e){
        this.setState({service_name:e.target.value})
    }
    onSubmit() {
        let  obj = {
             name:this.state.name,
             offers:this.state.offers,
             price:this.state.price,
             staff:this.state.staff,
             services_no:this.state.service_name
        }
             let res = Apicall.createCategoriesApi(obj);
             console.log(res)
         
    }
    render(){
    return <Container>
        <Row>
            <Col>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Categories</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={(e)=>this.onNameChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Offers</Form.Label>
                    <Form.Control type="text" value={this.state.offers} onChange={(e)=>this.onOffersChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={this.state.price} onChange={(e)=>this.onPriceChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Staff No.</Form.Label>
                    <Form.Control type="text" value={this.state.staff} onChange={(e)=>this.onStaffChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Service Name/No.</Form.Label>
                    <Form.Control type="text" value={this.state.service_name} onChange={(e)=>this.onServiceChange(e)}></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>this.onSubmit(e)}>Submit</Button>
            </Form>
            </Col>
        </Row>
    </Container>
}
}
export default CreateCategories;