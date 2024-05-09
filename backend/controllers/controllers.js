const Timeline=require('../models/timelineModel')
const Event=require('../models/eventModel')
const mongoose=require('mongoose')

// Get all events from timeline
const getEvents = async (req,res)=>{
    const timeline = await Timeline.find({})

    let arrayIds = []
    for (const e of timeline[0].events){
        arrayIds.push(e.id)
    }

    const event = await Event.find({ _id: { $in: arrayIds } }).sort({date:1,title:1})

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
    const {name,description,date} = req.body

    try {
        const event= await Event.create({name,description,date})

        const id=event._id

        const myTimeline = await Timeline.find({})
        const tId = myTimeline[0]._id

        const eventToAdd= {"id":id,"name":name,"date":date}

        const timeline= await Timeline.findOneAndUpdate({_id:tId},{
            $push: {events: eventToAdd}
        })

        if (!timeline){
            return res.status(404).json({error:"No such timeline"})
        }

        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

// Delete an event
const deleteEvent= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such event"})
    }

    const myTimeline = await Timeline.find({})
    const tId = myTimeline[0]._id

    let eventToRemove = null

    for (const e of myTimeline[0].events){
        if(id===e.id){
            eventToRemove=e
            break
        }
    }

    if (!eventToRemove){
        return res.status(404).json({error:"No such event"})
    }

    const timeline= await Timeline.findOneAndUpdate({_id:tId},{
        $pull: {events: eventToRemove}
    })

    const event= await Event.findOneAndDelete({_id:id})

    res.status(200).json(event)
}

// Update an event
const updateEvent= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such event"})
    }

    const event= await Event.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!event){
        return res.status(404).json({error:"No such event"})
    }
    if (req.body.name || req.body.date){
        const myTimeline = await Timeline.find({})
        const tId = myTimeline[0]._id

        let eventToUpdate = null

        for (const e of myTimeline[0].events){
            if(id===e.id){
                eventToUpdate=e
                break
            }
        }

        if (!eventToUpdate){
            return res.status(404).json({error:"No such event in the timeline"})
        }
        const eventUpdated= {"id":eventToUpdate.id,"name":(req.body.name)?req.body.name:eventToUpdate.name,"date":(req.body.date)?req.body.date:eventToUpdate.date}

        const oldTimeline= await Timeline.findOneAndUpdate({_id:tId},{
            $pull: {
                events:eventToUpdate
            }
        })

        const newTimeline= await Timeline.findOneAndUpdate({_id:tId},{
            $push: {
                events:eventUpdated
            }
        })
    }
    res.status(200).json(event)
}

// Get the only timeline
const getTimeline = async (req,res)=>{
    const timeline = await Timeline.find({})

    res.status(200).json(timeline[0])
}

// Create the timeline (only called once)
// const createTimeline = async (req, res)=>{
//     const {title,events} = req.body

//     // Add doc to DB
//     try {
//         const timeline= await Timeline.create({title,events})
//         res.status(200).json(timeline)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }

// Delete a timeline
// const deleteTimeline= async (req,res)=>{
//     const {id} = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:"No such timeline"})
//     }

//     const timeline= await Timeline.findOneAndDelete({_id:id})

//     if (!timeline){
//         return res.status(404).json({error:"No such timeline"})
//     }

//     res.status(200).json(timeline)
// }

module.exports ={
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    getTimeline
    //createTimeline,
    //deleteTimeline,    
}