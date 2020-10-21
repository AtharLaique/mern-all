const express = require('express')
const router = express.Router()

router.get('/hello',(req,res)=>{
  res.send("<h1>Hello From Express Server</h1>")
})
router.use('/home',require('./home/home'));
module.exports=router;