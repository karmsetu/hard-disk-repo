require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

let postsData = [
    {
        "userName":"shourya",
        "age":18 
    },
    {
        "userName":"boi",
        "age":69 
    }
]

app.get('/posts', (req, res)=>{
    res.json(postsData)
})

app.post('/login', (req, res)=>{
    // res.json(postsData)
    const userName = req.body.userName
    const user = {name: userName}
    jwt.sign(user, process.env.ACCESS_KEY)
    res.json({
        accessKey: process.env.ACCESS_KEY 
    })
})


app.listen(3000)