const mongoose = require("mongoose");
const clipData = new mongoose.Schema({
    name:{
        type:String ,
        required: true
    },
    content:{
        type:String ,
        required: true
    },
    is_pinned:{
        type:Boolean ,
        required: true
    }
    
},{timestamps:true});

module.exports = mongoose.model('ClipData',clipData);