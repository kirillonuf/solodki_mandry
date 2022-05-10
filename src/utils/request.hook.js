



import React from "react"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorsContext } from "./context.js";
// import { errorsContext } from '../../utils/context';

  


export const useHttp = () => {

const {errors,setErrors} =React.useContext(errorsContext)
  const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);


  React.useEffect(()=>{
    console.log(errors)
    errors && typeof errors ==='string'&& toast(errors, {
        position: "top-center",
        type:"error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
         setErrors('')
    },[errors])



  const request = async (url, method = "GET", body = null) => {
    setLoading(true);
    const baseURL = `http://localhost:5000${url}`;
    const headers = {
      'Content-Type': 'application/json'
    }
    try {

              if(body){

                  body= JSON.stringify(body);
       headers['Content-Type']= 'application/json';
      
               }
    
      console.log("baseURL + url", baseURL, body, method, headers);
       const result =   await fetch(baseURL,{ method: method, body: body, headers: headers })
        
      
          if (result.status>=400) {
           const error = await result.json();
          //  toasty(message)
// console.log("result",message);

           setErrors(error.message)
           console.log("result",errors);
          }
         
        
       console.log(result);
      // const data = await


      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrors(error.message);
       return error;
    }







  }
 return {request,errors,loading}
}