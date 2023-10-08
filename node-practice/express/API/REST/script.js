const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
mongoose.connect(process.env.databaseURL)
const db = mongoose.connection
app.use(express.json())
db.on('error', (error)=>{
    console.error(error)
})
db.once('open', ()=>{
    console.log(`connected to database`)
})

const subscriberRouter = require('./routes/subscribers')

app.use('/sub', subscriberRouter) //why is it above the main/route request ?

app.get('/', (req, res, next)=>{
    res.send('hello World (main)')
})



app.listen(3000, ()=>{
    console.log(`server has started at port 3000`)
})
