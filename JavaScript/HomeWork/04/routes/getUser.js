const express = require("express")
const getUser = express.Router()

getUser.use(express.json());

getUser.post('/',(req,res)=>{
    payload = req.body;
    console.log(payload);

    let response = {};
    for(let key in payload){
        response[key] = payload[key];
    }
    res.send(response);

    // // payload as response in json format
    // res.json(payload);

})

module.exports = getUser
  