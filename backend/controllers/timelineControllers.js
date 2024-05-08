const Timeline=require('../models/timelineModel')
const mongoose=require('mongoose')

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
    createTimeline,
    getTimeline,
    deleteTimeline,
    updateTimeline
}