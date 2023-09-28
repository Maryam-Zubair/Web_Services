const express = require("express")
const alive = express.Router()

alive.get('/',(req,res)=>{
    res.send('Server is alive and running!')
})

module.exports = alive