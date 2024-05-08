const Timeline=require('../models/timelineModel')
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

// Get the only timeline
const getTimeline = async (req,res)=>{
    const timeline = await Timeline.find({})

    res.status(200).json(timeline)
}

// Create the timeline (only called once)
const createTimeline = async (req, res)=>{
    const {title,description,people,nbEvents,events,namesEvents,datesEvents} = req.body

    // Add doc to DB
    try {
        const timeline= await Timeline.create({title,description,people,nbEvents,events,namesEvents,datesEvents})
        res.status(200).json(timeline)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// Delete a timeline
const deleteTimeline= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such timeline"})
    }

    const timeline= await Timeline.findOneAndDelete({_id:id})

    if (!timeline){
        return res.status(404).json({error:"No such timeline"})
    }

    res.status(200).json(timeline)
}

// Update a timeline
const updateTimeline= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such timeline"})
    }

    const timeline= await Timeline.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!timeline){
        return res.status(404).json({error:"No such timeline"})
    }

    res.status(200).json(timeline)
}

module.exports ={
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    createTimeline,
    getTimeline,
    deleteTimeline,
    updateTimeline
}