const express = require("express")
const getUser = express.Router()

getUser.use(express.json());

getUser.post('/',(req,res)=>{
    payload = req.body;
    console.log(payload);

    // payload as response in json format
    res.json(payload);

})

module.exports = getUser
  
