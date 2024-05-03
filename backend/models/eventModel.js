const mongoose=require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    place:String,
    people:[{type:String}]
},{timestamps:true})

module.exports = mongoose.model('Event',eventSchema)