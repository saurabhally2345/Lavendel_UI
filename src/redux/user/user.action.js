import {FETCH_MOBILEOTP_RESPONSE,FETCH_MOBILEOTP_SUCCESS,FETCH_MOBILEOTP_ERROR} from './type';
import Apicall from './../services/user.service';

import {INITTIAL_STATE} from './user-reducer';

export const  fetchMobileOtpResponse = (mobileno) => {
    const getOtp = Apicall.getMobileOtp(mobileno)
    console.log(getOtp)
         console.log("hi saurabh",mobileno)
    return{
        type:FETCH_MOBILEOTP_RESPONSE,
        payload:mobileno
    }
}

export const fetchMobileOtpSuccess = (response) => {
    console.log("HI das",response)
    return {
        type:FETCH_MOBILEOTP_SUCCESS,
        // payload:INITTIAL_STATE.response
        payload:response
    }
}


export const fetchMobileOtpError = error =>{
    console.log("hi error",error)
    return {
        type:FETCH_MOBILEOTP_ERROR,
        // payload:INITTIAL_STATE.error
        payload:error
    }
}


