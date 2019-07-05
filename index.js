const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

//Database connect
mongoose.connect(process.env.DB_CONNECT,
    {userNewUrlParser:true},
    () =>{
        console.log('Database is connected')
    }
)

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Config
const PORT = process.env.PORT || 3000

//Import routes
const authRoute = require(path.resolve('routes/auth'))

//Route middlewares
app.use('/api/user',authRoute)

app.listen(PORT,() => {
    console.log(`server is up on port ${PORT}`)
})