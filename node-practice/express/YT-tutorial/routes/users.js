const express = require('express')
const router = express.Router()
router.get('/', (req, res, next)=> {
    res.send(`user`)
})

router.get('/new', (req, res, next)=> {
    res.send(`user-new`) 
})

// router.get('/:id', (req, res)=> {
//     req.params.id
//     res.send(`id name ${req.params.id}`)
// }) // dynamic params handling

// router.put('/:id', (req, res)=> {
//     req.params.id
//     res.send(`put id name ${req.params.id}`)
// })

// router.delete('/:id', (req, res)=> {
//     req.params.id
//     res.send(` delete id name ${req.params.id}`)
// })

router.route('/:id')
    .get((req, res)=> {
    req.params.id
    res.send(`id name ${req.params.id}`)
}).put((req, res)=> {
    req.params.id
    res.send(`put id name ${req.params.id}`)
}).delete((req, res)=> {
    req.params.id
    res.send(` delete id name ${req.params.id}`)
}) // consising th ecode above

router.param('id', (req, res, next, idValue)=>{
    console.log(idValue)
    next()
})


module.exports = router