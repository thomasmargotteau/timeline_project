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
    events:[{
        type: Schema.Types.ObjectId, 
        ref: 'Event'
    }],
    nomsEvents:[{
        type: String
    }],
    datesEvents:[{
        type: Date
    }]
},{timestamps:true})

module.exports = mongoose.model('Timeline',timelineSchema)