import mongoose from  'mongoose'
import fs from 'fs'

// schema is the blueprint for the data, define the structure of the data
const eventsSchema = mongoose.Schema(
    {
        name : {
            type : String,
            // validation message if user doesnt give any name
            required: [true, 'Please enter the name of the event']
        },
        place:{ 
            type : String,
            required: true
        },
        time:{
                type : String,
                required: true
        },
        date:{ 
            type : String,
            required: true
        },
        price: {
            type : String,
            required : true

        },
        description:{
            type: String,
        },
        url : {
            type : String,
        }
    }
)
// creating model on my schema / collection in db
export const Events = mongoose.model('Events', eventsSchema )








// Web scrapped and got all data !

// //Scraped macaroni kid data :
// //Scraped macaroni kid data :
// const macaroniKidData = fs.readFileSync('macaronikid.json');
// const events = JSON.parse(macaroniKidData);

// events.forEach(event => {
//     if (typeof event === 'object' && event !== null) {
//         const ratingsdata = event.ratingsdata;

//         // Save the event to MongoDB
//         const newEvent = new Events({
//             name: ratingsdata && typeof ratingsdata === 'object' ? ratingsdata.title || 'No Title' : 'No Title',
//             place: event.location || 'No Location',
//             date: event.displaydate ? new Date(event.displaydate * 1000).toISOString().substr(0, 10) : 'No Date', // Format date as YYYY-MM-DD
//             time: event.displaydate ? formatTimeTo24Hour(new Date(event.displaydate * 1000)) : 'No Time', // Convert to 24-hour clock
//             price: event.price || 'Free',
//             description: 'No Description' // Assuming description is not available in the data
//             // Add URL if available
//         });

//         newEvent.save()
//             .then(() => console.log(`Event saved: ${newEvent.name}`))
//             .catch(err => console.error('Error saving event:', err));
//     } else {
//         console.log("Event is not an object. Type:", typeof event);
//     }
// });


// //saved patch.com data from here
// const patchData = fs.readFileSync('patch.json');
// const data1 = JSON.parse(patchData);

// Object.values(data1.results).forEach(eventsArray => {
//     eventsArray.forEach(event => {
//         const newEvent = new Events({
//             name: event.title || 'No Title',
//             place: event.address?.name || 'No Location',
//             date: new Date(event.displayDate).toISOString().substr(0, 10), // Format date as YYYY-MM-DD
//             time: formatTimeTo24Hour(new Date(event.displayDate)), // Convert to 24-hour clock
//             price: event.eventType === 'free' ? 'Free' : 'Price not specified',
//             description: event.summary || 'No Description'
//             // Add URL if available
//         });

//         newEvent.save()
//             .then(() => console.log(`Event saved: ${newEvent.name}`))
//             .catch(err => console.error('Error saving event:', err));
//     });
// });


// // saved eventbrite data from here
// const eventbrite = fs.readFileSync('eventbrite.json');
// const data2 = JSON.parse(eventbrite);

// // Extract event details and save them to MongoDB
// data2['events'].forEach(event => {
//     const eventData = {
//         name: event.name || 'No Name',
//         place: event.primary_venue?.localized_area_display || 'No Place',
//         date: event.start_date || 'No Date',
//         time: formatTimeTo24Hour(new Date(event.start_date + 'T' + event.start_time)), // Convert to 24-hour clock
//         price: event.ticket_availability?.minimum_ticket_price?.display || 'No Price',
//         description: event.summary || 'No Description'
//     };

//     const newEvent = new Events(eventData);
//     newEvent.save()
//         .then(() => console.log(`Event saved: ${eventData.name}`))
//         .catch(err => console.error('Error saving event:', err));
// });

// function formatTimeTo24Hour(date) {
//     return date.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false
//     });
// }
