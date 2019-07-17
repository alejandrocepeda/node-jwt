const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config()


// Database connect
mongoose.connection.on('connected', function() {
    //logger.info('MongoDB event connected');
    console.log('Database is connected')
});


mongoose.connect(process.env.DB_CONNECT,
  { userNewUrlParser: true },
  (err) => { 
    if (err){
        console.log(err)
    } 
  }
)


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Config
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json())

// Import routes
const authRoute = require(path.join(__dirname,'/routes/auth'))


//console.log(path.join(__dirname,'/routes/auth'))

// Route middlewares
app.use('/api/user', authRoute)

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`)
})
