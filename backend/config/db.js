const { red, bgCyan } = require("colors")
const mongoose = require("mongoose")



const connectDB =async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://tudolist:W9venghPidljCRWp@cluster0.m1q3lr6.mongodb.net/tudolist",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongo Db connected ${conn.connection.host}`.bgCyan.underline)
        
    } catch (error) {
        console.log(error,"Mongo db not connected")
        
    }
}

module.exports = connectDB;

//W9venghPidljCRWp