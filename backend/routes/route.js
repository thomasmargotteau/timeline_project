const express=require('express')
const {
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent,
    createTimeline,
    getTimeline,
    deleteTimeline,
    updateTimeline
} = require('../controllers/controllers')

const router=express.Router()

// GET all events
router.get('/event/',getEvents)

// GET a single event
router.get('/event/:id',getEvent)

// POST a new event
router.post('/event/', createEvent)

// DELETE an event
router.delete('/event/:id',deleteEvent)

// UPDATE an event
router.patch('/event/:id',updateEvent)

// GET the only timeline
router.get('/timeline/',getTimeline)

// POST a new timeline
router.post('/timeline/', createTimeline)

// DELETE a timeline
router.delete('/timeline/:id',deleteTimeline)

// UPDATE a timeline
router.patch('/timeline/:id',updateTimeline)

module.exports = router