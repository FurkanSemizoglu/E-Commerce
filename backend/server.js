const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db = require("./config/db.js")
const productRoutes = require("./routes/product.js");
const { MongoClient } = require("mongodb");

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors);

app.use("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

/* app.use("/" , productRoutes)
 */

const PORT = process.env.PORT;
db();
app.listen(PORT, () => {
  console.log(`server is running ${PORT} port`);
});
/* 
 */

app.use("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

/* (async () => {
  MongoClient.connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("mongodb connected");
      app.listen(PORT, () => {
        console.log(`server is running ${PORT} port`);
      });
    })
    .catch((error) => {
      console.log("mogodb connection failed", error);
    });
  
})(); */


