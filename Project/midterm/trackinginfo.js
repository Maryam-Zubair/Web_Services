import express from 'express'
import bodyParser from 'body-parser'
import {trackid} from '../controller/trackerapi.js'
export const orderDetails = express.Router()

orderDetails.use(bodyParser.json());

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

orderDetails.post('/track',async(req,res)=>{
    const {orderNum} = req.body

    if(!orderNum){
        return res.json({ error: 'Order number required.' });
    }

    // findng tracking number associated with orderNum provided by user
    const trackingInfo = trackingInformation.find(info => info.orderNum === orderNum);
    if (!trackingInfo) {
        return res.status(404).json({error: 'No tracking information found for the'});
    }

    try {
        let trackingDetails = await trackid(trackingInfo.trackingNumber)
        
        // grabbing some specific details from api response
        const origin = trackingDetails['tracking detaild']['shipments'][0]['origin']
        const dest = trackingDetails['tracking detaild']['shipments'][0]['destination']
        const stat= trackingDetails['tracking detaild'].shipments[0].status
        
        return res.json({origin, dest, stat})

        // // will return the whole Api response
        // return res.json({trackingDetails})
    }
    
    catch(error)
    {
        return res.status(500).json({ error: 'Fetching tracking details' });
    }

})