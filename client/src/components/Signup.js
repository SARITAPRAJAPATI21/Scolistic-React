import React, {useState} from 'react';
//import {NavLink} from 'react-router-dom';
import{useHistory} from 'react-router-dom';
import signup from "../images/signup.png";
import "./Signup.css";


const Signup=()=>{
  const history= useHistory()

  const[user, setUser]= useState({
    name: "",email: "", phone: "", designation: "", password: "", cpassword: ""
  });

  let name, value;

 const handleInputs=(e)=>{
 // console.log(e);
  name = e.target.name;
  value = e.target.value;
  console.log(name );

  setUser({...user, [name]: value});
 }

 const PostData= async (e) => {
  e.preventDefault();
  const { name, email, phone, designation, password, cpassword } = user;
   const res= await fetch("/register", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    name, email, phone, designation, password, cpassword  
    })

   });
   const data = await res.json();
  

    if(data.status=== 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalide Registration");

    }
    else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      history.push("/login");
    }

 }



  return(
    <>
       <section className ="signup">
        <div className="container mt-5">
          <div className= "signup-content">
            <div className='signup-form'>
              <h2 className="form-title">Sign up</h2>
              <form  method="POST" className='register-form' id="register-form">
               <div className='form-group'>
                <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name"></i> 
                </label>
                <input type="text" name="name" id="name" autoComplete="off"
                 value={user.name}
                 onChange={handleInputs}
                 placeholder="Your Name" /> 

               </div>

               <div className='form-group'>
                <label htmlFor="email">
                <i className="zmdi zmdi-email material-icons-name"></i> 
                </label>
                <input type="text" name="email" id="email" autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Your email"
                /> 

               </div>

               <div className='form-group'>
                <label htmlFor='phone'>
                <i className="zmdi zmdi-phone-in-talk material-icons-name"></i> 
                </label>
                <input type="text" name="phone" id="phone" autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Your phone" /> 

               </div>

               <div className='form-group'>
                <label htmlFor='designation'>
                <i className="zmdi zmdi-slideshow material-icons-name"></i> 
                </label>
                <input type="text" name="designation" id="designation" autoComplete="off"
                value={user.designation}
                onChange={handleInputs}
                placeholder="Your Profession" /> 

               </div>

               <div className='form-group'>
                <label htmlFor='password'>
                <i className="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="password" id="password" autoComplete="off"
                 value={user.password}
                 onChange={handleInputs}
                 placeholder="Your Password"

               
                /> 

               </div>

               <div className='form-group'>
                <label htmlFor='cpassword'>
                <i className="zmdi zmdi-lock material-icons-name"></i> 
                </label>
                <input type="text" name="cpassword" id="cpassword" autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password"
                /> 

               </div>

               <div className ="form-group form-button">
                <input type="submit" name="signup" id="signup" className= "form-submit"
                value="Sign up" onClick={PostData}/>
               </div>


              </form>
              </div>
              <div className="signup-image">
              <figure>
                <img src={signup} alt="signup"/>

              </figure>
              <a href="./login" classname= "signup-image-link">I am already register</a>
            </div>
          </div>
        </div>
       </section>
       
       
        
    </>
  )
}
export default Signup;