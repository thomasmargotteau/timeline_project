const mongoose=require('mongoose')

const Schema = mongoose.Schema

const timelineSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    events:[{
        id:String,
        name:String,
        date:Date
    }]
})

module.exports = mongoose.model('Timeline',timelineSchema)