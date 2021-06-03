import React from 'react';
import './register.scss';
import RegisterImage from './../../assests/lavandalregister.png';
import Logo from './../../assests/logo_white.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMobileOtp } from './../../redux/user/user-reducer';
import { fetchMobileOtpResponse, fetchMobileOtpSuccess } from './../../redux/user/user.action';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { render } from '@testing-library/react';
import { Container, Row, Col } from 'react-bootstrap';


// const useStyles = makeStyles((theme) =>({
//     root: {
//         flexGrow:1,
//     },
//     paper:{
//         height:140,
//         width:100,
//     },
//     control:{
//         padding:theme.spacing(2)
//     }
// }));

// console.log("suman",typeof(useStyles))

// const Register = (fetchMobileOtpResponse,fetchMobileOtpSuccess) => {
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileno: '',
        };


    }



    // const classes = useStyles();


    // const [mobileno, setMobileno] = useState("")

    handleSubmit = (e) => {
        e.preventDefault();
        // getMobileOtp(mobileno)

    }

    setMobileno = (e) => {
        this.setState({ mobileno: e.target.value })
    }
    render() {


        return <Container fluid>

            <Row>
                <Col md="10">


                    <img src={RegisterImage} className="lavendelh" />
                </Col>
                <Col md="2">
                    <Row >

                        <div >
                            <img src={Logo} />
                        </div>

                        <div >
                            <span >Welcome Back</span>
                        </div>

                        <form onSubmit={(e) => this.handleSubmit(e)}>

                            <div >
                                <span >Mobile No</span>
                                <div >
                                    <input type="text" placeholder="Enter Mobile no" value={this.state.mobileno} name="mobileno" onChange={e => this.setMobileno(e.target.value)} required style={{
                                        // padding: "2%", minWidth: "79%" }} />
                                        flex: 'auto'
                                    }} />
                                </div>
                            </div>

                            {/* 
            <div style={{marginTop:"2%"}}>
                <span style={{display:"flex",justifyContent:"flex-start",paddingRight:"32%",fontSize:"20px",fontWeight:"400"}}>Submit</span>
                <div className="inputfield">
                <input type="text" placeholder="Enter Password" style={{padding:"2%",minWidth:"79%"}} />
                </div>
            </div> */}

                            <div>

                                {/* <button type="submit" style={{ backgroundColor: "#481ac4", minWidth: "79%", padding: "2%", marginTop: "2%" }} onClick={(e) => handleSubmit(e)}><span style={{ color: "white" }}>Get OTP</span></button> */}
                                <button type="submit" style={{ backgroundColor: "#481ac4", flex: "auto" }} onClick={(e) => this.handleSubmit(e)}><span style={{ color: "white" }}>Get OTP</span></button>

                            </div>
                        </form>

                    </Row>
                </Col>
            </Row>
        </Container>

    }

    //  mapStateToProps = state => {

    //     console.log(state)
    //     return {
    //         error:state.user.error,
    //         isLoading:state.user.isLoading,
    //         mobileno: state.mobileno,
    //         response:state.user.response        
    //     }
    // }

    //  mapDispatchToProps = (dispatch) =>{
    //     // console.log(dispatch)
    //    return {
    //        fetchMobileOtpResponse: mobileno => dispatch(fetchMobileOtpResponse(mobileno))
    //    }
    // }

    // }
}

export default
    // connect(mapStateToProps,
    //      {
    //     getMobileOtp
    // },
    // mapDispatchToProps)(
    Register
    // );