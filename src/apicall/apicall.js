import axios from 'axios';



export const getMobileOtp = async (mobileno) =>{
    console.log(mobileno)
       
    let response = await axios.get('https://api.msg91.com/api/v5/otp?invisible=1&authkey=344376Ac7H84foWCj5f8579c8P1&template_id=5f8efbfb4073cc63f56f19ac&mobile='+mobileno)
    console.log("response",response)

}