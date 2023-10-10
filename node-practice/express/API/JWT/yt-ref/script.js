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

app.get('/posts',authenticateToken, (req, res)=>{
    res.json(postsData.filter(post => post.userName === req.user.userName))
})

app.post('/login', (req, res)=>{
    // res.json(postsData)
    const userName = req.body.userName
    const user = {userName: userName}
    jwt.sign(user, process.env.ACCESS_KEY)
    res.json({
        accessKey: process.env.ACCESS_KEY 
    })
})

function authenticateToken(req, res, next) {
    const authHeader = req.header['authorization'] 
    const token = authHeader && authHeader.split(' ')[1] //if we have authHeader 
    if (token ==null) { return res.sendStatus(401)};
    jwt.verify(token, process.env.REFRESH_TOKEN, (Error, user)=>{
        if(Error) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000)