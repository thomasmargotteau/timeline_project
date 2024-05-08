require('dotenv').config() //Calls globals stored in .env

const express=require('express')
const mongoose=require('mongoose')
const route = require('./routes/route')


// Creation of app
const app = express()

// Middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next() // to execute to rest of the code
})

// Routes
app.use('/api',route)

// Connection to DB
mongoose.connect(process.env.MONG_URL)
.then(()=>{
    // Listen for req
    app.listen(process.env.PORT,()=>{
        console.log('Connected to DB and listening on port',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})