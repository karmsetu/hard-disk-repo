const express = require('express')
const app = express()
app.listen(3000)
app.use(express.static('public'))
app.get('/', (req, res, next)=> {
    // res.download('some.txt')
    // res.status(200).send(`succesfull`)
    // res.send(`hi`)//generic
    res.render('index')
})