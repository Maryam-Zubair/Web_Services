const express = require('express');
const app = express();  // Correct way to create an instance of the Express application

const port = 8080;

app.get('/live', (req, res) => {
    res.json({ status: 'Web service is live' });
});

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