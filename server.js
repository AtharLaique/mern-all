const express=require('express')
const app=express()
require('dotenv').config()

const port=process.env.PORT ||5001
app.use('/api/',require('./src/routes'))
app.listen(port,()=>{
  console.log(`Server is Running on ${port}`)
})