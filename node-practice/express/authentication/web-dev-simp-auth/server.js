const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const users = []
app.get('/users', (req, res)=>{
    res.json(users)
})
app.post('/users', async (req, res)=>{
    try {
        // const salt = await bcrypt.genSalt()
        // const hashedPass = await bcrypt.hash(req.body.password, salt)//old method
        const hashedPass = await bcrypt.hash(req.body.password, 10)//new method
        console.log({hashedPass})
        const user = {
            name: req.body.name,
            password: hashedPass
        }
        users.push(user)
        res.json(users)
    } catch (error) {
        console.log({error})
        res.status(500).send()
    }
})

app.post('/users/login',async (req, res)=>{
    const user = users.find(user=> user.name === req.body.name)
    if (user ==null) {
        return res.status(400).send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send('success')
        } else {
            res.send('not allowed')
        }
    } catch (error) {
        console.log({error})
        res.status(500).send()
    }
})
app.listen(3000)
