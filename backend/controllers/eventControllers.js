const Event=require('../models/eventModel')
const mongoose=require('mongoose')

// Get all events
const getEvents = async (req,res)=>{
    const event = await Event.find({}).sort({date:1,title:1})

    res.status(200).json(event)
}

// Get a single event
const getEvent = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such timeline"})
    }

    const event = await Event.findById(id)

    if (!event){
        return res.status(404).json({error:"No such timeline"})
    }

    res.status(200).json(event)
}

// Create a new event
const createEvent = async (req, res)=>{
    const {name,description,place,people,date} = req.body

    // Add doc to DB
    try {
        const event= await Event.create({name,description,place,people,date})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// Delete an event
const deleteEvent= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such timeline"})
    }

    const event= await Event.findOneAndDelete({_id:id})

    if (!event){
        return res.status(404).json({error:"No such timeline"})
    }

    res.status(200).json(event)
}

// Update an event
const updateEvent= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such timeline"})
    }

    const event= await Event.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!event){
        return res.status(404).json({error:"No such timeline"})
    }

    res.status(200).json(event)
}


module.exports ={
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}