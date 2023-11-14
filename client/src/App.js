import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css";
import Navbar from"./components/Navbar";
import Home from "./components/Home";
//import About from"./components/About";
import Contact from"./components/Contact";
import Login from"./components/Login";
import Signup from"./components/Signup";
import Scholarship from"./components/Scholarship";




const App=()=>{
  return(
<>
<Navbar/>


<Route exact path="/home">
<Home/>
</Route>


<Route path="/contact">
<Contact/>
</Route>

<Route path="/login">
<Login/>
</Route>

<Route path="/signup">
<Signup/>
</Route>

<Route path="/scholarship">
<Scholarship/>
  </Route>


  

</>
  )
}
export default App;