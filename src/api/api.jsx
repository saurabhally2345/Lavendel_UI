import axios from 'axios';

let ses = localStorage.getItem('token');
console.log("session",ses)

const apiCall = ({
    LoginApi,
    RegistrationApi,
    createCategoriesApi
});

export default apiCall;


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

async function LoginApi(data){
  console.log(data)
    try{
        let obj = data;
        console.log("hjhjhj",obj)
    let  apiResponse = await  axios.post('http://localhost:3000/models/admin',obj,
    {
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-type': 'application/json',
            // 'Cookie': 'phpMyAdmin=m2s55qspqhghb2m4bgb7a0lrh5; pma_lang=en',
            // 'Authorization':	'Bearer {code}',
            //  'Access-Control-Allow-Headers': "origin, x-requested-with, content-type",
            //  'Access-Control-Allow-Methods':"PUT, GET, POST, DELETE, OPTIONS"
    }
}
)
    return apiResponse
    }
    catch(e){
       console.log(e)
    }
}

async function RegistrationApi(obj){
    try{
         let apiResponse = await axios.post('http://localhost:3003/v1/admin-users',obj,
       {    
           headers:{
            'Access-Control-Allow-Origin':'*',  
            'Content-type': 'application/json',
            'Authorization':  'Basic YWRtaW46MTQzNjk=',
           }
       })
       console.log("api response ",apiResponse)
       return apiResponse
    }
    catch{

    }
}
async function createCategoriesApi(obj){
    try{
         let apiResponse = await axios.post('http://localhost:3003/v1/admin-users/createcategories',obj,
       {
           headers:{
            'Access-Control-Allow-Origin':'*',  
            'Content-type': 'application/json',
            'Authorization': 'Basic YWRtaW46MTQzNjk2',
           }
       })
       console.log("api response ",apiResponse)
       return apiResponse
    }
    catch{

    }
}