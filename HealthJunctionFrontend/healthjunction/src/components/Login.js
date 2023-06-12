import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import userService from '../Service/user.service';

const LoginPage = (props) => {

    const[authRequest,setAuthRequest]=useState({
      loginId:"",
      password:""
    });

    const [errorMessage,setErrorMessage]=useState("");

    const handleChange=(e)=>{
      const value = e.target.value;
      setAuthRequest({...authRequest,[e.target.name]:value})
    }

    const navigate = useNavigate();
    const submitCredential=(e)=>{
      e.preventDefault();

      setAuthRequest({
        loginId:"",
        password:""
      })

      userService.login(authRequest).then((res)=>{
        if(res.status===200){
          localStorage.setItem("user",res.data.id);
          navigate("/dashboard",{state:{user:res.data}});
          setErrorMessage("");
          props.changeState(true);
        }
      }).catch((error)=>{
        setErrorMessage("Incorrect ID or Password")
      })
      
    }

    
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">Login Page</h2>
          {errorMessage &&<p className='text-danger'>{errorMessage}</p>}
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
              name="loginId" value={authRequest.loginId} onChange={(e)=>handleChange(e)}/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" 
              name="password" value={authRequest.password} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" onClick={(e)=>submitCredential(e)}>LogIn </button>
              
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
