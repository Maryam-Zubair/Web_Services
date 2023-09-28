const express = require("express");
const app = express();

const hostname = 'localhost';
const port = 8080;

app.get('/hello', (request, response) => {
    console.log(request, 'request')
    // response 
    response.send({info : 'Node.js, Express and Rest Apis'})
})
 
app.listen(port, hostname, () => {
  console.log(`Server running`);
});