const express = require('express')
const app = express()  // Correct way to create an instance of the Express application

const port = 8080

app.get('/set-header', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Custom-Header', 'Hello from GET route')
    res.send({ message: 'This is a GET request' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})