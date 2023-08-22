const mongoose = require('mongoose')

const userShema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please enter the name']
        },
        email:{
            type:String,
            required:[true,'Enter the email addresss'],
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    })

    module.exports = mongoose.model('User',userShema)