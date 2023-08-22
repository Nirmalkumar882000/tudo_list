const FormData =require("../models/sampleData")

const insertData =async(req,res)=>{
    try {
        const {name,role}= await FormData.create(req.body)
        res.status(200).json({
            name:name,
            role:role
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports ={
    insertData
}