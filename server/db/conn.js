const mongoose = require('mongoose');
const DB= process.env.DATABASE;

const database = (module.exports=()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology:true,
        
    }
    try{
        mongoose.connect( DB,
        connectionParams );
        console.log("database connected at mongoatlas");
    } 
    catch(error){
      console.log(error);
      console.log("Database connection failed");
    }
});
database();
