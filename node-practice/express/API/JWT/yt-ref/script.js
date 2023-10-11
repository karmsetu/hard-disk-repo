require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

let postsData = [
    {
        "username":"shourya",
        "age":18 
    },
    {
        "username":"boi",
        "age":69 
    }
]

app.get('/posts',authenticateToken, (req, res)=>{
    console.log(req)
    // console.log(req.user.name)
    res.json(postsData.filter(post => console.log(post.username)))
    // res.json(postsData.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res)=>{
    // res.json(postsData)
    const userName = req.body.username
    const user = {name: userName}
    const accessToken = jwt.sign(user, process.env.ACCESS_KEY)
    res.json({
        accessToken: accessToken 
    })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'] 
    const token = authHeader && authHeader.split('  ')[1] //this is not working as intended, new method is stated below
    const obj = Object.entries(req.headers)[2][0]// fix01
    const reqHeader = req.headers
    const correctedToken = {'Bearer': obj}
    console.log({token, obj, reqHeader})
    if (correctedToken ==null) { return res.sendStatus(401)};
    jwt.verify(correctedToken, process.env.ACCESS_KEY, (Error, user)=>{
        if(Error) {
          console.log('problem')
          return res.sendStatus(403)
        }
        req.user = user
        console.log(req.user)
        next()
    })
}

app.listen(3000)