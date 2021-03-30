const mongoose = require('mongoose')

//similar to sql table
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
        required:true
    },
    pageCount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    },
    coverImage:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book',bookSchema)