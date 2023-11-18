const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      UseUnifiedTopology: true
    })
    .then(() =>{
        console.log("mongodb connected");
    })
    .catch((error)  =>{
        console.log("mogodb connection failed" , error)
    } 
    )
    
};


module.exports = db;
