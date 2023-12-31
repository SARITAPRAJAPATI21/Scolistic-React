import React from 'react';
//import { NavLink } from 'react-router-dom';
import "./Contact.css";
const Contact=()=>{
  return(
    <>
      <h1>Contact us</h1>
      <form className='contact'>
      <div>
        <label htmlFor='name'>Name</label>
        <input type="text" placeholder="Enter your name"/>

      </div>
      <div>
        <label htmlFor='name'>Email</label>
        <input type="email" placeholder="Enter your email"/>
        
      </div>
      <div>
        <label htmlFor="query">Query</label>
        <input type="query" placeholder="Any Query"/>
        
      </div>
      <div>
        <label htmlFor='mobile'>Mobile</label>
        <input type="mobile" placeholder="Enter your mobile"/>
        
      </div>
      <div className="btnBox">
        <div className='btn'>
          <a href="/home"> Submit Details</a>
          

        </div>
      </div>
      </form>
    </>
  )
}
export default Contact;