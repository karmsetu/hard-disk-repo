const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscriber')
//getting all subscribers
// app.use(express.json())
const app = express()
app.use(express.json())
router.get('/', async (req, res)=>{
    // res.send('hello World (routes)')
    try {
        const subscribers = await subscriber.find()
        res.send(subscribers)
    } catch (error) {
        res.json({massage: error.message}).statusCode(500)
    }
})
// getting one sub
router.get('/:id', getSubscribers, (req, res, next)=>{
    res.send(res.Subscriber)
})
// creating
router.post('/', async (req, res, next)=>{
    const Sub = new subscriber({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel,

    })
    console.log(req.body )
    // const Sub = new subscriber({
    //     name: "req.body.name",
    //     subscriberToChannel: "req.body.subscriberToChannel",

    // })
    try {
        const newSub = await Sub.save()
        res.json(newSub).status(205)
        
    } catch (error) {
        res.json({message: error.message}).status(400)
    }
})
// updating
router.patch('/',getSubscribers, async (req, res, next)=>{
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscriberToChannel != null) {
        res.subscriber.subscriberToChannel = req.body.subscriberToChannel

    }

    try {
        const updatedSub = await res.Subscriber.save()
        res.json(updatedSub)
    } catch (error) {
        res.status(400).json({errorMessage: error})
    }

})
// deleteing
router.delete('/:id',getSubscribers, async (req, res, next)=>{
    // res.subscriber
    try {
        await res.Subscriber.deleteOne()
        res.status(200).json({message: `the subscriber with the id:${req.params.id} has been deleted`})
    } catch (error) {
        res.status(500).json({errorMessage: error});
    }
})

async function getSubscribers(req, res, next) {
    let Subscriber
    try {
        console.log(subscriber)
        Subscriber = await subscriber.findById(req.params.id)
        if (Subscriber == null){
            return res.status(404).json({"message":"cannot find the subscriber"})
        }
    } catch (error) {
        console.error({errorMessage: error.message});
    }
    res.Subscriber = Subscriber
    next()
}

module.exports = router