import React, { useState } from 'react';

import "../cssfile/SignUp.css";
import userService from '../Service/user.service';

const SignUp = () => {
  const [User, setUser] = useState({
    loginId:"",
    password:"",
    firstName: "",
    lastName:"",
    age: "",
    
  });

  const handleChange = (e) => {
   const value = e.target.value;
   setUser({...User,[e.target.name]:value})
  };

  const [message,setMessage] = useState("");

  const submitUser=(e)=>{
    e.preventDefault();
    setUser({
    loginId:"",
    password:"",
    firstName: "",
    lastName:"",
    age: "",
    
    })

    userService.saveUser(User).then((res)=>{
        setMessage("Account Created SucessFully !!!!")
    })
  }

  return (
    
    <div className="form-container">
         
      <form onSubmit={(e)=>submitUser(e)}>
        {message && <p className='text-success'>{message}</p>}
        <div className="form-group">
          <label htmlFor="loginId">loginId:</label>
          <input
            type="email"
            id="loginId"
            name="loginId"
            value={User.loginId}
            onChange={(e)=>handleChange(e)}
          />
        </div>


        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={User.password}
            onChange={(e)=>handleChange(e)}
          />
        </div>
      
        
        <div className="form-group">
          <label htmlFor="firstName">firstName:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={User.firstName}
            onChange={(e)=>handleChange(e)}
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="lastName">lastName:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={User.lastName}
            onChange={(e)=>handleChange(e)}
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="age">age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={User.age}
            onChange={(e)=>handleChange(e)}
          />
        </div>

        
       

       

        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default SignUp;
