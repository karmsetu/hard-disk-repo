const express = require('express');
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('root')
})
app.get('/api', (req, res)=>{
    res.json({
        message: "welcome to the API"
    })
})
app.post('/api/posts',verifyToken, (req, res)=>{
    jwt.verify(
        req.token,
        'secretKey',
        (error, authData)=>{
            if (error) {
                res.sendStatus(403)
            }else {
                res.json({
                    message: "post created...",
                    content: authData
                })
            }
        }
    )
})

app.post('/api/log-in', (req, res)=>{
    //mock user
    const user = {
        id:1,
        username: "boi",
        eMail: "@gmail"
    }
    jwt.sign({user:user}, 'secretKey', (error, token)=>{
        res.json({
            token: token
        })
    })
})

function verifyToken(req, res, next) {
    //get auth token value
    const bearerHeader = req.headers['authorization']
    //check if it is undefined
    console.log(req)
    if (typeof(bearerHeader)!= undefined) {
        res.json({message: bearerHeader})
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
        
    } else {
        res.sendStatus(403)
    }
}

app.listen(3000)