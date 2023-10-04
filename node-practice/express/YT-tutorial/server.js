console.log(`boi`)
const express = require('express')
const app = express()

app.listen(3000)
app.set('view engine', 'ejs')
app.get('/', (req, res, next)=> {
    // res.download('some.txt')
    // res.status(200).send(`succesfull`)
    // res.send(`hi`)//generic
    res.render('index', {text: 'world'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

