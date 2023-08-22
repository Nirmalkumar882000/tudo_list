const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser
} =require('../controllers/userControllers')


router.post('/register',registerUser);
router.post('/users/login',loginUser);



module.exports =router;