import React, {useState} from 'react';
//import{NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";
import loginpic from "../images/loginpic.png";
import "./Login.css";
//import createHistory from 'history/createBrowserHistory';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
//import Home from "./home";


const Login=()=>{
  const history= useHistory();
  const [email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const loginUser= async (e) =>{
    e.preventDefault();

    const res= await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        email,
        password
      })
    });
     const data= res.json();
   
     if(res.status=== 400 || !data)
     {
      window.alert("Invalid Credentials");
     }
     else{
      window.alert("Login Successfully");
      history.push("/home");
      
     }
  }

  return(
    <>
    <section className ="sign-in">
        <div className="container mt-5">
          <div className= "signin-content">
            <div className="signin-image">
              <figure><img src={loginpic} alt="Login pic"/>  </figure>
              <a href="./signup" className="signin-image-link">Create an account</a>
            </div>
            <div className='signup-form'>
              <h2 className="form-title">Sign in</h2>
              <form method ="POST" className='register-form' id="register-form">
              

               <div className='form-group'>
                <label htmlFor='email'>
                <i className="zmdi zmdi-email material-icons-name"></i> 
                </label>
                <input type="text" name="email" id="email" autoComplete="off"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your Email" /> 

               </div>

               

               
               <div className='form-group'>
                <label htmlFor='password'>
                <i className="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="password" id="password" autoComplete="off"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Your Password" /> 

               </div>

              

               <div className ="form-group form-button">
                <input type="submit" name="signin" id="signin" className= "form-submit"
                value="Log in "
                onClick={loginUser}/>

               </div>


              </form>
              </div>
              
          </div>
        </div>
       </section>
  
    </>
  )
}
export default Login;