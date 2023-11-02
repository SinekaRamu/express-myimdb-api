const dotenv = require("dotenv")
dotenv.config();

const config = require("./config")
const express = require("express")
const morgan = require("morgan")

const app = express();

app.use(express.json())
app.use(morgan("dev"))

const movies = [{ id: 1234, title: "Evil Dead", year: "2013" }];
//get
app.get("/", (req, res)=>{
  res.send(movies);

})

//port
app.listen(config.appPort, ()=>{
    console.log(`Server running in the port ${config.appPort}`)
})