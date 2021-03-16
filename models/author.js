const mongoose = require('mongoose')

//similar to sql table
const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Author',authorSchema)