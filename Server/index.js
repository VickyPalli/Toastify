const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const userRoute = require("./Routes/Userroutes")
app.use(cors())
app.use(express.json())


app.use("/api/auth",userRoute)

mongoose.connect(process.env.Mongoose_Url,{useNewUrlParser : true,useUnifiedTopology : true}).then(()=>{
    console.log("Mongoose Connected Sucessfully")
}).catch((error)=>{
    console.log(error)
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started At port ${process.env.PORT}`)
})