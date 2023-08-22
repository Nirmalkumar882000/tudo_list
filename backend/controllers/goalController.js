const Goal =require("../models/goalModel")

const getGoals =async(req,res)=>{
    try {
        const getGoals =await Goal.find();
        res.status(200).json(getGoals)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//create Goals

const createGoals = async(req,res)=>{
    try {
        const createGoal = await Goal.create(req.body)
        res.status(200).json(createGoal)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//single goals 
 

const singleGoal =async(req,res)=>{
    try {
        const {id} = req.params;
        const singleGoals = await Goal.findById(id);
        res.status(200).json(singleGoals)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const updateGoal =async(req,res)=>{
    try {
        const {id}=req.params;
        const goal=await Goal.findByIdAndUpdate(id,req.body)
        if(!goal){
            res.status(404).json({message:"Goal Not Found"})
        }
        const updateGoal =await Goal.findById(id)
        res.status(200).json(`updated ${id}`)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteGoals =async(req,res)=>{
    try {
        const {id}=req.params;
        const goal =await Goal.findByIdAndDelete(id);
        if(!goal){
            res.status(404).json({message:"Goal Not Found"})
        }
        const deleteGoal = await Goal.findById(id)
        res.status(200).json({message:`Deleted ${id}`})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}


module.exports ={
    getGoals,
    createGoals,
    singleGoal,
    updateGoal,
    deleteGoals
}
