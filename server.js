const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 3001;
var cookieParser = require('cookie-parser');
const path = require("path");
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.mongolab-dimensional-46374 || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);
console.log("go take a break Brennan")
app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});