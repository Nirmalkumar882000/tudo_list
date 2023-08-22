const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors =require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const goalRoutes =require('./routes/goalRoutes');
const userRoutes =require('./routes/userRoutes')
const sampleRoute =require('./routes/sampleRoute')
const connectDB = require('./config/db')
const cors = require("cors")


connectDB();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());


app.use('/api/v1',goalRoutes);
app.use('/api/v1',userRoutes)
app.use('/',sampleRoute)
app.use(errorHandler)





app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running on port ${process.env.PORT}`.bgYellow)
})
