const express = require("express")
const getDevice = express.Router()

getDevice.use(express.json()); //parse json

// collecting information so get method
getDevice.get('/', (req,res)=>{

    // getting user-agent from request header
    const deviceInfo = req.headers['user-agent']

    const os = determineOperatingSystem(deviceInfo);
    // sending response in json format
    res.json(os)
})

// function finding os
determineOperatingSystem = (userAgent) => {
    const result = {
        isWindows: /Windows/.test(userAgent),
        isMac: /Mac/.test(userAgent),
        isLinux: /Linux/.test(userAgent),
        postmanRunTime: /PostmanRuntime/.test(userAgent)
    };
    return result;
}

module.exports = getDevice
