const dotenv= require("dotenv");
const mongoose= require('mongoose');
const express= require('express');
const app= express();
dotenv.config({path:'./config.env'});

const PORT= process.env.PORT;

require('./db/conn');

//json -> formal form of data
app.use(express.json());
//const User=require('./model/userSchema');
app.use(require('./router/auth'));

//middleware
const middleware = (req, res, next)=>{
console.log("hello to middleware");
next();
}

app.get('/',(req, res)=>{ 
res.send(`hello world from the server app,js`);
});
app.get('/about',middleware,(req,res)=>{
    res.send(`About section`);
    
});
app.get('/contact',(req,res)=>{
    res.send(`contact section`);
});
app.get('/signin',(req,res)=>{
    res.send(`signin section`);
});
app.get('/signout',(req,res)=>{
    res.send(`signout section`);
});


app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})
