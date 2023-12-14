import { Events } from '../model/event.js';

export const updating = async(req, res) => {
    try {
        const eventId = req.params.id;

        // for Filter out empty fields from req.body
        const updateData = Object.keys(req.body).reduce((acc, key) => {
            if (req.body[key] !== null && req.body[key] !== undefined && req.body[key] !== '') {
                acc[key] = req.body[key];
            }
            return acc;
        }, {});

        // set : Updating only the provided fields
        // new true : returning updated document
        const updatedEvent = await Events.findByIdAndUpdate(eventId, { $set: updateData }, { new: true });

        if (!updatedEvent) {
            res.status(404).json({ error: 'Event not found' });
        } else {
            res.status(200).json(updatedEvent);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}