const route = require('express').Router()

route.post('/register',(req,res)=>{
    res.send(`auth register route ${req.body.username}`)
})

route.post('/login',(req,res) => {
    res.send('auth login route')
})

module.exports = route
