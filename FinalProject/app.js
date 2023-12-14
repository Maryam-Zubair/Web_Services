// basic imports
import express from 'express'
import mongoose from 'mongoose'
// importing modules handling CRUD operation
import {add} from './routes/route_add.js'
import {read} from './routes/route_read.js'
import {remove} from './routes/route_remove.js'
import {update} from './routes/route_update.js'


const app = express()
// application exposed on port 8000
const PORT = 8000

app.use(express.json())
app.use(express.static('public'));


// routing handling
app.use('/add', add)
app.use('/remove', remove)
app.use('/update', update)
app.use('/read', read)

// uri for mongodb Database : finalproject
const uri = 'mongodb+srv://mzubair9954:FBFzUsroJDBsYO8f@cluster0.jqssshf.mongodb.net/finalproject'
mongoose.connect(uri)
.then(()=>{
    // connecting to db
    console.log('connected to Mongodb')
    // listening to port
    app.listen(PORT,()=>{
        console.log('Node API is running on port 8000')
    })
}).catch(()=>{
    console.log(error)
})
