const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db = require("./config/db.js")
const productRoutes = require("./routes/product.js");
const { MongoClient } = require("mongodb");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.js");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cookieParser());

app.use(cors);

app.use("/", (req, res) => {
  console.log("server start to run ")
  res.status(200).json({
    message: "server is running",
  });
});
/* 
 app.use("/" , productRoutes)
 app.use("/" , userRoutes)
  */

const PORT = process.env.PORT;
/* db();
app.listen(PORT, () => {
  console.log(`server is running ${PORT} port`);
});
 */
mongoose
.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("The server is running on port " + PORT);
   
  });
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
}); 


