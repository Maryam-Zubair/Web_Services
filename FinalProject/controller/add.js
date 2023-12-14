import { Events } from '../model/event.js'


export const adding = async(req,res)=>{
    try{
        const eve = await Events.create(req.body);
        res.status(200).json(eve);
    }
    catch(error){
        console.log(error.message);
    }
}