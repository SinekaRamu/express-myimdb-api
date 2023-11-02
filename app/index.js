const dotenv = require("dotenv")
dotenv.config();

const config = require("./config")
const express = require("express")

const app = express();


//port
app.listen(config.appPort, ()=>{
    console.log(`Server running in the port ${config.appPort}`)
})