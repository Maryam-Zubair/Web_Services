import { Events } from '../model/event.js';

export const removing = async(req, res)=>{
    try{
        const eventId = req.params.id;
        const deletedEvent = await Events.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            res.status(200).json({ message: 'Event deleted successfully' });
        }
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
