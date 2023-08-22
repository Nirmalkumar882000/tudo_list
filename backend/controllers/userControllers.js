const User = require('../models/userModels');
const jwt =require ('jsonwebtoken')
const bcrypt = require ('bcrypt')
const asyncHandler = require('express-async-handler')


const registerUser =asyncHandler(async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            res.status(404).json({message:"Please add all the fields"})
            
        }
        const userExits =await User.findOne({email});
        if(userExits){
            res.status(404).json({message:"User already Exists"}) 
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        })

        if(user){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email
            })
        }else{
            res.status(400).json({message:"Invalid user data"})
        }
        res.status(200).json({message:"User Regsitered"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



//login user

const loginUser =asyncHandler(async(req,res)=>{
    try {
        
        
    } catch (error) {
        
    }
})





module.exports = {
    registerUser,
    loginUser
}