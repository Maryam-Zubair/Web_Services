const express = require('express');
const app = express();  // Correct way to create an instance of the Express application

const port = 8080;

app.get('/live', (req, res) => {
    res.json({ status: 'Web service is live',
    Data: {
        uptime: '12 hours',
        version: '1.0.0',
        name: 'Men li',
        age: 30,
        job: 'Software_Dev'
    }
    })
})

app.get('/startup', (req, res) => {
    res.json({ status: 'Web Service has started' });
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Running on port', port);
    }
});