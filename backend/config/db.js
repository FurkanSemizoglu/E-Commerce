const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const db = () => {
  MongoClient
    .connect(process.env.DATABASE_URI)
    .then(() =>{
        console.log("mongodb connected");
    })
    .catch((error)  =>{
        console.log("mogodb connection failed" , error)
    } 
    )
    
};


module.exports = db;
