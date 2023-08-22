const mongoose = require('mongoose');

const ReactFormDataSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        require:true
    }
})

const FormData =mongoose.model('FormData',ReactFormDataSchema)

module.exports =FormData;