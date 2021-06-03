import { FETCH_MOBILEOTP_RESPONSE, FETCH_MOBILEOTP_SUCCESS, FETCH_MOBILEOTP_ERROR } from './type';
import axios from 'axios';
import { fetchMobileOtpResponse, fetchMobileOtpSuccess, fetchMobileOtpError } from './user.action';

export const INITTIAL_STATE = {
    isLoading: false,
    response: '',
    error: '',
    mobileno: ''
}

const userReducer = (state = INITTIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_MOBILEOTP_RESPONSE:

            return {
                ...state,
                isLoading: true,
            }
        case FETCH_MOBILEOTP_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload,
                error: ''
            }
        case FETCH_MOBILEOTP_ERROR:
            return {
                loading: false,
                message: [],
                error: action.payload

            }
        default:
            return state;
    }
}


export default userReducer;



