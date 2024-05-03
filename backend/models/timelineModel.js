const mongoose=require('mongoose')

const Schema = mongoose.Schema

const timelineSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    people:[{type:String}],
    nbEvents:{
        type:Number,
        required:true
    },
    event:[{
        type: Schema.Types.ObjectId, 
        ref: 'Event'
    }]
},{timestamps:true})

module.exports = mongoose.model('Timeline',timelineSchema)