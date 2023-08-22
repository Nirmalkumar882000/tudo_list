const express = require('express');
const router = express.Router();
const {
    getGoals,
    createGoals,
    singleGoal,
    updateGoal,
    deleteGoals

}= require('../controllers/goalController')


router.route('/goals').get(getGoals).post(createGoals)

    
router.route("/goals/:id").get(singleGoal).put(updateGoal).delete(deleteGoals)








module.exports = router

