import express from 'express'
import {trackid} from '../controller/trackerapi.js'
export const orderDetails = express.Router()

const trackingInformation = [
    {
        orderNum: "123456",
        trackingNumber: "JJD149990200055881941"
    },
    {
        orderNum: "q123555556",
        trackingNumber: "JJD149990200055881941"
    },
    {
        orderNum: "rlk67674738393",
        trackingNumber: "JJD149990200055881941"
    }
]
// post request made with /track
orderDetails.post('/track',async(req,res)=>{
    const {orderNum} = req.body

    if(!orderNum){
        return res.json({ error: 'Order number required.' });
    }

    // findng tracking number associated with orderNum provided by user
    const trackingInfo = trackingInformation.find(info => info.orderNum === orderNum);
    // console.log(trackingInfo)

    if (!trackingInfo) {
        return res.status(404).json({error: 'No tracking information found for the'});
    }

    try {
        let trackingDetails = await trackid(trackingInfo.trackingNumber)

        // // will return the whole Api response
        // return res.json({trackingDetails})
        
        // grabbing some specific details from api response
        const origin = trackingDetails['tracking detaild']['shipments'][0]['origin']['address']
        const destination = trackingDetails['tracking detaild']['shipments'][0]['destination']['address']
        const status= trackingDetails['tracking detaild']['shipments'][0]['status']['statusCode']
        const time=trackingDetails['tracking detaild']['shipments'][0]['status']['timestamp']
        const description= trackingDetails['tracking detaild']['shipments'][0]['status']['description']
        
        return res.json({status,description,time,origin,origin,destination})

    }
    
    catch(error)
    {
        return res.status(500).json({ error: 'Fetching tracking details' });
    }

})