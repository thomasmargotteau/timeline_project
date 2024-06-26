const mongoose=require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    name:{type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:Date
})

module.exports = mongoose.model('Event',eventSchema)