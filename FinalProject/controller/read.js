
import { Events } from '../model/event.js';

export const reading = async (req, res) => {
  try {
    const date = req.query.date;

    // Find all events that match the specified date
    const events = await Events.find({ date });

    if (events.length === 0) {
      res.status(404).json({ error: 'No events found on the particular date' });
    } else {
      res.status(200).json(events);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
