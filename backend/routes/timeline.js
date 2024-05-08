const express=require('express')
const {
    createTimeline,
    getTimeline,
    deleteTimeline,
    updateTimeline
} = require('../controllers/timelineControllers')

const router=express.Router()

// GET the only timeline
router.get('/',getTimeline)

// POST a new timeline
router.post('/', createTimeline)

// DELETE a timeline
router.delete('/:id',deleteTimeline)

// UPDATE a timeline
router.patch('/:id',updateTimeline)

module.exports = router